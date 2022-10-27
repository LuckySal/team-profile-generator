const Manager = require("../lib/Manager");
const name = "Name",
    id = 123,
    email = "me@mail.com",
    officeNumber = 123;

describe("Manager", () => {
    describe("constructor", () => {
        it("should create an object which is an instance of Manager", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance instanceof Manager).toBe(true);
        });
        it("should have the proper values", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.name).toEqual(name);
            expect(instance.id).toEqual(id);
            expect(instance.email).toEqual(email);
            expect(instance.office).toEqual(officeNumber);
        });
    });
    describe("getters", () => {
        it("should return the manager's name", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.getName()).toEqual(name);
        });
        it("should return the manager's id", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.getId()).toEqual(id);
        });
        it("should return the manager's email", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.getEmail()).toEqual(email);
        });
        it("should return the manager's role", () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.getRole()).toEqual("Manager");
        });
        it('should return the manager\'s office number', () => {
            const instance = new Manager(name, id, email, officeNumber);

            expect(instance.getOfficeNumber()).toEqual(officeNumber);
        });
    });
});
