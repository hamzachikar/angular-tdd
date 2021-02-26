import { Component, OnInit } from '@angular/core';
import { ExampleDepService } from 'src/app/services/example-dep.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  title:string;
  constructor(private dependency:ExampleDepService) {
    this.title = this.dependency.getData();
   }
  ngOnInit() {
  }

}
