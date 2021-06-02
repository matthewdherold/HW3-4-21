const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderPage = require("./src/renderPage");

const outputPath = path.join("./output", "output.html");
const team = [];
const teamIds = [];

const buildTeam = () => {

    const finishTeam = (team) => {
        fs.writeFileSync(outputPath, renderPage(team), "utf-8");
        console.log("Success!");
    };

    const chooseEmployee = () => {
        inquirer.prompt(
            {
                type: "list",
                name: "employeeSelection",
                message: "Add an employee?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Finished adding employees"
                ]
            }
        ).then(response => {
            switch (response.employeeSelection) {
                case ("Manager"):
                    addManager();
                    break;
                case ("Engineer"):
                    addEngineer();
                    break;
                case ("Intern"):
                    addIntern();
                    break;
                case ("Finished adding employees"):
                    finishTeam(team);
                    break;
                default:
                    console.log("error in selection");
                    chooseEmployee();
                    break;
            }
        })
    };

    const addManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the team manager's name:"
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the team manager's id number:"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the team manager's email address:"
            },
            {
                type: "input",
                name: "managerPhone",
                message: "Please enter the team manager's phone number:"
            }
        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerPhone);
            team.push(manager);
            teamIds.push(responses.managerId);
            chooseEmployee();
        })};

    const addEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the engineer's name:"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's id number:"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email address:"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Please enter the engineer's GitHub username:"
            }
        ]).then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub);
            team.push(engineer);
            teamIds.push(responses.engineerId);
            chooseEmployee();
        })};

    const addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter the intern's name:"
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter the intern's id number:"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter the intern's email address:"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the intern's school:"
            }
        ]).then(responses => {
            const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
            team.push(intern);
            teamIds.push(responses.internId);
            chooseEmployee();
        });
    };
    chooseEmployee();
};

buildTeam();