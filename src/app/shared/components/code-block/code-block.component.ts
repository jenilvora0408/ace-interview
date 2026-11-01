import { Component, ElementRef, Input } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent {
  @Input() code: string = '';
  @Input() language: string = 'typescript';
  copied: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const codeEl = this.elRef.nativeElement.querySelector('pre code');
    if (codeEl) {
      codeEl.textContent = this.code.trim();
      hljs.highlightElement(codeEl);
    }
  }

  copyCode() {
    if (!this.code) return;
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}
