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

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const codeEl = this.elRef.nativeElement.querySelector('pre code');
    if (codeEl) {
      codeEl.textContent = this.code.trim();
      hljs.highlightElement(codeEl);
    }
  }

  copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      alert('Code copied!');
    });
  }
}
