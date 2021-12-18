/*
  再帰ではStack Overflowになるので動かない。
*/

const fs = require("fs");
const jsonObject = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
let maxLevel = 0;
let maxValue;

const searchDeepestData = (jsonObject, level) => {
  for (const key of Object.keys(jsonObject)) {
    if (typeof jsonObject[key] === "object") {
      searchDeepestData(jsonObject[key], level + 1);
    } else {
      if (maxLevel < level) {
        maxLevel = level;
        maxValue = jsonObject[key];
      }
    }
  }
};

searchDeepestData(jsonObject, 0);

console.log(maxLevel);
console.log(maxValue);
