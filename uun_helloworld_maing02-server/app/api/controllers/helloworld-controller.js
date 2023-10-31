"use strict";
const helloworldAbl = require("../../abl/helloworld-abl")

class HelloworldController {
    greeting(uuEnv) {
        return helloworldAbl.greeting(
            uuEnv.getSession().getIdentity().getName(),
            uuEnv.getDtoIn()
        );
    }
}

module.exports = new HelloworldController();
