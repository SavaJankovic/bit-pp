function Person(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}



Person.prototype.getData = function () {
    return this.name + this.surname;
}

Person.prototype.getSalary = function () {
    return this.salary;
}
Person.prototype.increaseSalary = function () {
    var increase = this.salary / 10;
    return this.salary + increase;
}


function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname, salary);
    this.specialization = specialization;

}

function Manager(name, surname, department, salary) {
    Person.call(this, name, surname, salary);
    this.department = department;
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Person;

Employee.prototype.getSpecialization = function () {
    return this.specialization;
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
    return this.department
}

var sava = new Employee("Sava", "Jankovic", "dr", 120000);
var ljuba = new Manager("Ljuba", "Trkulja", "manager", 200000);

console.log(ljuba.getDepartment());
