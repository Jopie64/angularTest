import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'service-user',
  template: '<label>Service value:</label>{{serviceValue}}',
  providers: [TestService]
})
export class ServiceUserComponent {
  public serviceValue: string;

  constructor(private _testService: TestService) {
    this.serviceValue = _testService.getSomething();
  }
}
