import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ModuleItem {
  id: string;
  name: string;
  description: string;
  route?: string;
  questionCount?: number;
  isReady: boolean;
  category: string;
}

@Component({
  selector: 'app-module-options',
  standalone: true,
  imports: [],
  templateUrl: './module-options.component.html',
  styleUrl: './module-options.component.scss'
})
export class ModuleOptionsComponent {
  modules: Array<ModuleItem> = [
    {
      id: 'dotnet-core',
      name: 'ASP.NET (Core + MVC)',
      description: 'Architecture, MVC, DI, Middlewares, EF Core, Asynchronous Programming & APIs',
      route: '/dotnet-core',
      questionCount: 38,
      isReady: true,
      category: 'Backend'
    },
    {
      id: 'oops',
      name: 'OOPS Concepts',
      description: 'Encapsulation, Polymorphism, Inheritance, Abstraction & C# implementations',
      route: '/oops',
      questionCount: 31,
      isReady: true,
      category: 'Core'
    },
    {
      id: 'sql',
      name: 'SQL',
      description: 'Joins, Indexes, Stored Procedures, Transactions, Triggers & Frequently Asked Queries',
      route: '/sql',
      questionCount: 27,
      isReady: true,
      category: 'Database'
    },
    {
      id: 'angular',
      name: 'Angular',
      description: 'Signals, Components, RxJS, Lifecycle Hooks & Dependency Injection',
      isReady: false,
      category: 'Frontend'
    },
    {
      id: 'javascript-jquery',
      name: 'JavaScript & jQuery',
      description: 'Event Loop, Closures, Prototypes, Promises, DOM Selectors & AJAX',
      isReady: false,
      category: 'Frontend'
    },
    {
      id: 'architecture-fundamentals',
      name: 'Architecture and Fundamentals',
      description: 'Design Patterns, SOLID Principles, System Architecture & Clean Code',
      route: '/architecture-fundamentals',
      questionCount: 6,
      isReady: true,
      category: 'Architecture'
    }
  ];

  toastMessage: string | null = null;
  private toastTimer: any;

  constructor(private router: Router) { }

  loadModule(item: ModuleItem): void {
    if (item.isReady && item.route) {
      this.router.navigate([item.route]);
    } else {
      this.showToast(`Questions for ${item.name} are coming soon!`);
    }
  }

  showToast(message: string): void {
    this.toastMessage = message;
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.toastTimer = setTimeout(() => {
      this.toastMessage = null;
    }, 2800);
  }
}
