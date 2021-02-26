import {TestBed } from "@angular/core/testing";
import { ExampleDepService } from "src/app/services/example-dep.service";
import { DependencyServiceStub } from "../services/dependency.service";
import { ExampleComponent } from "../example/example.component";

describe('Component testing with dependencies',()=>{
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [{
        provide: ExampleDepService,
        useClass: DependencyServiceStub
      }]
    });

  });

  it(`should have as title 'stub'`,() => {
    //given
    const fixture = TestBed.createComponent(ExampleComponent);

    //when
    const exampleComponent = fixture.debugElement.componentInstance;

    //then
    expect(exampleComponent.title).toEqual('stub');
  });
});
