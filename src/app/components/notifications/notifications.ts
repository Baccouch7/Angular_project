import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-notifications',
  standalone: true,
  template: `
    <div class="card">
      
          @for (n of notifications(); track n; let i = $index) {
            <li>
              <span class="badge">{{ i + 1 }}</span>
              {{ n }}
            </li>
          }
    
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
      gap: 0.6rem;
      padding: 8px 0;
      border-bottom: 1px solid #ecf0f1;
      font-size: 0.9rem;
    }
    li:last-child { border-bottom: none; }
    .badge {
      background: #e74c3c;
      color: white;
      border-radius: 50%;
      min-width: 22px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
    }
  `]
})
export class Notifications {
  private userService = inject(UserService);
  notifications = this.userService.notifications;
}