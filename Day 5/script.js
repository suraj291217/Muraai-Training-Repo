/*
const employees = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        salary: 55000
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Arun",
        department: "IT",
        salary: 65000
    }
];
*/

/*
// MAP
const salaries = employees.map(employee => employee.salary);
console.log(salaries);

const names = employees.map(employee => employee.name);
console.log(names);

const arr = [1, 2, 3, 4];
const transformedArr = arr.map(n => n*2);
console.log(transformedArr);

// FILTER
const itEmps = employees.filter(
    employee => employee.department === "IT"
);
console.log(itEmps);

// REDUCE
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,0
);
console.log(totalSalary);

// FIND
const id102 = employees.find(
    employee => employee.id === 102
);
console.log(id102);

// SOME
const result = employees.some(
    employee => employee.salary > 60000
);
console.log(result);

// EVERY 
const result = employees.every(
    employee => employee.salary > 40000
);
console.log(result);

const skills = ["Java", "SQL", "JavaScript"];
console.log(skills.includes("Java"));

const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 55000
};
console.log(employee.name);
console.log(employee.department);

//Using this
const employee = {
    name: "Suraj",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
employee.greet();

const employee = {
    name: "Rahul",
    greet() {
        console.log(`Hello ${this.name}`);
    }   
};
employee.greet();

let employees = [
    {
        id: 101,
        name: "Rahul"
    },
    {
        id: 102,
        name: "Amit"
    },
    {
        id: 103,
        name: "Suraj"
    }
];
let employee = employees.filter(
    employee => employee.id === 102
);
console.log(employee);

// FIND INDEX
let numbers = [10, 20, 30, 40];
// let index = numbers.findIndex(number => number > 20);
console.log(index);

const index = employees.findIndex(
    employee => employee.id === 102
);
console.log(index);

// INCLUDES 
let fruits = ["Apple","Banana","Mango"];
console.log(fruits.includes("Apple"));

let roles = ["admin", "user", "manager"];
if(roles.includes("admin")) {
    console.log("Admin access");
}
*/