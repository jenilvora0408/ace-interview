import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  type?: string;
  imageUrl?: string;
  schema?: object | object[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly defaultBaseUrl = 'https://jenilvora0408.github.io/ace-interview';
  private readonly siteName = 'Ace Interview';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public updatePageSeo(config: SeoConfig): void {
    // 1. Page Title
    const fullTitle = config.title.includes(this.siteName)
      ? config.title
      : `${config.title} | ${this.siteName}`;
    this.titleService.setTitle(fullTitle);

    // 2. Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }
    this.metaService.updateTag({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });
    this.metaService.updateTag({ name: 'author', content: 'Ace Interview' });

    // 3. Open Graph Tags
    const pageUrl = config.url ? `${this.defaultBaseUrl}${config.url}` : this.defaultBaseUrl;
    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: pageUrl });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'article' });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });

    // 4. Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });

    // 5. Canonical Link
    this.setCanonicalUrl(pageUrl);

    // 6. Structured Data (JSON-LD)
    if (config.schema) {
      this.setJsonLd(config.schema);
    }
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(schema: object | object[]): void {
    let script: HTMLScriptElement | null = this.document.getElementById('seo-json-ld') as HTMLScriptElement;
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }
}

