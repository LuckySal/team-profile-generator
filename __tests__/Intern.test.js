const Intern = require("../lib/Intern");
const name = "Name",
    id = 123,
    email = "me@mail.com",
    school = "UCF";

describe("Intern", () => {
    describe("constructor", () => {
        it("should create an object which is an instance of Intern", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance instanceof Intern).toBe(true);
        });
        it("should have the proper values", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.name).toEqual(name);
            expect(instance.id).toEqual(id);
            expect(instance.email).toEqual(email);
            expect(instance.school).toEqual(school);
        });
    });
    describe("getters", () => {
        it("should return the intern's name", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.getName()).toEqual(name);
        });
        it("should return the intern's id", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.getId()).toEqual(id);
        });
        it("should return the intern's email", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.getEmail()).toEqual(email);
        });
        it("should return the intern's role", () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.getRole()).toEqual("Intern");
        });
        it('should return the intern\'s school', () => {
            const instance = new Intern(name, id, email, school);

            expect(instance.getSchool()).toEqual(school);
        });
    });
});
