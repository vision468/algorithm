const START_INDEX = -1;
const STOP_INDEX = 10;
let stack = [];
let stackTop = START_INDEX;
function isEmpty() {
  if (stackTop === START_INDEX) return true;
  return false;
}
function isFull() {
  if (stackTop === STOP_INDEX) return true;
  return false;
}
function Push(item) {
  if (isFull()) return false;
  stackTop += 1;
  stack[stackTop] = item;
  return true;
}
function Pop() {
  if (isEmpty()) return false;
  stackTop -= 1;
  return stack[stackTop + 1];
}

while (!isFull()) {
  const item = Math.floor(Math.random() * 100);
  const result = Push(item);
  console.log(result, stack.slice(0, stackTop + 1), stackTop);
}

while (!isEmpty()) {
  const result = Pop();
  console.log(result, stack.slice(0, stackTop + 1), stackTop);
}
