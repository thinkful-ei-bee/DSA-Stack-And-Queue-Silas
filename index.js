const Stack = require('./stack');

function main() {
  //const StarTreck = new Stack;

  //   StarTreck.push('Kirk');
  //   StarTreck.push('Spock');
  //   StarTreck.push('McCoy');
  //   StarTreck.push('Scotty');

  const disorder = new Stack;

  disorder.push(5);
  disorder.push(6);
  disorder.push(3);
  disorder.push(2);
  disorder.push(10);
  disorder.push(8);

  sort(disorder);
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
  console.log(JSON.stringify(stack.top));
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

// [4, 5]
// temp: 1
// [2, 3]

function sort(stack) {
  const firstStack = stack;
  const secondStack = new Stack;
  let temp;

  while (firstStack.top) {
    temp = firstStack.top.value;
    firstStack.pop();

    if (!secondStack.top) {
      console.log(`(secondStack is empty) Pushed ${temp} to second stack`);
      secondStack.push(temp);
    }
    //console.log('SECOND STACK: ', secondStack);
    // while the top val of the first stack is less than the top val of second stack
    while (secondStack.top !== null && temp < secondStack.top.value) {
      // push the top val of second stack back to first stack
      // pop that val from second stack
      console.log(`(${temp} is less than ${secondStack.top.value}) Pushed ${secondStack.top.value} from second to first stack`);
      firstStack.push(secondStack.top.value);
      secondStack.pop();
    }

    // if the first stack's top is greater than the second stack's top
    if (secondStack.top !== null && temp > secondStack.top.value) {
      // push that val to the second stack
      console.log(`(${temp} is greater than ${secondStack.top.value}) Pushed ${temp} to second stack`);
      secondStack.push(temp);
    }
  }

  // push all of second stack's vals back into the first stack
  while (secondStack.top) {
    console.log(`Pushed ${secondStack.top.value} back to first stack`);
    firstStack.push(secondStack.top.value);
    secondStack.pop();
  }

  display(firstStack);
}



//matchParentheses('4 + (3/2) - ((2/1.5) * (10/3))');
//isPalindrome('Silas');
main();