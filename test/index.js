let fs = require("fs");
let jsdom = require("jsdom").JSDOM;
let map = new Map();
let DD = {
  createModule(config) {
    let m = {};
    let template = fs.readFileSync(config.templateUrl).toString();
    let fileName = DD.doSenise(template, m);
    map.set(m, fileName);
  },
  doSenise(str, m) {
    let tree = new jsdom(str).window.document.body;
    let strs = this.getDeep(tree, m);
    fs.writeFileSync("index.json", strs);
  },
  getDeep(Node) {
    let tem = {};
    tem.tagName = Node.tagName;
    if (Node.attributes&&Node.attributes.length) {
      tem.attributes = [];
      for (let i = 0; i < Node.attributes.length; i += 1) {
        let name = Node.attributes[i].name;
        let value = Node.attributes[i].value;
        let attr = {};
        attr[name] = value;
        tem.attributes.push(attr);
      }
    }
    if (Node.childNodes) {
      tem.childNodes = [];
      Object.keys(Node.childNodes).forEach((i, index) => {
        tem.childNodes[index] = this.getDeep(Node.childNodes[i]);
      });
    }
    let result = JSON.stringify(tem);
    return result;
  }
};
let f = function() {
  let str1 = fs.readFileSync("./hhh.js").toString();
  eval(str1)
}
f();
