"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/helloworld-error.js");
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { Schemas, Profiles, GreetStates } = require("./constants");


const WARNINGS = {
    initUnsupportedKeys: {
        code: `${Errors.Greeting.UC_CODE}unsupportedKeys`,
    },
};

class HelloworldAbl {

    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao(Schemas.GREET)
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
    async greetList(awid, dtoIn, authorizationResult) {
        // HDS 1
        let validationResult = this.validator.validate("helloworldGreetListDtoInType", dtoIn);
        // A1, A2
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.initUnsupportedKeys.code,
            Errors.Greeting.InvalidDtoIn
        );

        let profileIterator = authorizationResult.getAuthorizedProfiles();

        let isAuthority = profileIterator.includes(Profiles.AUTHORITIES);
        let states = [GreetStates.ACTIVE]
        if (isAuthority) {
            states.push(GreetStates.CONSTRUCT);
            states.push(GreetStates.ARCHIVE);
        }

        let greetList = await this.dao.list(awid, states);

        return {
            profileIterator,
            ...greetList,
            uuAppErrorMap
        };
    }
};


module.exports = new HelloworldAbl();
