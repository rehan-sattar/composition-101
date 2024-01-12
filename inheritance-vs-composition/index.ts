//**** Inheritance  */

class Component {
  constructor(public id: string) {}

  render(): void {
    console.log(`Rendering component with id: ${this.id}`);
  }
}

class Button extends Component {
  constructor(id: string, public label: string) {
    super(id);
  }

  click(): void {
    console.log(`Button with label "${this.label}" clicked!`);
  }

  /// more methods...
}

const myButton = new Button("btn1", "Click Me");
myButton.render(); // Output: Rendering component with id: btn1
myButton.click(); // Output: Button with label "Click Me" clicked!






































//** Composition */
class ComponentC {
  constructor(public id: string) {}

  render(): void {
    console.log(`Rendering component with id: ${this.id}`);
  }
}

class ButtonC {
  private component: Component;

  constructor(id: string, public label: string) {
    this.component = new Component(id);
  }

  click(): void {
    console.log(`Button with label "${this.label}" clicked!`);
  }

  render(): void {
    this.component.render();
  }
}

const myButtonC = new Button("btn1", "Click Me");
myButtonC.render(); // Output: Rendering component with id: btn1
myButtonC.click(); // Output: Button with label "Click Me" clicked!
