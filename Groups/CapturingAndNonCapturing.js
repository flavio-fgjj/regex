var sentence = `
— My name is Bond, James Bond James.
— You can call me English, Johnny English...
— And I'm Bernard, Andrew Baines Bernard`;

console.log(sentence.match(/(\w+), (\w+) \1/gi));
console.log(sentence.match(/(?:\w+), (\w+) \1/gi));