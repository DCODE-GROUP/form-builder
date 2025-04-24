/**
 |--------------------------------------------------------------------------
 |  Function: consoleWrap
 |--------------------------------------------------------------------------
 */
/* eslint-disable no-console */

const showTimestamps = false;
const cc = require("./colour-console.helper.js");

const consoleWrap = (message, taskName) => {
  const newDate = new Date();
  const timestamp = showTimestamps
    ? ("0" + newDate.getDate()).slice(-2) +
      "-" +
      ("0" + (newDate.getMonth() + 1)).slice(-2) +
      "-" +
      newDate.getFullYear() +
      " " +
      ("0" + (newDate.getHours() + 1)).slice(-2) +
      ":" +
      ("0" + (newDate.getMinutes() + 1)).slice(-2) +
      ":" +
      ("0" + (newDate.getSeconds() + 1)).slice(-2) +
      ":" +
      ("0" + (newDate.getMilliseconds() + 2)).slice(-3)
    : "";

  let consoleString = cc.bg.black + cc.fg.magenta + taskName + cc.reset + " - " + message;

  if (showTimestamps) {
    consoleString = "[" + timestamp + "] " + consoleString;
  }
  console.log(consoleString);
};

module.exports = consoleWrap;
