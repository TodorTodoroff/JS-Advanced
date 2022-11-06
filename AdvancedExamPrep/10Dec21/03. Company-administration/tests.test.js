let companyAdministration = require('./companyAdministration');
let { assert } = require('chai');

describe("Tests …", function () {
    describe("Test hiringEmployee method", function () {
        it("Test method throw if position different than 'Programmer'", () => {
            assert.throw(() => (companyAdministration.hiringEmployee("Pesho", "NotProgrammer", 1)), "We are not looking for workers for this position.");
        });
        it("Test method years of experiance greater than or equal to 3", () => {
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 30), "Pesho was successfully hired for the position Programmer.");
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 3), "Pesho was successfully hired for the position Programmer.");
        });
        it("Test method years of experiance less than 3", () => {
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 1), "Pesho is not approved for this position.");
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 2), "Pesho is not approved for this position.");
        });
    });
    describe("Test calculateSalary method", function () {
        it("Test method throw if hours different positive number or a number", () => {
            assert.throw(() => (companyAdministration.calculateSalary("Pesho")), "Invalid hours");
            assert.throw(() => (companyAdministration.calculateSalary("12")), "Invalid hours");
            assert.throw(() => (companyAdministration.calculateSalary(-12)), "Invalid hours");
            assert.throw(() => (companyAdministration.calculateSalary([])), "Invalid hours");
            assert.throw(() => (companyAdministration.calculateSalary({})), "Invalid hours");
            assert.throw(() => (companyAdministration.calculateSalary(false)), "Invalid hours");
        });
        it("Test method calculateSalary correct below or on 160 hours", () => {
            let hours = 150;
            let payPerHour = 15;
            let totalSalary = hours * payPerHour;
            assert.equal(companyAdministration.calculateSalary(hours), totalSalary);

            hours = 160;
            totalSalary = hours * payPerHour;
            assert.equal(companyAdministration.calculateSalary(hours), totalSalary);

            hours = 0;
            totalSalary = hours * payPerHour;
            assert.equal(companyAdministration.calculateSalary(hours), totalSalary);

        });
        it("Test method calculateSalary correct below or on 160 hours", () => {
            let hours = 161;
            let payPerHour = 15;
            let totalSalary = hours * payPerHour + 1000;
            assert.equal(companyAdministration.calculateSalary(hours), totalSalary);

            hours = 210;
            totalSalary = hours * payPerHour + 1000;
            assert.equal(companyAdministration.calculateSalary(hours), totalSalary);

        });
    });
    describe("Test firedEmployee method", function () {
        it("Test method firedEmployee  thorws", () => {
            assert.throw(() => (companyAdministration.firedEmployee("hours", 0)), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee("{}", 1)), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee(1, [])), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee("2", "Pesho")), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee(["Petar"], 2)), "Invalid input");
            assert.throw(() => (companyAdministration.firedEmployee(["Petar"], -1)), "Invalid input");
             assert.throw(() => (companyAdministration.firedEmployee(["Petar"], "pesho")), "Invalid input");
        });
        it("Test method firedEmployee  correct", () => {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), "Petar, George");
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2), "Petar, Ivan");
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0), "Ivan, George");
            assert.equal(companyAdministration.firedEmployee(["Petar"], 0), "");
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan"], 0), "Ivan");
        });
    });

});


