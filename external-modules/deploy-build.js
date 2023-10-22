// GitHub Gist URL: https://gist.github.com/landonwjohnson/07f7938907acc22fe4d91b99f6c5503a
// File: auto-deploy-for-rollup.js
// Location: external-modules/auto-deploy-for-rollup/auto-deploy-for-rollup.js

const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline');
const ProgressBar = require('progress');
const path = require('path');

/**
 * Retrieve the path to the package.json file from the command line or use a default path.
 */
const packageJSONPath = (function() {
    const arg = process.argv.find(arg => arg.startsWith('--packageJSONPath='));
    return arg ? arg.split('=')[1] : './package.json';
})();

/**
 * Retrieve the source directory from the command line or use the default directory.
 */
const srcDir = (function() {
    const arg = process.argv.find(arg => arg.startsWith('--srcDir='));
    return arg ? arg.split('=')[1] : 'src';
})();

/** Determine deployment mode and command. */
const autoDeploy = process.argv.includes('--autoDeploy');
const deployCommand = (function() {
    const arg = process.argv.find(arg => arg.startsWith('--deployCmd='));
    return arg ? arg.split('=')[1] : 'npm publish';
})();

let packageJSON;
try {
    packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, 'utf8'));
} catch (err) {
    console.error(`Error reading ${packageJSONPath}:`, err);
    process.exit(1);
}

/**
 * Check if a tool is installed.
 * @param {string} tool - The name of the tool.
 * @returns {boolean} - True if the tool is installed, otherwise false.
 */
function isToolInstalled(tool) {
    try {
        execSync(`${tool} --version`, { stdio: 'ignore' });
        return true;
    } catch (err) {
        return false;
    }
}

/** Define build and validation steps */
const steps = [
    { label: 'Formatting code...', command: `prettier --write "${srcDir}/**/*.{ts,tsx}"`, tool: null },
    { label: 'Linting code...', command: `eslint --fix ./${srcDir}/**/*.{ts,tsx}`, tool: 'eslint' },
    { label: 'Type checking...', command: 'tsc --project tsconfig.json --noEmit', tool: 'tsc' },
    { label: 'Building ESM...', command: 'tsc', tool: 'tsc' },
    { label: 'Building CJS...', command: 'rollup -c', tool: null },
].filter(step => {
    if (step.tool && !isToolInstalled(step.tool)) {
        console.warn(`⚠️ ${step.tool} is not installed. Consider installing it for a more comprehensive build process.`);
        return false;
    }
    return true;
});

const config = {
    packageJSONPath: './package.json',
    srcDir: 'src',
    autoDeploy: true,
    deployCommand: 'npm publish',
};

/**
 * Ensure the module type in package.json is set to commonjs.
 */
function ensureCommonjsType() {
    if (packageJSON.type !== 'commonjs') {
        packageJSON.type = 'commonjs';
        fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));
    }
}

/**
 * Execute the validation and build processes.
 * @returns {boolean} - True if all steps are successful, otherwise false.
 */
function runValidationAndBuild() {
    const bar = new ProgressBar(':bar :current/:total [:etas seconds left] :label', {
        total: steps.length,
        width: 40,
        complete: '=',
        incomplete: ' ',
        renderThrottle: 1
    });
    for (const step of steps) {
        try {
            console.log(step.label);
            const output = execSync(step.command).toString();
            console.log(output);
            bar.tick({ label: step.label });
        } catch (err) {
            console.error(`Error during "${step.label}" step:`, err.message);
            console.error(err.stderr.toString());
            return false;
        }
    }
    console.log('All steps completed successfully!');
    return true;
}

/**
 * Increment the version number in the package.json.
 */
function incrementVersion() {
    const versionParts = packageJSON.version.split('.');
    versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
    packageJSON.version = versionParts.join('.');
    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));
}

/**
 * Check if the current code has changes from the previous version.
 * @returns {boolean} - True if changes exist, otherwise false.
 */
function isCodeNewer() {
    const lastCommitHash = execSync('git log -1 --pretty=format:"%H"').toString().trim();
    const filesChanged = execSync(`git diff-tree --no-commit-id --name-only -r ${lastCommitHash}`).toString().split('\n');
    return filesChanged.includes(path.relative(process.cwd(), packageJSONPath));
}

/**
 * Deploy the built code.
 */
function deploy() {
    console.log('Deploying...');
    try {
        execSync(deployCommand);
        console.log('Deployment successful.');
    } catch (err) {
        console.error('Deployment failed:', err.message);
    }
}

ensureCommonjsType();

if (runValidationAndBuild()) {
    if (autoDeploy) {
        if (isCodeNewer()) {
            incrementVersion();
        }
        deploy();
    } else {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question('Do you want to increment the version? (y/n): ', (answer) => {
            if (answer.toLowerCase() === 'y') {
                incrementVersion();
            }
            rl.question('Do you want to deploy? (y/n): ', (deployAnswer) => {
                if (deployAnswer.toLowerCase() === 'y') {
                    deploy();
                }
                rl.close();
            });
        });
    }
}
