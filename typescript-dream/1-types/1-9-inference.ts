/**
 * Type Inference
 */
let text = 'hello';
function print(message = '') {
  console.log(message);
}
print('2');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
