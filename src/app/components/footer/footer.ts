import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>© 2026 — Application de gestion des conférences</p>
    </footer>
  `,
  styles: [`
    .app-footer {
      background: #2c3e50;
      color: #bdc3c7;
      text-align: center;
      padding: 1rem;
      font-size: 0.85rem;
    }
  `]
})
export class Footer {}