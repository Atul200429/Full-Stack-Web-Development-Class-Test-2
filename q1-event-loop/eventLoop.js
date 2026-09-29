// Q1. Node.js - The Event Loop
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

/*
Output:
A
D
C
B

Justification:
- 'A' and 'D' are synchronous, so they run first on the call stack.
- Promise.then() callback goes to the microtask queue; setTimeout callback
  goes to the timers (macrotask) queue.
- After the call stack empties, the event loop drains ALL microtasks first,
  and only then moves to the timers phase. So 'C' prints before 'B',
  even though the timeout is 0 ms.
*/
