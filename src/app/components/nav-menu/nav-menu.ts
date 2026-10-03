import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  template: `
    <nav class="nav-menu">
      @for (item of menuItems(); track item) {
        <a href="#"
           [class.active]="activeItem() === item"
           (click)="setActive(item, $event)">
          {{ item }}
        </a>
      }
    </nav>
  `,
  styles: [`
    .nav-menu {
      background: #34495e;
      display: flex;
      gap: 1rem;
      padding: 0.7rem 2rem;
    }
    a {
      color: #ecf0f1;
      text-decoration: none;
      padding: 6px 14px;
      border-radius: 6px;
      
    }
    a:hover, a.active {
      background: #2980b9;
    }
  `]
})
export class NavMenu {
  menuItems = signal<string[]>(['Accueil', 'Conférences', 'Mes amis', 'Profil']);
  activeItem = signal<string>('Accueil');

  setActive(item: string, event: Event): void {
    event.preventDefault();
    this.activeItem.set(item);
  }
}