import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-dotnet-core',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './dotnet-core.component.html',
  styleUrl: './dotnet-core.component.scss'
})
export class DotnetCoreComponent implements OnInit {
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
  @ViewChild('q28') q28!: ElementRef;

  isMobileNavOpen: boolean = false;
  searchQuery: string = '';

  questions: Array<{ id: string; title: string }> = [
    { id: 'q1', title: '1. Which .NET Core architecture do you use?' },
    { id: 'q2', title: '2. What is Repository Pattern, and how does it relate to Entity Framework?' },
    { id: 'q3', title: '3. What is the purpose of Program.cs file in .NET Core?' },
    { id: 'q4', title: '4. What is the difference between Authentication & Authorization?' },
    { id: 'q5', title: '5. What are the different ways for authentication in .NET Core?' },
    { id: 'q6', title: '6. Explain the difference between controller & an API.' },
    { id: 'q7', title: '7. What is Inversion of Control?' },
    { id: 'q8', title: '8. What is Dependency Injection in C#?' },
    { id: 'q9', title: '9. Why do we need Dependency Injection?' },
    { id: 'q10', title: '10. How to create Dependency Injection in .NET Core?' },
    { id: 'q11', title: '11. In how many ways, can we achieve Dependency Injection in C#?' },
    { id: 'q12', title: '12. Explain AddSingleton, AddScoped & AddTransient.' },
    { id: 'q13', title: '13. How to handle error globally in .NET Core?' },
    { id: 'q14', title: '14. What is the use of Middleware in .NET Core?' },
    { id: 'q15', title: '15. What is the difference between Middleware & Filters?' },
    { id: 'q16', title: '16. What is Entity Framework?' },
    { id: 'q17', title: '17. What is Rate Limiter?' },
    { id: 'q18', title: '18. Explain async & await keywords.' },
    { id: 'q19', title: '19. What is the difference between List & IEnumerable?' },
    { id: 'q20', title: '20. What is the difference between IEnumerable & IQueryable?' },
    { id: 'q21', title: '21. What is serialization & why is it used in C#?' },
    { id: 'q22', title: '22. What is the difference between throw & throw ex?' },
    { id: 'q23', title: '23. What is an extension method in C#?' },
    { id: 'q24', title: '24. What is Eager loading & Lazy Loading in Entity Framework?' },
    { id: 'q25', title: '25. What are Action Filters? How many types of action filters are there in MVC?' },
    { id: 'q26', title: '26. What is Kestrel?' },
    { id: 'q27', title: '27. What is API Versioning?' },
    { id: 'q28', title: '28. What is the difference between ref & out parameters?' }
  ];

  filteredQuestions: Array<{ id: string; title: string }> = [];

  diExampleSetUpCode: string = `public interface IMessageService
{
    void Send(string message);
}

public class EmailService : IMessageService
{
    public void Send(string message) => Console.WriteLine($"Email sent: {message}");
}`;

  diConstructorCode: string = `public class Notification
{
    private readonly IMessageService _messageService;

    public Notification(IMessageService messageService) // Constructor Injection
    {
        _messageService = messageService;
    }

    public void Notify(string message) => _messageService.Send(message);
}`;

  diPropertyCode: string = `public class Notification
{
    public IMessageService MessageService { get; set; } // Property Injection

    public void Notify(string message)
    {
        MessageService?.Send(message);
    }
}
`;

  diMethodCode: string = `public class Notification
{
    public void Notify(string message, IMessageService service) // Method Injection
    {
        service.Send(message);
    }
}
`;

  useExceptionHandlerCode: string = `// Add exception handling middleware
app.UseExceptionHandler("/Error"); `;

  devExceptionPageCode: string = `if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
`;

  customExceptionMiddlewareCode: string = `public class ErrorHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorHandlingMiddleware> _logger;

    public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception occurred.");
            context.Response.StatusCode = 500;
            context.Response.ContentType = "application/json";

            var error = new { message = "Something went wrong.", error = ex.Message };
            await context.Response.WriteAsJsonAsync(error);
        }
    }
}
`;

