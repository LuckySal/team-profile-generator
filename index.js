const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");
const { inherits } = require("util");

const teamMembers = [];

async function init() {
    await addManager(teamMembers);
    let addMember;
    do {
        addMember = await addNewMember(teamMembers);
    } while (addMember);
    let contents = render(teamMembers);
    let filename = "index.html";
    let i = 1;
    let isDuplicateFile;
    do {
        try {
            fs.accessSync(`./dist/${filename}`, fs.constants.F_OK);
            isDuplicateFile = true;
            filename = `index(${i++}).html`;
        } catch (err) {
            isDuplicateFile = false;
        }
    } while (isDuplicateFile);
    await writeToFile(filename, contents);
}

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(`./dist/${fileName}`, data);
        console.log(`Created file ${fileName} successfully.`);
    });
}

function addManager(team) {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "number",
                message: "What is the office number?",
                name: "office",
            },
            {
                type: "number",
                message: "What is the manager's Employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "email",
            },
        ];
        inquirer
            .prompt(questions)
            .then((answers) => {
                const manager = new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.office
                );
                team.push(manager);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function addEngineer(team) {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
            },
            {
                type: "number",
                message: "What is the engineer's Employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "github",
            },
        ];
        inquirer
            .prompt(questions)
            .then((answers) => {
                const engineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                );
                team.push(engineer);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function addIntern(team) {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name",
            },
            {
                type: "number",
                message: "What is the intern's Employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "email",
            },

            {
                type: "input",
                message: "What is the intern's school?",
                name: "school",
            },
        ];
        inquirer
            .prompt(questions)
            .then((answers) => {
                const intern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school
                );
                team.push(intern);
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

async function addNewMember(team) {
    return new Promise((resolve, reject) => {
        const questions = [
            {
                type: "list",
                message: "Would you like to add a team member?",
                name: "member",
                choices: ["Engineer", "Intern", "No more"],
            },
        ];
        inquirer
            .prompt(questions)
            .then(async (answers) => {
                if (answers.member === "No more") {
                    resolve(false);
                } else {
                    switch (answers.member) {
                        case "Engineer":
                            await addEngineer(team);
                            resolve(true);
                            break;
                        case "Intern":
                            await addIntern(team);
                            resolve(true);
                            break;
                        default:
                            reject(new Error("Something went wrong"));
                    }
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

init();
