const Stack = require('./stack');
const Queue = require('./queue');

function main() {
  const StarTreck = new Stack;

  StarTreck.push('Kirk');
  StarTreck.push('Spock');
  StarTreck.push('McCoy');
  StarTreck.push('Scotty');
}

function peek(stack) {
  console.log(JSON.stringify(stack.top.value));
  return stack.top.value;
}

function isEmpty(stack) {
  if (!stack.top) {
    return true;
  }

  return false;
}

function display(stack) {
  return stack.top;
}

function isPalindrome(s) {
  const PalStack = new Stack;
  const tempStack = new Stack;

  //  take out all non-letter chars, set all to lower case
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Push the first half of the pal into a stack
  for (let i = 0; i < s.length / 2; i++) {
    PalStack.push(s[i]);
  }

  // Push the second half into a second stack (in reverse)
  for (let i = s.length - 1; i > (s.length / 2) - 1; i--) {
    tempStack.push(s[i]);
  }

  // If the top of both stacks are equal chars, pop them both
  // continue popping until both stacks are empty
  while (!!PalStack.top && !!tempStack.top && PalStack.top.value === tempStack.top.value) {
    console.log('POP');
    PalStack.pop();
    tempStack.pop();
  }

  // If either stack contains any chars, the palindrome fails
  if (!PalStack.top && !tempStack.top) {
    console.log('This is a palindrome');
    return 'This is a palindrome';
  }

  console.log('This is not a palindrome');
  return 'This is not a palindrome';
}

function matchParentheses(ex) {
  const openStack = new Stack;
  const closedStack = new Stack;

  // Push closed and open parenths into their respective stacks
  for (let i = 0; i < ex.length; i++) {
    if (ex[i] === '(') {
      openStack.push('(');
    }

    if (ex[i] === ')') {
      closedStack.push(')');
    }
  }

  // Keep popping until one or both stacks are empty
  while (!!openStack.top && !!closedStack.top) {
    openStack.pop();
    closedStack.pop();
  }

  // If parenths are equal
  if (!openStack.top && !closedStack.top) {
    console.log('Parentheses are equal');
    return 'Parentheses are equal';
  }

  // If there are more open parenths
  if (!openStack.top && !!closedStack.top) {
    console.log('You are missing a "("');
    return 'You are missing a "("';
  }

  // If there are more closed parenths
  if (!!openStack.top && !closedStack.top) {
    console.log('You are missing a ")"');
    return 'You are missing a ")"';
  }
}

matchParentheses('4 + (3/2) - ((2/1.5) * (10/3))');
//isPalindrome('Silas');
//main();