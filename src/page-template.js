const generateExtra  = (employ) => {
if(employ.getRole() === "Manager") {
  return `Office<br>Number: ${employ.getOfficeNumber()}`
} else if (employ.getRole() === "Intern"){
  return `School: ${employ.getSchool()}`
} else {
  return `GitHub: ${employ.getGitHub()}`
}
}

module.exports = generatePage = (team) => {
     // destructure page data by section
     console.log(team)
     let cardlist = ''
     team.forEach(employ => {
       let card = `<div class="col-sm-4">
       <div class="bg-info card text-dark mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 16rem;">
       <div class="bg-info card-header"><span class="material-icons">account_circle</span> Name: ${employ.getName()}</div>
         <div class="bg-info card-header"><span class="material-icons">laptop_mac</span> Role: ${employ.getRole()}</div>
         <div class="card-body">
         <ul class="list-group list-group-flush">
           <li class="list-group-item"><span class="material-icons">face</span> Id: ${employ.getId()}</li>
           <a href="mailto:${employ.getEmail()}" class="list-group-item"><span class="material-icons">email</span> Email: ${employ.getEmail()}</a>
           <li class="list-group-item"><span class="material-icons">contacts</span> ${generateExtra(employ)}</li>
         </ul>
         </div>
       </div>
       </div>`
       cardlist = cardlist + card
     })

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
  <body>
  <header id="top">
	<div class="navbar navbar-dark bg-success shadow-sm barcolor">
  <div class="container"><a href="#" class="navbar-brand d-flex"><strong>My Pro Team Generator</strong></a></div>
	</div>
  </header>
  <div class="container px-4">
  <div class="row">
  ${cardlist}
  </div>  
  </div>  
  </body>
  </html>
    `;
  };

