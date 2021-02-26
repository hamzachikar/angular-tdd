import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleDepService } from "../services/example-dep.service";
import { ExampleComponent } from "../example/example.component";

describe('Spy on dependency methods',()=>{
  var spy: any;
  var dependency:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [ExampleDepService]
    });
    dependency = TestBed.get(ExampleDepService);
    spy = spyOn(dependency,'getData');
  });

  it('test the component title is spy value', () => {
    //given
    spy.and.returnValue('spy value');

    //when
    var fixture = TestBed.createComponent(ExampleComponent);
    var component = fixture.debugElement.componentInstance;

    //then
    expect(component.title).toBe('spy value');
  });
});
