Feature: Login
   Login a user with 'Username'

Scenario: Logging in
  Given I am on the 'localhost:3000'
  When I'm on the "SignInPage" page fill in "userNameInput" with "Username"
  And I click login Button
  Then the page should be open