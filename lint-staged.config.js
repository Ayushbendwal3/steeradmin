module.exports = {
  '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `npm run lint:fix ${filenames.join(' ')}`,
    `npm run format ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npm run format --write ${filenames.join(' ')}`,
}
