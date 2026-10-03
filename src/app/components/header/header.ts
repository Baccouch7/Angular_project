import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <h1>🎤 Gestion des Conférences</h1>
      <span class="version">Angular 21</span>
    </header>
  `,
  styles: [`
    .app-header {
      background: linear-gradient(135deg, #2c3e50, #34495e);
      color: white;
      padding: 1.2rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    h1 { font-size: 1.5rem; }
    .version {
      background: #e74c3c;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
    }
  `]
})
export class Header {}