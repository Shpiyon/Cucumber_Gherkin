Feature: Sign Up
   Sign up a user with 'Username' and 'password'

   Background: Open Sign In page
      Given I am on the 'Sign In' page and "sign in page header" is displayed

   Scenario: Signing up
      When I'm on the "Sign In" page click on the "sign up link"
      And On the "Sign Up" page fill in "first name input" with "First"
      And On the "Sign Up" page fill in "last name input" with "Last"
      And On the "Sign Up" page fill in "user name input" with "Username"
      And On the "Sign Up" page fill in "password input" with "s3cret"
      And On the "Sign Up" page fill in "confirm password input" with "s3cret"
      And On the "Sign Up" page I click "submit button"
      Then The "Sign In" page should open and "sign in page header" is displayed
