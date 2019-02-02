class Employee {
    private _id: number;
    private name: string;
    private country: string;
    private state: string;
    private city: string;
    constructor(id: number, name: string, country: string, state: string, city: string) {
        this._id = id;
        this.name = name;
        this.country = country;
        this.state = state;
        this.city = city;
    }
    public display() {
        console.log("EMP CLASS");
    }
}
class Department extends Employee {
    public display() {
        console.log("DEPT CLASS");
    }

}
var emps: Employee[];
for (var i: number = 0; i < 10; i++) {
    var employee = new Employee(Number(prompt("ID")), String(prompt("NAME")), String(prompt("Country")), String(prompt("STATE")), String(prompt("CITY")));
    emps[i]=employee;
}
