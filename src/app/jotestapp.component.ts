import { Component } from '@angular/core';

@Component({
  selector: 'jotestapp',
  templateUrl: 'jotestapp.component.html'
})
export class JoTestAppComponent {
  public thingList: string[] = ['thing 1', 'thing 2'];

  public thing: string = 'Name of the thing';

  private idThing: number = 0;
  private isKeepAdding: boolean = false;

  public addThing(thing: string) {
    this.thingList.push(thing);
  }

  public startKeepAdding() {
    this.isKeepAdding = true;
    this.keepAdding();
  }

  public stopKeepAdding() {
    this.isKeepAdding = false;
  }

  private keepAdding() {
    if (!this.isKeepAdding) {
      return;
    }
    this.addThing('Thing ' + ++this.idThing);
    setTimeout(() => { this.keepAdding(); }, 100);
  }
}