  middlewareCSharpCode: string = `app.Use(async (context, next) =>
{
    Console.WriteLine("Before request");
    await next.Invoke(); // Call the next middleware
    Console.WriteLine("After request");
});
`;

  rateLimitingCode: string = `builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", opt =>
    {
        opt.PermitLimit = 10;
        opt.Window = TimeSpan.FromMinutes(1);
        opt.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        opt.QueueLimit = 2;
    });
    options.RejectionStatusCode = 429;
});`;

  rateLimitingControllerCode: string = `[EnableRateLimiting("fixed")]`;

  registerCustomMiddlewareCode: string = `app.UseMiddleware<ErrorHandlingMiddleware>();`;

  extensionMethodCode: string = `public static class StringExtensions
{
    public static string Reverse(this string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}

public class Example
{
    public static void Main(string[] args)
    {
        string myString = "hello";
        string reversedString = myString.Reverse(); // Calls the extension method
        Console.WriteLine(reversedString); // Output: olleh
    }
}
`;

  eagerLoadingCode: string = `var students = context.Students
    .Include(s => s.Courses)
    .ToList();
`;

  lazyLoadingCode: string = `var student = context.Students.First();
var courses = student.Courses; // Triggers a separate query now
`;

  refParameterCode: string = `void Modify(ref int number)
{
    number += 10;
}

int x = 5;
Modify(ref x);
Console.WriteLine(x); // Output: 15
`;

  outParameterCode: string = `void GetValues(out int a, out int b)
{
    a = 1;
    b = 2;
}

int x, y;
GetValues(out x, out y);
Console.WriteLine($"{x}, {y}"); // Output: 1, 2
`;

  constructor(private seo: SeoService) {
    this.filteredQuestions = [...this.questions];
  }

  ngOnInit(): void {
    this.seo.updatePageSeo({
      title: 'Top 28+ .NET Core & C# Interview Questions and Answers | Ace Interview',
      description: 'Comprehensive, battle-tested .NET Core and C# interview questions covering Dependency Injection, Middleware, EF Core, Async/Await, Kestrel, and CLR internals.',
      keywords: 'dotnet core interview questions, c# interview questions, asp.net core interview, dependency injection c#, addsingleton addscoped addtransient, middleware vs filters, entity framework core interview, async await c#',
      url: '/dotnet-core',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the purpose of Program.cs file in .NET Core?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Program.cs is the entry point of a .NET Core application. It configures the WebApplication builder, registers services into the Dependency Injection (DI) container, sets up configuration providers, and builds the HTTP request processing pipeline (middleware).'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Authentication & Authorization?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Authentication is the process of verifying who a user is (identity confirmation), typically using credentials like username/password or JWT tokens. Authorization is the process of determining what permissions or resources the authenticated user is allowed to access.'
            }
          },
          {
            '@type': 'Question',
            name: 'Explain AddSingleton, AddScoped & AddTransient in .NET Core.',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Transient creates a new instance every time a service is requested. Scoped creates a single instance per client HTTP request. Singleton creates a single instance the first time it is requested and shares that same instance across the entire application lifetime.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Middleware & Filters in ASP.NET Core?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Middleware operates globally at the raw HTTP request/response pipeline level before routing hits MVC controllers. Filters operate within the MVC routing pipeline and have access to MVC context like ActionArguments, ModelState, and ActionDescriptor.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between IEnumerable and IQueryable?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IEnumerable executes queries in-memory on the client side (LINQ to Objects). IQueryable converts LINQ expressions into an expression tree and executes SQL queries out-of-process on the database server (LINQ to Entities), filtering records before transferring data over the network.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between throw and throw ex in C#?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'throw preserves the original exception stack trace from where the exception originated. throw ex resets the stack trace to the current catch block, losing the original root cause and line number where the error actually occurred.'
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
      q27: this.q27,
      q28: this.q28
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
