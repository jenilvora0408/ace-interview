import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-architecture-fundamentals',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './architecture-fundamentals.component.html',
  styleUrl: './architecture-fundamentals.component.scss'
})
export class ArchitectureFundamentalsComponent implements OnInit {
  @ViewChild('contentContainer') contentContainer!: ElementRef;

  @ViewChild('q1') q1!: ElementRef;
  @ViewChild('q2') q2!: ElementRef;
  @ViewChild('q3') q3!: ElementRef;
  @ViewChild('q4') q4!: ElementRef;
  @ViewChild('q5') q5!: ElementRef;
  @ViewChild('q6') q6!: ElementRef;

  isMobileNavOpen: boolean = false;
  searchQuery: string = '';

  questions: Array<{ id: string; title: string }> = [
    { id: 'q1', title: '1. What is SDLC (Software Development Life Cycle) and what are its key phases?' },
    { id: 'q2', title: '2. What are the SOLID Principles?' },
    { id: 'q3', title: '3. What is the difference between HTTP and HTTPS? Why was HTTPS introduced and who introduced it?' },
    { id: 'q4', title: '4. What is REST and RESTful API? Explain the key REST principles.' },
    { id: 'q5', title: '5. What is Monolithic Architecture and Modular Monolithic Architecture?' },
    { id: 'q6', title: '6. Monolith vs. Microservices Architecture: What are the key differences and when to use which?' }
  ];

  filteredQuestions: Array<{ id: string; title: string }> = [];

  dipCode: string = `// Low-level module (the detail)
public interface IMessageService { void Send(string msg); }

// High-level module (the logic)
public class Notification
{
    private readonly IMessageService _service;
    
    // The class doesn't care if it's EmailService or SmsService
    public Notification(IMessageService service) 
    {
        _service = service;
    }
}`;

  ngOnInit(): void {
    this.filteredQuestions = [...this.questions];
  }

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.searchQuery = query;
    if (!query) {
      this.filteredQuestions = [...this.questions];
    } else {
      this.filteredQuestions = this.questions.filter(q =>
        q.title.toLowerCase().includes(query)
      );
    }
  }

  scrollToQuestion(id: string) {
    this.isMobileNavOpen = false;
    const questionMap: { [key: string]: ElementRef } = {
      q1: this.q1,
      q2: this.q2,
      q3: this.q3,
      q4: this.q4,
      q5: this.q5,
      q6: this.q6
    };

    const target = questionMap[id];
    if (target) {
      if (window.innerWidth < 992) {
        target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (this.contentContainer) {
        const container = this.contentContainer.nativeElement;
        const targetElement = target.nativeElement;
        const offsetTop = targetElement.offsetTop;
        container.scrollTo({ top: offsetTop - 15, behavior: 'smooth' });
      }
    }
  }
}

