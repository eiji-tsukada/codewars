/* 
Your task, is to create NxN multiplication table, of size provided in parameter.
for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

const range = (start: number, stop: number, step: number) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export function multiplicationTable (size: number): number[][] {
  return Array.from({length: size}, (v, i) => range(1, size, 1).map(x => x * (i+1)));
}