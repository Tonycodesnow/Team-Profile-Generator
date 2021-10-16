const generateExtra  = (employ) => {
if(employ.getRole() === "Manager") {
  return `Officenumber: ${employ.getOfficeNumber()}`
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
       <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
       <div class="card-header">Name: ${employ.getName()}</div>
         <div class="card-header">Role: ${employ.getRole()}</div>
         <div class="card-body">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Id: ${employ.getId()}</li>
           <li class="list-group-item">Email: ${employ.getEmail()}</li>
           <li class="list-group-item">${generateExtra(employ)}</li>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
  <body>
  <header id="top">
	<div class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container">
  <a href="#" class="navbar-brand d-flex align-items-center">
  <strong>My Team</strong>
  </a>
  </div>
	</div>
  </header>
  <div class="row">
  ${cardlist}
  </div>  
  </body>
  </html>
    `;
  };

