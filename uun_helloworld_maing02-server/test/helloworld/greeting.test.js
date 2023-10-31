const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
    await TestHelper.setup();

});

beforeEach(async () => {
    await TestHelper.initUuSubAppInstance();
    await TestHelper.createUuAppWorkspace();
    await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGALL" });
})

afterEach(async () => {
    await TestHelper.dropDatabase();
});

afterAll(async () => {
    await TestHelper.teardown();
});

describe("Testing the helloworld greeting uuCmd...", () => {
    test("HDS", async () => {
        let session = await TestHelper.login("AwidLicenseOwner", false, false);

        let dtoIn = {
            "greeting": "Ahoj",
            "sufix": "ty stara pako"
        };
        let result = await TestHelper.executeGetCommand("helloworld/greeting", dtoIn, session);

        expect(result.status).toEqual(200);
        expect(result.data.uuAppErrorMap).toBeDefined();
    });

    test("invalid - dtoIn", async () => {
        let session = await TestHelper.login("AwidLicenseOwner", false, false);

        let dtoIn = {};
        expect.assertions(3);
        try {
            await TestHelper.executeGetCommand("helloworld/greeting", dtoIn, session);
        } catch (e) {
            expect(e.status).toEqual(400);
            expect(e.message).toBeDefined();
            expect(e.code).toEqual("uun-helloworld-main/helloworld/greeting/invalidDtoIn");
        }
    });
});
