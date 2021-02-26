import { TestBed } from "@angular/core/testing";
import { AsyncExampleComponent } from "../async-example/async-example.component";
import { ExampleDepService } from "../services/example-dep.service";

describe('Spy on dependency async methods',()=>{
  var spy: any;
  var dependency:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncExampleComponent],
      providers: [ExampleDepService]
    });
    dependency = TestBed.get(ExampleDepService);
    spy = spyOn(dependency,'getDataPromise');
  });

  it('test the component title is a async data', async() => {
    //given
    spy.and.returnValue(Promise.resolve('async data'));

    //when
    var fixture = TestBed.createComponent(AsyncExampleComponent);
    var component = fixture.componentInstance;

    //then
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(component.promiseTitle).toBe("async data");
    })
  });
});
