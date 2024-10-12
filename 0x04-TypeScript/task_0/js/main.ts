// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Dave',
    lastName: 'Kings',
    age: 30,
    location: 'Kenya',
};

const student2: Student = {
    firstName: 'Tom',
    lastName: 'Sheldon',
    age: 35,
    location: 'UK',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using vanilla Javascript
const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);