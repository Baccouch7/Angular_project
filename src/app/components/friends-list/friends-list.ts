import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  template: `
    <div class="card">
      <h3>👥 Mes amis</h3>
      @if (friends().length > 0) {
        <ul>
          @for (friend of friends(); track friend.id) {
            <li>
              <span class="avatar">{{ friend.avatar }}</span>
              <span class="name">{{ friend.name }}</span>
              <span class="status" [class.online]="friend.online">
                {{ friend.online ? '● En ligne' : '○ Hors ligne' }}
              </span>
            </li>
          }
        </ul>
      } @else {
        <p>Aucun ami pour le moment.</p>
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
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 6px 0;
      border-bottom: 1px solid #ecf0f1;
    }
    li:last-child { border-bottom: none; }
    .avatar { font-size: 1.3rem; }
    .name { flex: 1; font-weight: 500; }
    .status { font-size: 0.8rem; color: #95a5a6; }
    .status.online { color: #27ae60; }
  `]
})
export class FriendsList {
  private userService = inject(UserService);
  friends = this.userService.friends;
}