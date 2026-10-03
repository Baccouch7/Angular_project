import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import { Friend } from '../models/friend';

@Injectable({ providedIn: 'root' })
export class UserService {
  readonly user = signal<User>({
    id: 1,
    name: 'Amine Ben Ali',
    email: 'amine@example.com',
    role: 'Développeur Angular',
    avatar: '👨‍💻'
  });

  readonly friends = signal<Friend[]>([
    { id: 1, name: 'Sara', avatar: '👩', online: true },
    { id: 2, name: 'Youssef', avatar: '🧑', online: false },
    { id: 3, name: 'Lina', avatar: '👧', online: true },
    { id: 4, name: 'Karim', avatar: '👦', online: false }
  ]);

  readonly notifications = signal<string[]>([
    'Nouvelle conférence ajoutée : Signals & Réactivité',
    'Sara vous a envoyé un message',
    'Rappel : Introduction à Angular demain'
  ]);
}