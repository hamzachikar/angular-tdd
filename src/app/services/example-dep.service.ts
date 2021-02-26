import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleDepService {
  constructor() { }

  getData():string{
    return 'test';
  }
  getDataPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve('data') }, 3000);
    })
  }
}
