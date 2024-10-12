// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    firstName: 'David',
    lastName: 'Kings',
    location: 'Abroad',
    fullTimeEmployee: 1 === 1,
    contract: 9 !== 9,
};

console.log(teacher);

// Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Director',
    lastName: 'Dir',
    location: 'Africa',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

//Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("David", "Coder"))