class Student {
    name: string = ''
    email: string = ''
    phone: string = ''
    marks_physics: number = 0
    marks_chemistry: number = 0
    marks_maths: number = 0
    constructor(_name: string, _email: string, _phone: string) {
        this.name = _name
        this.email = _email
        this.phone = _phone
    }
    setMarks(_marks_physics: number, _marks_chemistry: number, _marks_maths: number) {
        this.marks_chemistry = _marks_chemistry
        this.marks_maths = _marks_maths
        this.marks_physics = _marks_physics
    }
    getTotalMarks():number {
        return this.marks_physics + this.marks_maths + this.marks_chemistry
    }
}
type studentType = Array<Student>
var students: studentType = []
var studentCount: number = Number(prompt('Student Count'))
var i: number = 0
for (i = 0; i < studentCount; i++) {
    alert('Student ' + (i + 1) + ' Details')
    var stu: Student = new Student(String(prompt('Name')), String(prompt('Email')), String(prompt('Phone')))
    stu.setMarks(Number(prompt('Marks in Physics')), Number(prompt('Marks in Chemistry')), Number(prompt('Marks in Mathematics')))
    students[i] = stu
}
var result:string=''
for (i = 0; i < studentCount; i++) {
   var totalMarks:number=  students[i].getTotalMarks();
   result =result + 'Name: '+students[i].name+' Total Marks: '+totalMarks +'\n';
}
alert(result);
