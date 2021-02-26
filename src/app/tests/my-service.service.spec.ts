import { MyServiceService } from '../services/my-service.service';

describe('Test structure', () => {
  let myService:MyServiceService;
  beforeEach(() => {
    myService=new MyServiceService();
  });

  it('the getValue() should return a value', () => {
    //given
    let expected='this is a test value';

    //when
    let actual=myService.getValue();

    //then
    expect(actual).toBe(expected);
  });
});
