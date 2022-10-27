const Engineer = require("../lib/Engineer");
const name = "Name",
    id = 123,
    email = "me@mail.com",
    github = "githubUserName";

describe("Engineer", () => {
    describe("constructor", () => {
        it("should create an object which is an instance of Engineer", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance instanceof Engineer).toBe(true);
        });
        it("should have the proper values", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.name).toEqual(name);
            expect(instance.id).toEqual(id);
            expect(instance.email).toEqual(email);
            expect(instance.github).toEqual(github);
        });
    });
    describe("getters", () => {
        it("should return the engineer's name", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.getName()).toEqual(name);
        });
        it("should return the engineer's id", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.getId()).toEqual(id);
        });
        it("should return the engineer's email", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.getEmail()).toEqual(email);
        });
        it("should return the engineer's role", () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.getRole()).toEqual("Engineer");
        });
        it('should return the engineer\'s github account', () => {
            const instance = new Engineer(name, id, email, github);

            expect(instance.getGithubUsername()).toEqual(github);
        });
    });
});
