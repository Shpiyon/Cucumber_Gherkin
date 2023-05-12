Feature: Sign In
  Login a user with 'Username'

  Background: Open Sign In page
    Given I am on the 'Sign In' page and "sign in page header" is displayed

  Scenario: Signing in
    When On the "Sign In" page fill in "user name input" with created user username
    And On the "Sign In" page fill in "password input" with "s3cret"
    And On the "Sign In" page I click "submit button"
    Then The "Main" page should be open and "first tutorial modal" is displayed

  Scenario: Verifying error messages
    When On the "Sign In" page I click "password input"
    And On the "Sign In" page the "user name input error text" has the value "Username is required"
    And On the "Sign In" page fill in "password input" with "1"
    And On the "Sign In" page I click "user name input"
    And On the "Sign In" page the "password input error text" has the value "Password must contain at least 4 characters"
