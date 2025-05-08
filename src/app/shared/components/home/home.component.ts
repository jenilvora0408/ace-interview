import { Component } from '@angular/core';
import { ModuleOptionsComponent } from '../module-options/module-options.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModuleOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
