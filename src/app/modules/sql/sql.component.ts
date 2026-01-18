import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SqlComponent {
  @ViewChild('contentContainer') contentContainer!: ElementRef;

  @ViewChild('q1') q1!: ElementRef;
  @ViewChild('q2') q2!: ElementRef;
  @ViewChild('q3') q3!: ElementRef;
  @ViewChild('q4') q4!: ElementRef;
  @ViewChild('q5') q5!: ElementRef;
  @ViewChild('q6') q6!: ElementRef;
  @ViewChild('q7') q7!: ElementRef;
  @ViewChild('q8') q8!: ElementRef;
  @ViewChild('q9') q9!: ElementRef;
  @ViewChild('q10') q10!: ElementRef;
  @ViewChild('q11') q11!: ElementRef;
  @ViewChild('q12') q12!: ElementRef;
  @ViewChild('q13') q13!: ElementRef;
  @ViewChild('q14') q14!: ElementRef;
  @ViewChild('q15') q15!: ElementRef;
  @ViewChild('q16') q16!: ElementRef;
  @ViewChild('q17') q17!: ElementRef;
  @ViewChild('q18') q18!: ElementRef;
  @ViewChild('q19') q19!: ElementRef;

  innerJoinSyntax: string = `SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;`;

  leftJoinSyntax: string = `SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;`;

  rightJoinSyntax: string = `SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`;

fullJoinSyntax: string = `SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;`;

selfJoinSyntax: string = `SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;`;

noLockSyntax: string = `SELECT * FROM Employees WITH (NOLOCK);`;

stuffSyntax: string = `STUFF(original_string, start_position, length_to_replace, new_string)`;

stuffExample: string = `STUFF("HelloWorld", 6, 5, "SQL")`;

stuffOutput: string = `HelloSQL`;

whereClauseExample: string = `SELECT * from Employees
WHERE Department = 'HR'`;

havingClauseExample: string = `SELECT Department, Count(*) as Total
From Employees
GROUP BY Department
HAVING COUNT(*) > 5`;

nonClusteredIndexCode: string = `CREATE INDEX IX_Users_LastName
ON Users (LastName);
`;

compositeIndexCode: string = `CREATE INDEX IX_Users_First_Last
ON Users (FirstName, LastName);
`;

  constructor(){}

  ngOnInit():void{}

  scrollToQuestion(id: string) {
    const questionMap: { [key: string]: ElementRef } = {
      q1: this.q1,
      q2: this.q2,
      q3: this.q3,
      q4: this.q4,
      q5: this.q5,
      q6: this.q6,
      q7: this.q7,
      q8: this.q8,
      q9: this.q9,
      q10: this.q10,
      q11: this.q11,
      q12: this.q12,
      q13: this.q13,
      q14: this.q14,
      q15: this.q15,
      q16: this.q16,
      q17: this.q17,
      q18: this.q18,
      q19: this.q19
    };

    const target = questionMap[id];
    if (target && this.contentContainer) {
      const container = this.contentContainer.nativeElement;
      const targetElement = target.nativeElement;
      const offsetTop = targetElement.offsetTop;

      container.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }
}
