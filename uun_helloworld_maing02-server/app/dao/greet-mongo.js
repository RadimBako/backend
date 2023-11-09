"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class GreetMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
        await super.createIndex({ awid: 1, name: 1 });
    }

    async list(awid, states) {
        let filter = { awid };
        if (states && states.length > 0) {
            filter.states = { $in: states };
        }
        return super.find(filter);
    }
}

module.exports = GreetMongo;