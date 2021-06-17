const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = ['./dist/app/runtime.js', './dist/app/polyfills.js', './dist/app/main.js'];

  await fs.ensureDir('dist');
  await fs.ensureDir('dist/app');
  await concat(files, './dist/app/custom-elements.js');
})();
