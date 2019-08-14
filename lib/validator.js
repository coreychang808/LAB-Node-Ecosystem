'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
// validator.isValid = (input, rules) => {
//   return true;
// };

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isLessThanTen = (input) => {
  return input < 10;
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isAnArray = (input) => {
  return Array.isArray(input);
};

validator.isObjectValid = (data, schema) => {
  Object.keys(schema.fields).forEach(expectedProperty => {
    if(!data.hasOwnProperty(expectedProperty)){
      return false;
    }
  });
  return true;
};