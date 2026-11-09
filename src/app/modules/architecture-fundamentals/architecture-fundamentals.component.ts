import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SeoService } from '../../core/services/seo.service';

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

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.filteredQuestions = [...this.questions];

    this.seo.updatePageSeo({
      title: 'Software Architecture & System Design Interview Questions | Ace Interview',
      description: 'Ace software engineering architecture interviews: SDLC phases, SOLID principles, HTTP vs HTTPS TLS handshake, REST principles, Monolith vs Microservices architectures.',
      keywords: 'software architecture interview questions, system design interview questions, solid principles, monolith vs microservices, modular monolith, rest api principles, http vs https',
      url: '/architecture-fundamentals',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the SOLID Principles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SOLID is an acronym for 5 design principles: Single Responsibility Principle (SRP), Open/Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP). They ensure software is maintainable, scalable, and testable.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between HTTP and HTTPS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HTTP transmits plain-text data over port 80. HTTPS encrypts communication over port 443 using TLS/SSL cryptographic protocols, guaranteeing confidentiality, data integrity, and authentication through digital certificates.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is REST and RESTful API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'REST (Representational State Transfer) is an architectural style for distributed hypermedia systems. Key constraints include: Client-Server architecture, Statelessness, Cacheability, Layered System, Uniform Interface (standard HTTP verbs), and optional Code on Demand.'
            }
          },
          {
            '@type': 'Question',
            name: 'Monolith vs Microservices: When should you use which?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Monolith bundles all business domains into a single codebase and deployment unit; it is ideal for early-stage products, small teams, and fast initial iteration. Microservices divide capabilities into independently deployable bounded contexts with decentralized data; it suits large teams needing autonomous release cycles despite higher operational overhead.'
            }
          }
        ]
      }
    });
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

