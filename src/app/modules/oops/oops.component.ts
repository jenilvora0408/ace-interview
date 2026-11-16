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
  @ViewChild('q29') q29!: ElementRef;
  @ViewChild('q30') q30!: ElementRef;
  @ViewChild('q31') q31!: ElementRef;

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



  defaultConstructorCode: string = `public class Person
  {
      public string Name;
      public int Age;

      // No parameters - sets default values
      public Person()
      {
          Name = "Unknown";
          Age = 0;
      }
  }

  // Usage
  Person p = new Person(); // Name = "Unknown", Age = 0
  `;

  parameterizedConstructorCode: string = `public class Person
  {
      public string Name;
      public int Age;

      // Takes values so you set up the object right away
      public Person(string name, int age)
      {
          Name = name;
          Age = age;
      }
  }

  // Usage
  Person p = new Person("Alice", 30); // Name = "Alice", Age = 30
  `;

  staticConstructorCode: string = `public class Config
  {
      public static string AppName;

      // Runs ONCE automatically the first time Config is used
      static Config()
      {
          AppName = "MyApp";
          Console.WriteLine("Config initialized!");
      }
  }

  // First access triggers the static constructor
  string name = Config.AppName; // Output: Config initialized!
  `;

  privateConstructorCode: string = `public class Singleton
  {
      private static Singleton _instance;

      // No one outside can call "new Singleton()"
      private Singleton() { }

      public static Singleton GetInstance()
      {
          if (_instance == null)
              _instance = new Singleton();
          return _instance;
      }
  }

  // Both variables point to the SAME single instance
  Singleton s1 = Singleton.GetInstance();
  Singleton s2 = Singleton.GetInstance();
  `;

  constructorChainingCode: string = `public class Person
  {
      public string Name;
      public int Age;
      public string City;

      // Calls the 3-param constructor with defaults
      public Person(string name) : this(name, 0, "Unknown") { }

      public Person(string name, int age) : this(name, age, "Unknown") { }

      // The "main" constructor that does the actual work
      public Person(string name, int age, string city)
      {
          Name = name;
          Age  = age;
          City = city;
      }
  }
  `;

  sealedClassCode: string = `public sealed class PaymentProcessor
  {
      public void Process() => Console.WriteLine("Processing payment...");
  }

  // ERROR: Cannot inherit from a sealed class
  // public class FakeProcessor : PaymentProcessor { }  // Will not compile
  `;

  staticClassCode: string = `public static class MathHelper
  {
      public static int Square(int n) => n * n;
      public static int Cube(int n)   => n * n * n;
  }

  // No object needed - call directly on the class
  int sq = MathHelper.Square(5); // 25
  int cu = MathHelper.Cube(3);   // 27
  `;

  partialClassCode: string = `// File 1: Person.cs (auto-generated by a tool)
  public partial class Person
  {
      public string Name { get; set; }
      public int Age { get; set; }
  }

  // File 2: Person.Custom.cs (your hand-written code)
  public partial class Person
  {
      public string GetGreeting()
      {
          return $"Hi, I am {Name} and I am {Age} years old.";
      }
  }

  // C# merges both files at compile time into one single class
  `;

  structVsClassCode: string = `// --- STRUCT (Value Type) ---
  public struct Point
  {
      public int X;
      public int Y;
  }

  // --- CLASS (Reference Type) ---
  public class PointClass
  {
      public int X;
      public int Y;
  }

  // Key difference in assignment behavior:
  Point a = new Point { X = 1, Y = 2 };
  Point b = a;      // b is a full COPY of a
  b.X = 99;
  Console.WriteLine(a.X); // 1 (a is NOT affected)

  PointClass c = new PointClass { X = 1, Y = 2 };
  PointClass d = c;  // d points to the SAME object as c
  d.X = 99;
  Console.WriteLine(c.X); // 99 (c IS affected)
  `;

  accessModifiersCode: string = `public class BankAccount
  {
      // private: only accessible inside this class
      private decimal _balance;

      // public: accessible from anywhere
      public string AccountHolder;

      // protected: accessible in this class + any derived class
      protected string BranchCode;

      // internal: accessible within the same project (assembly)
      internal string AccountNumber;

      // protected internal: accessible in this class, derived classes,
      //                     AND anything in the same project
      protected internal string TransactionLog;

      // public getter, private setter
      public decimal Balance
      {
          get { return _balance; }
          private set { _balance = value >= 0 ? value : 0; }
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
    { id: 'q16', title: '16. What is the difference between Abstract Class & Interface?' },
    { id: 'q17', title: '17. What is a Constructor?' },
    { id: 'q18', title: '18. What are the types of Constructors in C#?' },
    { id: 'q19', title: '19. What is a Default Constructor?' },
    { id: 'q20', title: '20. What is a Parameterized Constructor?' },
    { id: 'q21', title: '21. What is a Static Constructor?' },
    { id: 'q22', title: '22. Can a Constructor be Private? When is it used?' },
    { id: 'q23', title: '23. What is Constructor Chaining?' },
    { id: 'q24', title: '24. What is a Sealed Class?' },
    { id: 'q25', title: '25. What is a Static Class?' },
    { id: 'q26', title: '26. What is a Partial Class?' },
    { id: 'q27', title: '27. What is the difference between a Class and a Struct?' },
    { id: 'q28', title: '28. What are Access Modifiers in C#?' },
    { id: 'q29', title: '29. Explain all Access Modifiers with their scope.' },
    { id: 'q30', title: '30. What is the default Access Modifier for a class and its members?' },
    { id: 'q31', title: '31. Can get and set have different access modifiers on a property?' }
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
      q28: this.q28,
      q29: this.q29,
      q30: this.q30,
      q31: this.q31
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
