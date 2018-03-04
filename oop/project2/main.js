var studentList = [];
var professorList = [];


function createStudent() {
    var nameStudent = document.querySelector("#studentName").value;
    var surnameStudent = document.querySelector("#studentSurname").value;
    var idStudent = document.querySelector("#studentNumber").value;
    var select = document.querySelector("select");
    var option = select.options[select.selectedIndex].text;


    var student = new Student(nameStudent, surnameStudent, idStudent, option);

    studentList.push(student);

    var textStudent = document.querySelector("#textStudent");
    var ulStudent = document.querySelector("ul");
    var text = document.createTextNode(student.displayData());
    textStudent.appendChild(ulStudent);
    ulStudent.appendChild(text);

    var addStudSel = document.querySelector("#addStudSelect");
    var optionStud = document.createElement("option");
    optionStud.value = studentList.length - 1;
    addStudSel.appendChild(optionStud);
    var addTextStud = document.createTextNode(student.displayData());
    optionStud.appendChild(addTextStud);



}

var createStudentBtn = document.querySelector("#createStudent");

createStudentBtn.addEventListener("click", createStudent);


function createProfessor() {
    var nameProfessor = document.querySelector("#professorName").value;
    var surnameProfessor = document.querySelector("#professorSurname").value;
    var salaryProfessor = document.querySelector("#professorSalary").value;
    var officeProfessor = document.querySelector("#professorOffice").value;

    var professor = new Professor(nameProfessor, surnameProfessor, salaryProfessor, officeProfessor);

    professorList.push(professor);

    // var textProfessor = document.querySelector("#textProfessor");
    // var ulProfessor = document.querySelector("ul");
    // var text2 = document.createTextNode( nameProfessor + surnameProfessor);
    // textProfessor.appendChild(ulProfessor);
    // ulProfessor.appendChild(text2);


    var addProfSel = document.querySelector("#addProfSelect");
    var optionProf = document.createElement("option");
    optionProf.value = professorList.length - 1;
    addProfSel.appendChild(optionProf);
    var addTextProf = document.createTextNode(professor.getProfInfo());
    optionProf.appendChild(addTextProf);


};
var createProfessorBtn = document.querySelector("#createProfessor");

createProfessorBtn.addEventListener("click", createProfessor);