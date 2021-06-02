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
    `, ];
    for (let i = 0; i < team.length; i++) {
        const element = team[i];
        switch (element.role) {
        case ("Manager"):
                page.push(`
                <div>
                    <h1>${element.name}</h1>
                    <h2>${element.role}</h2>
                    <ul>
                        <li>ID: ${element.id}</li>
                        <li>Email: ${element.email}</li>
                        <li>Phone Number: ${element.number}</li>
                    </ul>
                </div>
                `);
            break;
        case ("Engineer"):
                page.push(`
                <div>
                    <h1>${element.name}</h1>
                    <h2>${element.role}</h2>
                    <ul>
                        <li>ID: ${element.id}</li>
                        <li>Email: ${element.email}</li>
                        <li>GitHub: <a href="https://github.com/${element.github}"></a></li>
                    </ul>
                </div>
                `);
            break;
        case ("Intern"):
                page.push(`
                <div>
                    <h1>${element.name}</h1>
                    <h2>${element.role}</h2>
                    <ul>
                        <li>ID: ${element.id}</li>
                        <li>Email: ${element.email}</li>
                        <li>School: ${element.school}</li>
                    </ul>
                </div>
                `);
            break;                 
        default:

            break;
        }
    }
    page.push(`
    </body>
    </html>
    `)
    return page.join("");
};
