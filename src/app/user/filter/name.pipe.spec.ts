import {NamePipe} from './name.pipe';

describe('NamePipe', () => {
  it('create an instance', () => {
    const pipe = new NamePipe();
    const arr = [
      {first_name: 'b'},
      {first_name: 'a'}
    ];
    const expectedArr = [
      {first_name: 'a'},
      {first_name: 'b'}
    ];
    expect(pipe.transform(arr)).toEqual(expectedArr);
  });
});



