"use strict";
const HelloworldMainAbl = require("../../abl/helloworld-main-abl.js");

class HelloworldMainController {
  init(ucEnv) {
    return HelloworldMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return HelloworldMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return HelloworldMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new HelloworldMainController();
