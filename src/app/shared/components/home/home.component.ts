import { Component, OnInit } from '@angular/core';
import { ModuleOptionsComponent } from '../module-options/module-options.component';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModuleOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updatePageSeo({
      title: 'Ace Interview | Crack Technical Interviews with Curated Q&A',
      description: 'Free, curated technical interview preparation guide with comprehensive questions, code examples, and in-depth answers across .NET Core, Software Architecture, SQL, and OOP.',
      keywords: 'technical interview questions, .net core interview, c# interview questions, sql interview questions, software architecture interview, oops interview, system design interview, ace interview',
      url: '/',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ace Interview',
        url: 'https://jenilvora0408.github.io/ace-interview/',
        description: 'Curated technical interview questions and comprehensive answers for software engineers.',
        inLanguage: 'en',
        author: {
          '@type': 'Person',
          name: 'Jenil Vora'
        }
      }
    });
  }
}
