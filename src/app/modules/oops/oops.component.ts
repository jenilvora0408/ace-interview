import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-oops',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './oops.component.html',
  styleUrl: './oops.component.scss'
})
export class OopsComponent implements OnInit {
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

  highlightedCode: string = `public class BankAccount
{
    // Private field - encapsulated
    private decimal balance;

    // Public property - controlled access
    public decimal Balance
    {
        get { return balance; }
        private set 
        {
            if (value >= 0)
                balance = value;
        }
    }

    // Public method - safe way to modify balance
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            Balance += amount;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= Balance)
            Balance -= amount;
    }
}
`;

methodOverloadingCode: string = `public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public double Add(double a, double b)
    {
        return a + b;
    }

    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}
`;

methodOverloadingUsageCode: string = `Calculator calc = new Calculator();
Console.WriteLine(calc.Add(2, 3));         // Calls int Add(int, int)
Console.WriteLine(calc.Add(2.5, 3.5));     // Calls double Add(double, double)
Console.WriteLine(calc.Add(1, 2, 3));      // Calls int Add(int, int, int)
`;

methodOverridingCode: string = `using System;

public class Animal
{
    // Step 1: Define a virtual method
    public virtual void Speak()
    {
        Console.WriteLine("Animal makes a sound");
    }
}

public class Dog : Animal
{
    // Step 2: Override the base class method
    public override void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}

public class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Cat meows");
    }
}`;

methodOverridingUsageCode: string = `class Program
{
    static void Main()
    {
        // Step 3: Use base class reference to call the method
        Animal animal;

        animal = new Dog();
        animal.Speak(); // Output: Dog barks

        animal = new Cat();
        animal.Speak(); // Output: Cat meows
    }
}`;

singleInheritanceCode: string = `class Animal
{
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal
{
    public void Bark() => Console.WriteLine("Barking...");
}

// Usage:
Dog dog = new Dog();
dog.Eat();  // Inherited
dog.Bark(); // Own method
`;

multiLevelInheritanceCode: string = `class Animal
{
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal
{
    public void Bark() => Console.WriteLine("Barking...");
}

class Puppy : Dog
{
    public void Weep() => Console.WriteLine("Weeping...");
}

// Usage:
Puppy puppy = new Puppy();
puppy.Eat();  // From Animal
puppy.Bark(); // From Dog
puppy.Weep(); // Own method
`;

hierarchicalInheritanceCode: string = `class Animal
{
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal
{
    public void Bark() => Console.WriteLine("Barking...");
}

class Cat : Animal
{
    public void Meow() => Console.WriteLine("Meowing...");
}

// Usage:
Dog dog = new Dog();
dog.Eat();
dog.Bark();

Cat cat = new Cat();
cat.Eat();
cat.Meow();
`;

multipleInheritanceCode: string = `interface IWalk
{
    void Walk();
}

interface IRun
{
    void Run();
}

class Person : IWalk, IRun
{
    public void Walk() => Console.WriteLine("Walking...");
    public void Run() => Console.WriteLine("Running...");
}

// Usage:
Person p = new Person();
p.Walk();
p.Run();
`;

abstractClassCode: string = `public abstract class Shape
{
    public abstract void Draw(); // Abstract method - no body

    public void Info()           // Concrete method
    {
        Console.WriteLine("This is a shape.");
    }
}

public class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}

// Usage
class Program
{
    static void Main()
    {
        Shape shape = new Circle();
        shape.Draw();  // Output: Drawing a circle.
        shape.Info();  // Output: This is a shape.
    }
}
`;

abstractionInterfaceCode: string = `public interface IShape
{
    void Draw();  // No implementation
}

public class Rectangle : IShape
{
    public void Draw()
    {
        Console.WriteLine("Drawing a rectangle.");
    }
}

// Usage
class Program
{
    static void Main()
    {
        IShape shape = new Rectangle();
        shape.Draw();  // Output: Drawing a rectangle.
    }
}
`;


  isMobileNavOpen: boolean = false;
  searchQuery: string = '';

  questions: Array<{ id: string; title: string }> = [
    { id: 'q1', title: '1. What is the need for OOPs?' },
    { id: 'q2', title: '2. What is a Class?' },
    { id: 'q3', title: '3. What is an Object?' },
    { id: 'q4', title: '4. What are the main features/pillars of OOPS?' },
    { id: 'q5', title: '5. What is encapsulation?' },
    { id: 'q6', title: '6. How can we implement Encapsulation?' },
    { id: 'q7', title: '7. What is Polymorphism?' },
    { id: 'q8', title: '8. Explain Compile Time Polymorphism.' },
    { id: 'q9', title: '9. Explain method overloading with example.' },
    { id: 'q10', title: '10. Explain Runtime Polymorphism.' },
    { id: 'q11', title: '11. Explain Method Overriding with example.' },
    { id: 'q12', title: '12. What is meant by Inheritance?' },
    { id: 'q13', title: '13. Are there any limitations of Inheritance?' },
    { id: 'q14', title: '14. How many types of Inheritance are there in C#?' },
    { id: 'q15', title: '15. What do you mean by Abstraction?' },
    { id: 'q16', title: '16. What is the difference between Abstract Class & Interface?' }
  ];

  filteredQuestions: Array<{ id: string; title: string }> = [];

  constructor(private seo: SeoService) {
    this.filteredQuestions = [...this.questions];
  }

  ngOnInit(): void {
    this.seo.updatePageSeo({
      title: 'Object-Oriented Programming (OOP) Interview Questions & Answers | Ace Interview',
      description: 'Master OOP interview concepts: 4 pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism), method overloading vs overriding, and abstract class vs interface.',
      keywords: 'oops interview questions, object oriented programming interview, encapsulation abstraction inheritance polymorphism, method overloading vs overriding, abstract class vs interface',
      url: '/oops',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the 4 fundamental pillars of OOP?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The four fundamental pillars of Object-Oriented Programming are: Encapsulation (bundling data and methods that operate on that data while restricting direct access), Abstraction (hiding complex internal implementation details and exposing only essential interfaces), Inheritance (enabling a class to inherit features and behaviors from another class for code reuse), and Polymorphism (enabling objects to take multiple forms through overloading and overriding).'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Method Overloading and Method Overriding?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Method Overloading (Compile-Time Polymorphism) defines multiple methods in the same class with identical names but differing parameter types or counts. Method Overriding (Runtime Polymorphism) allows a derived class to provide a specific implementation of a virtual or abstract method defined in its base class.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between an Abstract Class and an Interface?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An Abstract Class can have both abstract methods (without bodies) and concrete methods (with default implementations) as well as member state/fields; a class can only inherit from one abstract class. An Interface traditionally defines a contract of method signatures without state (though modern C# allows default interface methods); a class can implement multiple interfaces.'
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
      q16: this.q16
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
