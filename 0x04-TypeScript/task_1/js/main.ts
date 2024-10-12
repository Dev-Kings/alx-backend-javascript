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