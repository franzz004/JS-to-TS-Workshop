import {filterLongWords} from './filterLongWords';
import {getFirstThreeChars} from './getFirstThreeChars';
import {printFruits} from './printFruits';
import {sqaureNumber} from './squareNumber';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why: {am: string} = {am: 'I tabbed?'};
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
): boolean | undefined {
  // Function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}

// TODO: more examples

// forEach
const fruits: string[] = ['apple', 'banana', 'orange', 'grape'];
printFruits(fruits);

// map
const numbers: number[] = [2, 4, 6, 8];
console.log(sqaureNumber(numbers));

// filter
const words: string[] = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
console.log(filterLongWords(words));

// slice
const str = 'hello world';
console.log(getFirstThreeChars(str));
