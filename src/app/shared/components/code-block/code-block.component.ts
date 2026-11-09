import { Component, ElementRef, Input, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent implements AfterViewInit {
  @Input() code: string = '';
  @Input() language: string = 'typescript';
  copied: boolean = false;

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const codeEl = this.elRef.nativeElement.querySelector('pre code');
      if (codeEl) {
        hljs.highlightElement(codeEl);
      }
    }
  }

  copyCode() {
    if (!this.code) return;
    if (isPlatformBrowser(this.platformId) && navigator?.clipboard) {
      navigator.clipboard.writeText(this.code).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      });
    }
  }
}
