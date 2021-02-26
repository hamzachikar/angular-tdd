import { Component, OnInit } from '@angular/core';
import { ExampleDepService } from '../services/example-dep.service';

@Component({
  selector: 'app-async-example',
  templateUrl: './async-example.component.html',
  styleUrls: ['./async-example.component.scss']
})
export class AsyncExampleComponent implements OnInit {
  promiseTitle: string;

  constructor(private dependency:ExampleDepService) {
    this.dependency.getDataPromise().then(data=>this.promiseTitle=data);
  }

  ngOnInit() {
  }

}
