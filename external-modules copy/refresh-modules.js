const fs = require('fs');
const { execSync } = require('child_process');
const { syncPackageVersions } = require('@devlander/sync-dep-versions'); // Use __dirname
const {ensureLatestModules} = require('@devlander/retrieve-modules-from-list'); // Import the correct module

const main = () => {
  const modules = [
    '@devlander/shared-react-native-types',
    '@devlander/rawoutdoors-env',
    '@devlander/hooks',
    '@devlander/rawstack-axios-module'
  ];
  ensureLatestModules(modules, 'yarn');

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
