
const { syncPackageVersions } = require('@devlander/sync-dep-versions'); // Use __dirname

const main = () => {

    // Execute sync-dep-versions/index.js if it exists
    syncPackageVersions(
      '@devlander/storybook',
      './package.json',
      [],
      []
    );
  

  // Execute sync-dep-versions/index.js if it exists
  syncPackageVersions(
    '@devlander/rollup',
    './package.json',
    [],
    []
  );


  syncPackageVersions(
    '@devlander/react',
    './package.json',
    [],
    []
  );
};

main();
