const {autoExporter} = require('@devlander/collect-exports-for-bundle');

const main = () => {

    autoExporter({
        directory: './src',
        includeExtensions: ['.component.ts', '.styles.tsx', '.component.tsx'],
        defaultExportFile: 'index.ts',
    })
}

main();