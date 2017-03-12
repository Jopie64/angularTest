import { ServiceUserComponent } from './service-user.component';
import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'jotestapp',
  templateUrl: 'jotestapp.component.html',
  providers: [TestService]
})
export class JoTestAppComponent {
  public thingList: string[] = ['thing 1', 'thing 2'];

  public thing: string = 'Name of the thing';

  private idThing: number = 0;
  private isKeepAdding: boolean = false;

  constructor(private _testService: TestService) {
    this.thing = _testService.getSomething();
  }

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

  public clearThings() {
    this.thingList.splice(0);
  }

  public removeThing(ix: number) {
    this.thingList.splice(ix, 1);
  }

  private keepAdding() {
    if (!this.isKeepAdding) {
      return;
    }
    this.addThing('Thing ' + ++this.idThing);
    setTimeout(() => { this.keepAdding(); }, 100);
  }
}
