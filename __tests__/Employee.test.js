const Employee = require("../lib/Employee");
const name = "Name",
    id = 123,
    email = "me@mail.com";

describe("Employee", () => {
    describe("constructor", () => {
        it("should create an object which is an instance of Employee", () => {
            const instance = new Employee(name, id, email);

            expect(instance instanceof Employee).toBe(true);
        });
        it("should have the proper values", () => {
            const instance = new Employee(name, id, email);

            expect(instance.name).toEqual(name);
            expect(instance.id).toEqual(id);
            expect(instance.email).toEqual(email);
        });
    });
    describe("getters", () => {
        it("should return the employee's name", () => {
            const instance = new Employee(name, id, email);

            expect(instance.getName()).toEqual(name);
        });
        it("should return the employee's id", () => {
            const instance = new Employee(name, id, email);

            expect(instance.getId()).toEqual(id);
        });
        it("should return the employee's email", () => {
            const instance = new Employee(name, id, email);

            expect(instance.getEmail()).toEqual(email);
        });
        it("should return the employee's role", () => {
            const instance = new Employee(name, id, email);

            expect(instance.getRole()).toEqual("Employee");
        });
    });
});
