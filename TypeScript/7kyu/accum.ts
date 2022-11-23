/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export function accum(s: string): string {
    const lowerStrArray: string[] = s.toLowerCase().split('');
  
    const accumArray: string[] = [];
    for (let i = 0; i < lowerStrArray.length; i++) {
      accumArray.push(lowerStrArray[i].repeat(i+1));
    }
    
    return accumArray.map(str => str.charAt(0).toUpperCase() + str.substring(1)).join('-');
}
  