/**
 * =========================================================================
 *
 *  File: copy-assets.task.js
 *  Version: 1.0
 *  Script-Name: "copy-assets"
 *  Description: Task for copying required assets such as fonts,
 *      images, videos into /public folder of Laravel Project.
 *
 *  ------------------------------------------------------------------------
 *
 *
 *
 * =========================================================================
 */
/* eslint-disable no-console */

/**
 |--------------------------------------------------------------------------
 |  Import: Task Libraries
 |--------------------------------------------------------------------------
 */
const path = require("path");
const fs = require("fs-extra");
const cc = require("./utils/colour-console.helper");
const consoleWrap = require("./utils/console-wrap.helper");
let currentDir = process.cwd();
const debugMode = true;
const taskName = path.basename(__filename);

if (debugMode) {
  console.log("\n\n");
  console.log(cc.bg.cyan + "                                                    " + cc.reset);
  console.log(cc.bg.cyan + "        DCODE Group - Copy Assets Task v1.0         " + cc.reset);
  console.log(cc.bg.cyan + "                                                    " + cc.reset);
  console.log("\n\n");

  consoleWrap("Beginning copying of assets...", taskName);
}

const args = process.argv.slice(2); // Get arguments after "node copy-assets.task.js"
const destinationArg = args[0]; // First argument as the destination path

if (!destinationArg) {
  console.error("❌ Please provide a destination path as an argument.");
  process.exit(1);
}

const assetTasks = [
  {
    type: "JsFiles",
    paths: {
      from: "./public/",
      to: `../${destinationArg}/public/vendor/form-builder/`, // Use dynamic destination
    },
    filter: null,
    fileMode: false,
    purge: true,
  },
];

if (debugMode) {
  consoleWrap("Tasks/Assets found: " + assetTasks.length, taskName);
}

/**
 |--------------------------------------------------------------------------
 |  Function: recursiveCopy
 |  Description: Recursively copy asset directories to target folders.
 |      Also accepts file mode for vendor assets.
 |--------------------------------------------------------------------------
 */
const recursiveCopy = (sourcePath, targetPath, type, fileMode) => {
  return new Promise((resolve, reject) => {
    // # Join: Current Directory with paths for absolute structure.
    const sourceIsDir = !fileMode ? fs.lstatSync(sourcePath).isDirectory() : false;
    if (!fileMode) {
      sourcePath = path.join(currentDir, sourcePath);
    }

    if (sourceIsDir) {
      targetPath = path.join(currentDir, targetPath);
    } else if (!sourceIsDir && !fileMode) {
      targetPath = path.join(currentDir, sourcePath.replace(sourcePath, targetPath) + path.basename(sourcePath));
    }

    if (debugMode) {
      console.log("\n\tSource Path: ", sourcePath);
      console.log("\tTarget Path: ", targetPath);
    }

    // # Read: Recursively files/folders within source folder
    let totalFiles = 0;
    const allFiles = [];
    const errors = [];
    let hasErrors = false;
    if (sourceIsDir) {
      for (const filePath of walkSync(sourcePath)) {
        totalFiles++;
        const targetFilePath = filePath.replace(sourcePath, targetPath);

        try {
          fs.copySync(filePath, targetFilePath);
          allFiles.push(targetFilePath);
        } catch (error) {
          hasErrors = true;
          errors.push({
            error: error,
            file: filePath,
            dest: targetFilePath,
          });
        }
      }
    } else {
      if (!fileMode) {
        totalFiles++;
        fs.copySync(sourcePath, targetPath);
      } else {
        sourcePath.forEach((currentPath) => {
          const currentSourcePath = path.join(currentDir, currentPath);
          const currentTargetPath = path.join(
            currentDir,
            currentPath.replace(currentPath, targetPath) + path.basename(currentPath),
          );
          console.log("\tCurrent Source Path: ", currentSourcePath);
          console.log("\tCurrent Target Path: ", currentTargetPath);
          totalFiles++;
          fs.copySync(currentSourcePath, currentTargetPath);
        });
      }
    }

    if (debugMode) {
      if (allFiles.length > 0) {
        console.log("\tFiles: \n", allFiles);
      }
      console.log("\tTotal Files: " + cc.fg.cyan + totalFiles + cc.reset + "\n");
    }

    if (hasErrors) {
      if (debugMode) {
        consoleWrap("❌ Error with copying files into new directory. ", taskName);
        console.log("\n\tProblematic files: \n", errors);
      }
      reject(errors);
    } else {
      if (debugMode) {
        consoleWrap("✅ Successfully copied files recursively into new directory. ", taskName);
      }
      resolve(true);
    }
  });
};

/**
 |--------------------------------------------------------------------------
 |  Function: walkSync() --> Retrieve all files recursively
 |--------------------------------------------------------------------------
 */
function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

/**
 |--------------------------------------------------------------------------
 |  Task-Copy: Loop through each asset/tasks
 |--------------------------------------------------------------------------
 */
assetTasks.forEach(async (task) => {
  if (debugMode) {
    consoleWrap("Copying assets for: " + cc.bg.black + cc.fg.yellow + task.type + cc.reset, taskName);
  }

  if (!Array.isArray(task.paths.from) && !fs.existsSync(path.join(currentDir, task.paths.from))) {
    return;
  }

  if (task.purge && fs.existsSync(path.join(currentDir, task.paths.to))) {
    if (debugMode) {
      consoleWrap("Purging folder: " + cc.fg.cyan + path.join(currentDir, task.paths.to) + cc.reset, taskName);
    }
    fs.rmSync(path.join(currentDir, task.paths.to), { recursive: true, force: true });
  }

  await recursiveCopy(task.paths.from, task.paths.to, task.type, task.fileMode);
});

if (debugMode) {
  consoleWrap("Asset copying is complete.\n", taskName);

  console.log(cc.fg.cyan + "\n----------------------------------------------------\n" + cc.reset);
}
