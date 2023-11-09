const autoExporter = require('@devlander/collect-exports-for-bundle').default

const main = () => {

    autoExporter({
        directory: '.src',
        outputFileName: "index",
        outputFilenameExtension: ".tsx",
        includeExtensions: ['.ts', '.tsx', '.tsx'],
    })
}

main();