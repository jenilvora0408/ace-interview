import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-options',
  standalone: true,
  imports: [],
  templateUrl: './module-options.component.html',
  styleUrl: './module-options.component.scss'
})
export class ModuleOptionsComponent {
  modules: Array<string> = ["OOPS", ".NET Core", "Angular", "SQL", "JavaScript", "jQuery"];

  constructor(private router: Router){}

  loadModule(module: string){
    console.log(module);
    switch (module) {
      case "OOPS":
        this.router.navigate(['/oops'])
        break;

      case ".NET Core":
        this.router.navigate(['/dotnet-core']);
        break;

      case "SQL":
        this.router.navigate(['/sql']);
        break;
    
      default:
        break;
    }
  }
}
