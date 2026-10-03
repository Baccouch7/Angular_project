import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <div class="card">
      <h3>👤 Profil utilisateur</h3>
      <div class="profile">
        <span class="avatar">{{ user().avatar }}</span>
        <div>
          <p class="name">{{ user().name }}</p>
          <p class="role">{{ user().role }}</p>
          <p class="email">{{ user().email }}</p>
        </div>
      </div>
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
    .profile { display: flex; align-items: center; gap: 1rem; }
    .avatar { font-size: 2.5rem; }
    .name { font-weight: 700; }
    .role { color: #2980b9; font-size: 0.9rem; }
    .email { color: #7f8c8d; font-size: 0.85rem; }
  `]
})
export class UserProfile {
  private userService = inject(UserService);
  user = this.userService.user;
}