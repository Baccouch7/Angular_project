import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { NavMenu } from './components/nav-menu/nav-menu';
import { UserProfile } from './components/user-profile/user-profile';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';
import { ConferenceList } from './components/conference-list/conference-list';
import { ConferenceDetail } from './components/conference-detail/conference-detail';
import { ConferenceService } from './services/conference';
import { Conference } from './models/conference';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    NavMenu,
    UserProfile,
    FriendsList,
    Notifications,
    Footer,
    ConferenceList,
    ConferenceDetail
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private conferenceService = inject(ConferenceService);
  selectedConference = this.conferenceService.selected;

  onConferenceSelected(conf: Conference): void {
    this.conferenceService.select(conf);
  }
}