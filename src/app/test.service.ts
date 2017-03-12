import { Injectable } from '@angular/core';

let x: number = 0;

@Injectable()
export class TestService {
  constructor() {
    console.log('Test injectable created.');
  }

  public getSomething(): string {
    return 'Something interesting -> ' + ++x;
  }

}
