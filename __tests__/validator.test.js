'use strict';

const validator = require('../lib/validator');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

});
describe('#validator', () => {
  describe('#isLessThanTen', ()=>{
    it('regular cases',()=>{
      expect(validator.isLessThanTen(5)).toEqual(true);
      expect(validator.isLessThanTen(15)).toEqual(false);
      expect(validator.isLessThanTen(10)).toEqual(false);
    });
  });
});

describe('#numberValidate', () =>{
  it('num', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });
});

describe ('#validateArrays', () =>{
  it('array', () =>{
    let arr = [1, 2, 3];  
    let obj = {foo: 123}; 
    let str = 'foobar';   
    expect(validator.isAnArray(arr)).toEqual(true);
    expect(validator.isAnArray(obj)).toEqual(false);
    expect(validator.isAnArray(str)).toEqual(false);
  });
});

//   it('objects', () => {
//     expect(true).toBeFalsy();
//   });

//   it('booleans', () => {
//     expect(true).toBeFalsy();
//   });

//   it('functions', () => {
//     expect(true).toBeFalsy();
//   });


// describe('validator module performs complex validations', () => {

//   it('validates the presence of required object properties at any level', () => {
//     // i.e. does person.hair.color exist and have a good value, not just person.hair
//     expect(true).toBeFalsy();
//   });

//   it('validates the proper types of object properties', () => {
//     // i.e. person.name must be a string, etc.
//     expect(true).toBeFalsy();
//   });

//   it('validates the types of values contained in an array', () => {
//     // i.e. an array of all strings or numbers
//     expect(true).toBeFalsy();
//   });

//   it('validates a value array against an approved list', () => {
//     // i.e. a string might only be allowed to be "yes" or "no"
//     expect(true).toBeFalsy();
//   });

//   // TODO: Cover so, so many more cases

// });

describe('#objectValid', () => {
  it('regular cases', () => {
    const schema = {
      fields:{
        id: {type:'string'},
        age: {type:'number'},
        favToy: {type:'object'},
      },
    };
    expect(validator.isObjectValid ({id:'chloe', age:3, favToy:{}}, schema)).toEqual(true);
    // expect(validator.isObjectValid ({id: 21, age:'three', favToy:[]}, schema)).toEqual(false);
  });
});