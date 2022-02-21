/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

function parenthesisChecker(str) {
  let pila = [];
  let char = "";
  const cadena = str.toString();
  for (let i = 0; i < cadena.length; i++) {
    char = cadena.charAt(i);
    if (char === '(' || char === '[' || char === '{') {
      pila.push(char);
    }
    else {
      if (char === ')') {
        if (pila.pop() !== '(')
          return false;
      }
      else if (char === ']') {
        if (pila.pop() !== '[')
          return false;
      }
      else if (char === '}') {
        if (pila.pop() !== '{')
          return false;
      }
      else 
        continue;
    }
  }

  if (pila.length !== 0) {
    return false
  }

  return true;
}

function main() {
  const isValid = parenthesisChecker(args);
  isValid ? 
    console.log(`La cadena "${args}" es válida`) : 
    console.log(`La cadena "${args}" es inválida`);
}

main();

