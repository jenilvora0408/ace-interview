import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-oops',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './oops.component.html',
  styleUrl: './oops.component.scss'
})
export class OopsComponent {
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

  ngOnInit(): void {}

  
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

  constructor() {
    this.filteredQuestions = [...this.questions];
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
