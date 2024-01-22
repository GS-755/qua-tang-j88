const pug = require('pug');
const compiledFunction = pug.compileFile('index.pug');
console.log(pug.renderFile('src/index.pug', {
  name: 'index'
}));
