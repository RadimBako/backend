"use strict";
const helloworldAbl = require("../../abl/helloworld-abl")

class HelloworldController {
    greeting(uuEnv) {
        return helloworldAbl.greeting(
            uuEnv.getSession().getIdentity().getName(),
            uuEnv.getDtoIn()
        );
    }
    greetList(ucEnv) {
        return helloworldAbl.greetList(
            ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(),
            ucEnv.getAuthorizationResult()
        )
    }
}

module.exports = new HelloworldController();
