const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Employee array to store employee objects
let employees = [];

// Function to display menu
function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit\n");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addEmployee();
        break;
      case "2":
        listEmployees();
        break;
      case "3":
        removeEmployee();
        break;
      case "4":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        showMenu();
    }
  });
}

// Function to add employee
function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee ID: ", (id) => {
      employees.push({ name, id });
      console.log(`Employee ${name} added successfully!`);
      showMenu();
    });
  });
}

// Function to list employees
function listEmployees() {
  if (employees.length === 0) {
    console.log("No employees to show.");
  } else {
    console.log("\nEmployee List:");
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. Name: ${emp.name}, ID: ${emp.id}`);
    });
  }
  showMenu();
}

// Function to remove employee by ID
function removeEmployee() {
  rl.question("Enter employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      console.log(`Employee ${employees[index].name} removed.`);
      employees.splice(index, 1);
    } else {
      console.log("Employee not found.");
    }
    showMenu();
  });
}

// Start the app
showMenu();
