# Cypress-Testing-E2E

These are E2E tests built to validate account creation and checkout for [this site](http://automationpractice.com/index.php). They follow the BDD framework and use Cypress as the testing framework. There are also some sample bug reports for [this site](https://qainterview.pythonanywhere.com/) included in the bug report folder.

## Technologies:
Javascript <br />
Cypress <br />

## User Stories: 
GIVEN proper credentials <br />
WHEN a user signs up for an account <br />
THEN it should create an account and log the user in <br />

GIVEN credentials that are already registered <br />
WHEN a user signs up for an account <br />
THEN it should give an error saying that an account already exists <br />

GIVEN proper credentials to an already existing account <br />
WHEN the user logs in <br />
THEN it logs the user in and the logout button should be visible <br />
    
GIVEN false credentials <br />
WHEN the user tries to log in <br />
THEN it should display an error message and the login button should still be visible <br />
    
GIVEN a logged in account <br />
WHEN the user tries to complete an order checkout <br />
THEN the user should get to a page that confirms the order <br />
