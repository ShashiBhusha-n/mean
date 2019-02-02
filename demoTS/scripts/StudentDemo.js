"use strict";
var Student = /** @class */ (function () {
    function Student(_name, _email, _phone) {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.marks_physics = 0;
        this.marks_chemistry = 0;
        this.marks_maths = 0;
        this.name = _name;
        this.email = _email;
        this.phone = _phone;
    }
    Student.prototype.setMarks = function (_marks_physics, _marks_chemistry, _marks_maths) {
        this.marks_chemistry = _marks_chemistry;
        this.marks_maths = _marks_maths;
        this.marks_physics = _marks_physics;
    };
    Student.prototype.getTotalMarks = function () {
        return this.marks_physics + this.marks_maths + this.marks_chemistry;
    };
    return Student;
}());
var students = [];
var studentCount = Number(prompt('Student Count'));
var i = 0;
for (i = 0; i < studentCount; i++) {
    alert('Student ' + (i + 1) + ' Details');
    var stu = new Student(String(prompt('Name')), String(prompt('Email')), String(prompt('Phone')));
    stu.setMarks(Number(prompt('Marks in Physics')), Number(prompt('Marks in Chemistry')), Number(prompt('Marks in Mathematics')));
    students[i] = stu;
}
var result = '';
for (i = 0; i < studentCount; i++) {
    var totalMarks = students[i].getTotalMarks();
    result = result + 'Name: ' + students[i].name + ' Total Marks: ' + totalMarks + '\n';
}
alert(result);
//# sourceMappingURL=StudentDemo.js.map