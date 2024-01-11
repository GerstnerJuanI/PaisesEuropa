import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaisesService } from './services/paises.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  paises: any[];

  constructor(private paisesService: PaisesService) {
    this.paises = [];
  }

  async ngOnInit() {
    this.paises = await this.paisesService.getPaises();
    console.log(this.paises);
  }
}
