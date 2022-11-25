/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
Note: The function accepts an integer and returns an integer
*/

export class Kata {
    static squareDigits(num: number): number {
        return parseInt(Array.from(num.toString().split(''), x => parseInt(x) ** 2).join(''))
    }
}

const num = 9119;
console.log(Kata.squareDigits(num));
