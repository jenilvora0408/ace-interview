import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SqlComponent implements OnInit {
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
  @ViewChild('q20') q20!: ElementRef;
  @ViewChild('q21') q21!: ElementRef;
  @ViewChild('q22') q22!: ElementRef;
  @ViewChild('q23') q23!: ElementRef;
  @ViewChild('q24') q24!: ElementRef;
  @ViewChild('q25') q25!: ElementRef;
  @ViewChild('q26') q26!: ElementRef;
  @ViewChild('q27') q27!: ElementRef;

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

  nthHighestSalarySubqueryCode: string = `SELECT MAX(Salary) AS SecondHighestSalary
FROM Employees
WHERE Salary < (SELECT MAX(Salary) FROM Employees);`;

  nthHighestSalaryDenseRankCode: string = `WITH RankedSalaries AS (
    SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS RankNum
    FROM Employees
)
SELECT Salary
FROM RankedSalaries
WHERE RankNum = 2; -- Replace 2 with N for N-th highest salary`;

  findDuplicatesCode: string = `SELECT Email, COUNT(*) AS DuplicateCount
FROM Users
GROUP BY Email
HAVING COUNT(*) > 1;`;

  findAllDuplicateRowsCode: string = `SELECT *
FROM Users
WHERE Email IN (
    SELECT Email
    FROM Users
    GROUP BY Email
    HAVING COUNT(*) > 1
)
ORDER BY Email;`;

  deleteDuplicatesCode: string = `WITH DuplicateCTE AS (
    SELECT *,
           ROW_NUMBER() OVER (
               PARTITION BY Email 
               ORDER BY Id ASC
           ) AS RowNum
    FROM Users
)
DELETE FROM DuplicateCTE
WHERE RowNum > 1;`;

  employeeManagerSelfJoinCode: string = `SELECT 
    e.Name AS EmployeeName,
    e.Salary AS EmployeeSalary,
    m.Name AS ManagerName,
    m.Salary AS ManagerSalary
FROM Employees e
INNER JOIN Employees m 
    ON e.ManagerId = m.EmployeeId
WHERE e.Salary > m.Salary;`;

  deptNoEmployeesJoinCode: string = `SELECT d.DepartmentId, d.DepartmentName
FROM Departments d
LEFT JOIN Employees e 
    ON d.DepartmentId = e.DepartmentId
WHERE e.EmployeeId IS NULL;`;

  deptNoEmployeesExistsCode: string = `SELECT d.DepartmentId, d.DepartmentName
FROM Departments d
WHERE NOT EXISTS (
    SELECT 1 
    FROM Employees e 
    WHERE e.DepartmentId = d.DepartmentId
);`;

  topEarnerPerDeptCode: string = `WITH RankedDepartmentSalaries AS (
    SELECT 
        EmployeeId,
        Name,
        DepartmentId,
        Salary,
        DENSE_RANK() OVER (
            PARTITION BY DepartmentId 
            ORDER BY Salary DESC
        ) AS RankNum
    FROM Employees
)
SELECT EmployeeId, Name, DepartmentId, Salary
FROM RankedDepartmentSalaries
WHERE RankNum = 1;`;

  runningTotalCode: string = `SELECT 
    OrderId,
    OrderDate,
    OrderAmount,
    SUM(OrderAmount) OVER (
        ORDER BY OrderDate, OrderId
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS RunningTotal
FROM Orders;`;

  unionVsUnionAllCode: string = `-- UNION: Returns only distinct records (removes duplicates, performs sorting)
SELECT Email FROM ActiveCustomers
UNION
SELECT Email FROM ArchivedCustomers;

-- UNION ALL: Returns all records including duplicates (significantly faster)
SELECT Email FROM ActiveCustomers
UNION ALL
SELECT Email FROM ArchivedCustomers;`;

  isMobileNavOpen: boolean = false;
  searchQuery: string = '';

  questions: Array<{ id: string; title: string }> = [
    { id: 'q1', title: '1. What is Primary key & why is it important?' },
    { id: 'q2', title: '2. What is a Foreign key & how is it different from a Primary key?' },
    { id: 'q3', title: '3. What is the difference between DELETE & TRUNCATE?' },
    { id: 'q4', title: '4. What is the difference between \'char\' & \'varchar\' data types?' },
    { id: 'q5', title: '5. Explain SQL Joins in detail.' },
    { id: 'q6', title: '6. What is a transaction in SQL, and why is it important?' },
    { id: 'q7', title: '7. What is a Deadlock?' },
    { id: 'q8', title: '8. What is NOLOCK?' },
    { id: 'q9', title: '9. What is Stuff?' },
    { id: 'q10', title: '10. What are Stored Procedures?' },
    { id: 'q11', title: '11. What are Functions?' },
    { id: 'q12', title: '12. What are Views in SQL?' },
    { id: 'q13', title: '13. What is the difference between Stored Procedures & Functions?' },
    { id: 'q14', title: '14. Explain triggers in SQL.' },
    { id: 'q15', title: '15. Explain cursors in SQL.' },
    { id: 'q16', title: '16. What is the difference between WHERE & HAVING clause in SQL?' },
    { id: 'q17', title: '17. What is Indexing in SQL?' },
    { id: 'q18', title: '18. How can we create Indexes?' },
    { id: 'q19', title: '19. What are constraints in SQL?' },
    { id: 'q20', title: '20. How to find the 2nd Highest (or N-th Highest) Salary in SQL?' },
    { id: 'q21', title: '21. How to find and display duplicate records in a table?' },
    { id: 'q22', title: '22. How to delete duplicate records while keeping one original record?' },
    { id: 'q23', title: '23. How to find employees who earn more than their managers?' },
    { id: 'q24', title: '24. How to find departments that have no employees?' },
    { id: 'q25', title: '25. How to get the highest paid employee in each department?' },
    { id: 'q26', title: '26. How to calculate a Running Total (Cumulative Sum) in SQL?' },
    { id: 'q27', title: '27. What is the difference between UNION and UNION ALL with practical query examples?' }
  ];

  filteredQuestions: Array<{ id: string; title: string }> = [];

  constructor() {
    this.filteredQuestions = [...this.questions];
  }

  ngOnInit(): void {}

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
      q19: this.q19,
      q20: this.q20,
      q21: this.q21,
      q22: this.q22,
      q23: this.q23,
      q24: this.q24,
      q25: this.q25,
      q26: this.q26,
      q27: this.q27
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
