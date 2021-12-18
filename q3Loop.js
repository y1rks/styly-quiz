/*
  Stack Overflowを避けるためにループで実装。

  答え：
    "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain."
*/

const fs = require("fs");

const jsonObject = JSON.parse(fs.readFileSync("./sample.json"));

let childrenList = [];
childrenList.push(jsonObject);

const getChildren = (objects) => {
  const children = [];
  for (const object of objects) {
    if (typeof object !== "object") {
      continue;
    }
    const keys = Object.keys(object);
    for (const key of keys) {
      children.push(object[key]);
    }
  }

  return children;
};

while (true) {
  const children = getChildren(childrenList);
  if (children.length === 0) {
    break;
  }
  if (children.length === 1) {
    console.log(children);
  }
  childrenList = children;
}
