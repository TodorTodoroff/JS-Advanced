let companyAdministration = require('./companyAdministration.js');
let { assert } = require('chai');


describe("Tests for companyAdministration", function () {
    describe("tests for hiringEmployee (name, position, yearsExperience) '' '' num", function () {
        it("test if it throws", function () {
            assert.throw(() => companyAdministration.hiringEmployee('Pesho', 'NotProgrammer', 10), `We are not looking for workers for this position.`);
        });
        it("test if it success", function () {
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 10), `Pesho was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3), `Pesho was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4), `Pesho was successfully hired for the position Programmer.`);
        });
        it("test if not success", function () {
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2), `Pesho is not approved for this position.`);
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 1), `Pesho is not approved for this position.`);
        });
    });
    describe("tests for •	calculateSalary (hours) num", function () {
        it("test if it throws", function () {
            assert.throw(() => companyAdministration.calculateSalary({}), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary("Pesho"), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary([]), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary(-1), "Invalid hours");
        });
        it("test if return correct without bonus", function () {
            assert.equal(companyAdministration.calculateSalary(100), 1500);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });
        it("test if return correct with bonus", function () {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
    });
    describe("tests for •	firedEmployee (employees, index)  [] num", function () {
        it("test if it throws", function () {
            assert.throw(() => companyAdministration.firedEmployee([], []), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee({}, []), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee("P", 1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee(["Petar"], "pesho")), "Invalid input");
        });
        it("test if return correct ", function () {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0), `Ivan, George`);
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), `Petar, George`);
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2), `Petar, Ivan`);
            assert.equal(companyAdministration.firedEmployee(["Petar"], 0), "");
        });
    });
});
