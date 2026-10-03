import { Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  private conferencesSignal = signal<Conference[]>([
    {
      id: 1,
      title: 'Introduction à Angular',
      description: 'Découvrir les bases du framework Angular 21.',
      speaker: 'M. Dupont',
      date: '2026-11-15',
      place: 'Amphi A',
      maxParticipants: 100,
      nbParticipants: 45
    },
    {
      id: 2,
      title: 'Signals & Réactivité',
      description: 'Maîtriser les Signals et le contrôle de flux natif.',
      speaker: 'Mme Martin',
      date: '2026-12-03',
      place: 'Salle B12',
      maxParticipants: 50,
      nbParticipants: 47
    },
    {
      id: 3,
      title: 'Architecture modulaire',
      description: 'Organiser une application Angular scalable.',
      speaker: 'M. Bernard',
      date: '2025-01-10',
      place: 'Amphi C',
      maxParticipants: 200,
      nbParticipants: 200
    },
    {
      id: 4,
      title: 'RxJS avancé',
      description: 'Opérateurs et gestion des flux asynchrones.',
      speaker: 'Mme Petit',
      date: '2027-02-20',
      place: 'Salle A1',
      maxParticipants: 30,
      nbParticipants: 30
    }
  ]);

  private selectedSignal = signal<Conference | null>(null);

  readonly conferences = this.conferencesSignal.asReadonly();
  readonly selected = this.selectedSignal.asReadonly();

  select(conference: Conference): void {
    this.selectedSignal.set(conference);
  }

  register(conferenceId: number): void {
    this.conferencesSignal.update((list) =>
      list.map((c) =>
        c.id === conferenceId && c.nbParticipants < c.maxParticipants
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c
      )
    );

    const current = this.selectedSignal();
    if (current && current.id === conferenceId && current.nbParticipants < current.maxParticipants) {
      this.selectedSignal.set({ ...current, nbParticipants: current.nbParticipants + 1 });
    }
  }
}