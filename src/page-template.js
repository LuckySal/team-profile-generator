const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateTeam = (team) => {
    // create the manager html
    const generateManager = (manager) => {
        return `<div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Manager</h5>
                <h6 class="card-title text-center">${manager.getName()}</h6>
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    };

    // create the html for engineers
    const generateEngineer = (engineer) => {
        return `<div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Engineer</h5>
                <h6 class="card-title text-center">${engineer.getName()}</h6>
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Username: ${engineer.getGithubUsername()}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    };

    // create the html for interns
    const generateIntern = (intern) => {
        return `<div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Intern</h5>
                <h6 class="card-title text-center">${intern.getName()}</h6>
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    };

    // use the team array to generate pieces of html based on the employee role
    let body = "";
    team.forEach(element => {
        if (element instanceof Manager) {
            body += generateManager(element);
        } else if (element instanceof Engineer) {
            body += generateEngineer(element);
        } else if (element instanceof Intern) {
            body += generateIntern(element);
        }
    });
    return body;
};

module.exports = (team) => {
    // template literal - html body that calls the generate team function
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossorigin="anonymous" />
            <link rel="stylesheet" href="style.css" />
            <title>Team</title>
        </head>
        <body>
            <header>
                <h1 class="text-center">My Team</h1>
            </header>
            <main class="container">
                <div class="row">
                    ${generateTeam(team)}
                </div>
            </main>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
        </body>
    </html>
    `;
};
