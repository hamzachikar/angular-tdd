import {TestBed } from "@angular/core/testing";
import { ExampleDepService } from "../services/example-dep.service";
import { ExampleComponent } from "../example/example.component";

describe('Spy on dependency methods',()=>{
  var spy: any;
  var dependency:any;
  beforeEach(() => {
    //Configures and initializes environment for unit testing
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [ExampleDepService]
    });
    //return an instace of the provider that we want to spy on
    dependency = TestBed.get(ExampleDepService);
    //let us spy and track all the calls of the method in the dependency
    spy = spyOn(dependency,'getData');
  });

  it('test the component title is spy value', () => {
    //given
    //like given in java if the method is called it return a value
    spy.and.returnValue('spy value');

    //when
    //ComponentFixture for debugging and testing a component
    var fixture = TestBed.createComponent(ExampleComponent);
    //debugg the fixure component
    var component = fixture.debugElement.componentInstance;

    //then
    expect(component.title).toBe('spy value');
  });
});
