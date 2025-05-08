import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-dotnet-core',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './dotnet-core.component.html',
  styleUrl: './dotnet-core.component.scss'
})
export class DotnetCoreComponent {
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

registerCustomMiddlewareCode: string = `app.UseMiddleware<ErrorHandlingMiddleware>();`;

 constructor(){}

 ngOnInit(): void{}

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
    q14: this.q14
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
