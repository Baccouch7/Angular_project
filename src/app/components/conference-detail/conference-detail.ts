import { Component, inject, input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';
import { ConferenceService } from '../../services/conference';

@Component({
  selector: 'app-conference-detail',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  template: `
    <div class="card">
      <h3>📋 Détail de la conférence</h3>

      @if (conference(); as conf) {
        <h2>{{ conf.title | uppercase }}</h2>
        <p class="desc">{{ conf.description }}</p>
        <ul class="infos">
          <li><strong>Intervenant :</strong> {{ conf.speaker }}</li>
          <li><strong>Date :</strong> {{ conf.date | date:'EEEE dd MMMM yyyy' }}</li>
          <li><strong>Lieu :</strong> {{ conf.place }}</li>
          <li><strong>Places :</strong> {{ conf.nbParticipants }} / {{ conf.maxParticipants }}</li>
        </ul>
      } @else {
        <p class="empty">Sélectionnez une conférence pour voir les détails.</p>
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
    h2 { color: #2980b9; margin-bottom: 0.5rem; }
    .desc { color: #555; margin-bottom: 0.8rem; }
    .infos { list-style: none; }
    .infos li { padding: 4px 0; }
    .empty { color: #95a5a6; font-style: italic; }
  `]
})
export class ConferenceDetail {
  conference = input<Conference | null>(null);

  private conferenceService = inject(ConferenceService);
  selectedFromService = this.conferenceService.selected;
}