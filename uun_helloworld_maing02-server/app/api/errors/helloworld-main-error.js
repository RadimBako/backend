"use strict";
const HelloworldMainUseCaseError = require("./helloworld-main-use-case-error.js");

const Init = {
  UC_CODE: `${HelloworldMainUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends HelloworldMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends HelloworldMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends HelloworldMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  CreateAwscFailed: class extends HelloworldMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },

  HelloworldDaoCreateFailed: class extends HelloworldMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}daoCreateFailed`;
      this.message = "Create helloworld by DAO method failed.";
    }
  },
};

module.exports = {
  Init,
};
