import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  getValue() {
   return 'this is a test value';
  }

  constructor() { }
}
