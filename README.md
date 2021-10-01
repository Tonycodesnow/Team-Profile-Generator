# Team* Pro* Gen

## Object* Oriented Programming Challenge: Team Profile Generator
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

### The application must have these classes:
The tests for these classes (in the _tests_ directory) must all pass.

 * Employee,
  * Manager,
   * Engineer,
* and Intern.

### The first class is an Employee parent class with the following properties and methods:
* name
* id
* email
* getName()
* getId()
* getEmail()
* getRole() // Returns 'Employee'
* The other three classes will extend Employee.

### In addition to Employee's properties and methods, Manager will also have:
* officeNumber
* getRole() // Overridden to return 'Manager'

### In addition to Employee's properties and methods, Engineer will also have:
* github // GitHub username
* getGithub()
* getRole() // Overridden to return 'Engineer'

### In addition to Employee's properties and methods, Intern will also have:
* school
* getSchool()
* getRole() // Overridden to return 'Intern'


* GIVEN a command* line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated

<p align="center"><img src="./dist/images/OOP.png" width="70%"></p>

### Finally, 
although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.
