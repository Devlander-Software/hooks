const autoExporter = require('@devlander/collect-exports-for-bundle').default

const main = () => {

    autoExporter({
        directory: './src',
        outputFileName: "index",
        outputFilenameExtension: ".tsx",
        includeExtensions: ['.ts', '.tsx', '.tsx', '.hook.tsx'],

        rootDir: './src',
        allowedExtensions: ['.ts', '.tsx', '.tsx', '.hook.tsx', '.reducer.ts', '.reducer.tsx', '.enum.ts', '.enum.tsx', '.interface.ts', '.interface.tsx', '.type.ts', '.type.tsx', '.action.ts', '.action.tsx', '.selector.ts', '.selector.tsx', '.query.ts', '.query.tsx', '.mutation.ts', '.mutation.tsx', '.service.ts', '.service'],
        exportMode: 'both',
        outputFileName: 'index',
        outputFilenameExtension: '.tsx',
        ignoredExtensions: ['.d.ts'],
     
        excludedFolders: ['__tests__', '__mocks__', '__snapshots__', '__fixtures__'],
     
    })
}

main();