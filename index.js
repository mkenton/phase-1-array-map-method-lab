const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCaserTool(arr) {
  return arr.map(word => word[0].toUpperCase() + word.slice(1));
}

function titleCased() {
   const newTutorials = [];
   for (let i=0; i<tutorials.length; i++) {
   newTutorials[i] = tutorials[i].split (' ');
   newTutorials[i] = titleCaserTool(newTutorials[i]);
   newTutorials[i] = newTutorials[i].join(' ');
   }
  return newTutorials
  }
