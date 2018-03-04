"use strict";


function Person(name, surname) {
    this.id = Math.floor(Math.random(1000 - 100) * 100000);
    this.name = name;
    this.surname = surname;
}

Person.prototype.getData = function () {
    return "Name: " + this.name + "Surname: " + this.surname + "ID: " + this.id;
}

function Employee(name, surname, salary) {
    Person.call(this, name, surname);
    this.salary = salary;
};
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Employee.prototype.getData = function () {
    return "Name:" + this.name + " Surname:" + this.surname + " Salary:" + this.salary + " eur" + " ID:" + this.id;
}


function Professor(name, surname, salary, officeNumber) {
    Employee.call(this, name, surname, salary);
    this.officeNumber = officeNumber;
}

Professor.prototype.getData = function () {
    return "Name:" + this.name + " Surname:" + this.surname + " Salary:" + this.salary + " eur" + " Office number:" + this.officeNumber;
}

Professor.prototype.getProfInfo = function () {
    return "Name:" + this.name + " Surname:" + this.surname + " ID:" + this.id + " Office number:" + this.officeNumber;
};


function Student(name, surname, indexNum, studStatus) {
    Person.call(this, name, surname);
    this.indexNum = indexNum;
    this.studStatus = studStatus;
    this.passOfExam = [];
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.displayData = function(){
    return "Name: " + this.name + " Surname: " + this.surname + " Index num: " + this.indexNum + " Student status: " + this.studStatus;
}

Student.prototype.addExam = function (passExam) {
    this.passOfExam.push(passExam);
};

Student.prototype.getAllExam = function () {                        
    var result = "";

    for (var i = 0; i < this.passOfExam.length; i++) {
        result += this.passOfExam[i].getExamData() + '\n';
    }
    return result;

};

var STUDENT_STATUS = Object.freeze({
    REGULAR: "regular",
    REMOTE: "remote",
    GRADUATED: "graduated"

});

var listOfExams = Object.freeze({
    TERMOTEHNIKA: "TERMOTEHNIKA",
    MATEMATIKA: "MATEMATIKA",
    MEHANIKAFLUIDA: "MEHANIKAFLUIDA"

});


function Passexam(listOfExams, date, grade, profesor) {
    this.listOfExams = listOfExams;
    this.date = new Date(date);
    this.grade = grade;
    this.profesor = profesor;
}

Passexam.prototype.addDate = function () {
    return this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear();
}

Passexam.prototype.getExamData = function () {
    return " \n Exam: " + this.listOfExams + " date: " + this.addDate() + "; grade: " + this.grade + ";\n Profesor: " + this.profesor.getProfInfo();
}
Passexam.prototype.addProfesor = function (addprof) {
    return this.profesor = addprof;
}

// var darkoProf = new Professor('Darko', 'Dedovic', 78000, '15c');
// console.log(darkoProf);
// var termoTehnika = new Passexam(listOfExams.TERMOTEHNIKA, '23 May 2016', 6, darkoProf);
// console.log(termoTehnika);
// var matematika = new Passexam(listOfExams.MATEMATIKA, '25 May 2016', 6, darkoProf);
// console.log(matematika);
// var nikola = new Student("Nikola", "Radovic", "2001", status.REGULAR);
// console.log(nikola);

// nikola.addExam(termoTehnika);
// nikola.addExam(matematika)
// console.log(nikola.getData());
