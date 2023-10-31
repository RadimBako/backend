//@@viewOn:constants
const Constants = {
    Schemas: {
        HELLOWORLD_MAIN: "helloworldMain",
        CATEGORY: "category",
        GREET: "greet"
        // TODO: Add other schemas when you configure one in persistance.json and create mongo file for it
    },

    GreetStates: {
        CONSTRUCT: "Construct",
        ACTIVE: "Active",
        ARCHIVE: "Archive",
    },


    Profiles: {
        AUTHORITIES: "Authorities",
        EXECUTIVES: "Executives",
        READERS: "Readers",
    },
};
//@@viewOff:constants

//@@viewOn:exports
module.exports = Constants;
//@@viewOff:exports