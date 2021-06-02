module.exports = (team) => {
    const page = [`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Generated Team</title>
        <link rel="stylesheet" href="output.css">
    </head>

    <body>
    <div id="managerContainer">
    `, ];
    const managers = [];
    const engineers = [];
    const interns = [];
    for (let i = 0; i < team.length; i++) {
        const element = team[i];
        switch (element.role) {
        case ("Manager"):
                managers.push(`
                <div id="managerDiv">
                    <h1 id="managerName">${element.name}</h1>
                    <h2 id="managerRole">${element.role}</h2>
                    <ul id="managerList">
                        <li>ID: ${element.id}</li>
                        <li>Email: <a href="mailto:${element.email}">${element.email}</a></li>
                        <li>Phone Number: ${element.number}</li>
                    </ul>
                </div>
                `);
            break;
        case ("Engineer"):
                engineers.push(`
                <div id="engingeerDiv">
                    <h1 id="engingeerName">${element.name}</h1>
                    <h2 id="engingeerRole">${element.role}</h2>
                    <ul id="engingeerList">
                        <li>ID: ${element.id}</li>
                        <li>Email: <a href="mailto:${element.email}">${element.email}</a></li>
                        <li>GitHub: <a href="https://github.com/${element.github}" target="_blank">${element.github}</a></li>
                    </ul>
                </div>
                `);
            break;
        case ("Intern"):
                interns.push(`
                <div id="internDiv">
                    <h1 id="internName">${element.name}</h1>
                    <h2 id="internRole">${element.role}</h2>
                    <ul id="internList">
                        <li>ID: ${element.id}</li>
                        <li>Email: <a href="mailto:${element.email}">${element.email}</a></li>
                        <li>School: ${element.school}</li>
                    </ul>
                </div>
                `);
            break;                 
        default:

            break;
        }
    }
    managers.join("");
    engineers.join("");
    interns.join("");
    page.push(managers);
    page.push(`
    </div>
    <div id="engineerContainer">
    `);
    page.push(engineers);
    page.push(`
    </div>
    <div id="internContainer">
    `);
    page.push(interns);
    page.push(`
    </div>
    </body>
    </html>
    `);
    return page.join("");
};
