const {autoExporter} = require('@devlander/collect-exports-for-bundle');

const main = () => {

    autoExporter({
        directory: './src',
        includeExtensions: ['.ts', '.tsx', '.tsx'],
        defaultExportFile: 'index.ts',
    })
}

main();