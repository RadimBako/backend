"use strict";
const HelloworldMainUseCaseError = require("./helloworld-main-use-case-error.js");

const Greeting = {
    UC_CODE: `${HelloworldMainUseCaseError.ERROR_PREFIX}helloworld/greeting/`,

    InvalidDtoIn: class extends HelloworldMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Greeting.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
};

module.exports = {
    Greeting,
};
