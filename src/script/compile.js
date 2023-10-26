const pug = require('pug');
const compiledFunction = pug.compileFile('index.pug');
console.log(pug.renderFile('index.pug', {
  name: 'qua-tang-j88'
}));
