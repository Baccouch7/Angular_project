import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConferenceListComponent } from './components/conference-list/conference-list.component';
import { ConferenceDetailComponent } from './components/conference-detail/conference-detail.component';
import { ConferenceService } from './services/conference.service';
import { Conference } from './models/conference.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavMenuComponent,
    UserProfileComponent,
    FriendsListComponent,
    NotificationsComponent,
    FooterComponent,
    ConferenceListComponent,
    ConferenceDetailComponent
  ],
  template: `
    <app-header></app-header>
    <app-nav-menu></app-nav-menu>

    <main class="layout">
      <section class="page-profile">
        <app-user-profile></app-user-profile>
        <app-friends-list></app-friends-list>
        <app-notifications></app-notifications>
      </section>

      <section class="page-conferences">
        <app-conference-list
          (conferenceSelected)="onConferenceSelected($event)">
        </app-conference-list>

        <app-conference-detail
          [conference]="selectedConference()">
        </app-conference-detail>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .layout {
      max-width: 1200px;
      margin: 1.5rem auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .page-profile {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .page-conferences {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    @media (max-width: 800px) {
      .page-conferences { grid-template-columns: 1fr; }
    }
  `]
})
export class AppComponent {
  private conferenceService = inject(ConferenceService);
  selectedConference = this.conferenceService.selected;

  onConferenceSelected(conf: Conference): void {
    this.conferenceService.select(conf);
  }
}