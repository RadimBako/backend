"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/helloworld-error.js");

const WARNINGS = {
    initUnsupportedKeys: {
        code: `${Errors.Greeting.UC_CODE}unsupportedKeys`,
    },
};

class HelloworldAbl {

    constructor() {
        this.validator = Validator.load();
    }
    greeting(userName, dtoIn) {
        // HDS 1
        let validationResult = this.validator.validate("helloworldGreetingDtoInType", dtoIn);
        // A1, A2
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.initUnsupportedKeys.code,
            Errors.Greeting.InvalidDtoIn
        );

        let message = dtoIn.greeting + " " + userName
        if (dtoIn.sufix) {
            message += " " + dtoIn.sufix
        }
        return {
            message,
            dtoIn: { ...dtoIn },
            uuAppErrorMap: {}
        };
    }
};


module.exports = new HelloworldAbl();
