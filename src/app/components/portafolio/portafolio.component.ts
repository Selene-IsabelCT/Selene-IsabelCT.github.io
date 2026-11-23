import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, MenubarModule, CardModule, ButtonModule, DialogModule],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class PortafolioComponent {
  mostrarDialogo: boolean = false;

  items: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home' },
    { label: 'Sobre Mí', icon: 'pi pi-user' },
    { label: 'Experiencia', icon: 'pi pi-briefcase' },
    { 
      label: 'Contacto', 
      icon: 'pi pi-envelope',
      command: () => {
        this.mostrarDialogo = true; // Abre la ventana al hacer clic
      }
    }
  ];
}