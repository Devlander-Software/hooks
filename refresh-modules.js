const fs = require("fs");
const { execSync } = require("child_process");

const executeCommand = (command) => {
    try {
        execSync(command);
    } catch (error) {
        console.error(`Error executing command "${command}":`, error.stdout?.toString());
        console.error(error.stderr?.toString());
        // Depending on your use case, you might want to rethrow the error or exit
        // process.exit(1); 
    }
};

const requireModule = (modulePath) => {
    try {
        require(modulePath);
    } catch (error) {
        console.error(`Error requiring module "${modulePath}":`, error.message);
        // Depending on your use case, you might want to rethrow the error or exit
        // process.exit(1); 
    }
};

if (fs.existsSync("./external-modules")) {

    if (fs.existsSync("./external-modules/yarn-upgrade-modules")) {
        requireModule("./external-modules/yarn-upgrade-modules");
    }

    if (fs.existsSync("./external-modules/sync-dep-versions")) {
        executeCommand("node ./external-modules/sync-dep-versions/index.js @devlander/react-native-shared-types ./package.json");
    }
}
