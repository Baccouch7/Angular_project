import { Component, inject, computed, output } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ConferenceService } from '../../services/conference';
import { Conference } from '../../models/conference';
import { SeatStatusPipe } from '../../pipes/seat-status-pipe';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, SeatStatusPipe],
  template: `
    <div class="card">
      <h3>📅 Conférences à venir</h3>

      @if (upcomingConferences().length === 0) {
        <p class="empty">Aucune conférence enregistrée.</p>
      } @else {
        <ul>
          @for (conf of upcomingConferences(); track conf.id) {
            <li (click)="select(conf)"
                [class.selected]="selected()?.id === conf.id">
              <div class="line">
                <strong>{{ conf.title | uppercase }}</strong>
                <span class="date">{{ conf.date | date:'dd/MM/yyyy' }}</span>
              </div>
              <small>{{ conf.place }} — {{ conf.speaker }}</small>

              @if (remaining(conf) > 0) {
                @switch (remaining(conf) | seatStatus) {
                  @case ('available') {
                    <button class="green" (click)="register(conf, $event)">
                      S'inscrire
                    </button>
                  }
                  @case ('limited') {
                    <button class="orange" (click)="register(conf, $event)">
                      S'inscrire ({{ remaining(conf) }} places)
                    </button>
                  }
                }
              } @else {
                <button class="red" disabled>Complet</button>
              }
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 10px;
      padding: 1rem 1.2rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
    h3 { margin-bottom: 0.8rem; color: #2c3e50; }
    ul { list-style: none; }
    li {
      padding: 10px;
      border-bottom: 1px solid #ecf0f1;
      cursor: pointer;
      border-radius: 6px;
      transition: background 0.15s;
    }
    li:hover { background: #f8f9fa; }
    li.selected { background: #d6eaf8; }
    .line { display: flex; justify-content: space-between; }
    .date { color: #7f8c8d; font-size: 0.85rem; }
    small { color: #95a5a6; }
    button { margin-top: 6px; }
    .empty { color: #95a5a6; font-style: italic; }
  `]
})
export class ConferenceList {
  private conferenceService = inject(ConferenceService);

  readonly conferences = this.conferenceService.conferences;
  readonly selected = this.conferenceService.selected;

  readonly conferenceSelected = output<Conference>();

  readonly upcomingConferences = computed(() =>
    this.conferences().filter((c) => new Date(c.date) > new Date())
  );

  remaining(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  select(conf: Conference): void {
    this.conferenceService.select(conf);
    this.conferenceSelected.emit(conf);
  }

  register(conf: Conference, event: Event): void {
    event.stopPropagation();
    this.conferenceService.register(conf.id);
  }
}