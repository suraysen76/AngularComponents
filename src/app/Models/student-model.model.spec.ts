import { StudentModel } from './student-model.model';

describe('StudentModel', () => {
  it('should create an instance', () => {
    expect(new StudentModel("Ali","KL",123456,"Male",10)).toBeTruthy();
  });
});
