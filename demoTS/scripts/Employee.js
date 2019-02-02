"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, country, state, city) {
        this._id = id;
        this.name = name;
        this.country = country;
        this.state = state;
        this.city = city;
    }
    Employee.prototype.display = function () {
        console.log("EMP CLASS");
    };
    return Employee;
}());
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Department.prototype.display = function () {
        console.log("DEPT CLASS");
    };
    return Department;
}(Employee));
var emps;
for (var i = 0; i < 10; i++) {
    var employee = new Employee(Number(prompt("ID")), String(prompt("NAME")), String(prompt("Country")), String(prompt("STATE")), String(prompt("CITY")));
    emps[i] = employee;
}
//# sourceMappingURL=Employee.js.map