// File: refresh-modules.js (JavaScript)

const fs = require('fs');
const { execSync } = require('child_process');
const { syncPackageVersions } = require(__dirname + '/external-modules/sync-dep-versions'); // Use __dirname
const chalk = require('chalk'); // Import chalk

/**
 * Execute a command and handle errors.
 *
 * @param {string} command - The command to execute.
 */
function executeCommand(command) {
    try {
        execSync(command);
    } catch (error) {
        console.error(chalk.red(`Error executing command "${command}":`), error.stdout?.toString());
        console.error(error.stderr?.toString());
        // Depending on your use case, you might want to rethrow the error or exit
        // process.exit(1);
    }
}

/**
 * Require a module and handle errors.
 *
 * @param {string} modulePath - The path to the module to require.
 */
function requireModule(modulePath) {
    try {
        require(modulePath);
        console.log(chalk.green(`Successfully required module "${modulePath}".`)); // Apply green color to success message
    } catch (error) {
        console.error(chalk.red(`Error requiring module "${modulePath}":`), error.message);
        // Depending on your use case, you might want to rethrow the error or exit
        // process.exit(1);
    }
}

/**
 * Main function to synchronize dependencies and execute scripts.
 */
function main() {

    const directoryToSelect = 'external-modules'; // Use __dirname
    const directories = fs.readdirSync(directoryToSelect, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    console.log(directories)

    if (!fs.existsSync(__dirname + '/external-modules')) { // Use __dirname
        console.error(chalk.red('The "external-modules" directory does not exist.'));
        return;
    } else {
        chalk.green('The "external-modules" directory exists.'); // Apply green color to success message
    }

    // Refresh modules using syncPackageVersions

    const yarnUpgradeModulesPath = __dirname + '/external-modules/yarn-upgrade-modules.js'; // Use __dirname
    const syncDepVersionsIndexPath = __dirname + '/external-modules/sync-dep-versions/index.js'; // Use __dirname

    // Require and execute yarn-upgrade-modules.js if it exists
    if (fs.existsSync(yarnUpgradeModulesPath)) {
        requireModule(yarnUpgradeModulesPath);
    }

    // Execute sync-dep-versions/index.js if it exists
    if (fs.existsSync(syncDepVersionsIndexPath)) {
        syncPackageVersions('@devlander/react-native-shared-types', './package.json');
    }
}

main();
