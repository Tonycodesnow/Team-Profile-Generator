const generateTeamProGen = generate => {
    return`
    `}

module.exports = templateData => {
     // destructure page data by section


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
<div class="col-sm-4">
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">#1 Card Header<br>☕ Manager</div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
  </div>
    </div>
<div class="col-sm-4">
<div class="card text-white bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">#2 Card Header<br>💼 Employee</div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  </div>
</div>
  </div>
  <div class="col-sm-4">
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">#3 Card Header<br>🛠️ Engineer</div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  </div>
</div>
</div>
<div class="col-sm-4">
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">#4 Card Header<br>🎓️ Intern</div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  </div>
</div>
</div>
  </div>  

    `;
    };