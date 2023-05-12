Feature: Create new Bank account

  Scenario: Create new bank account
    Given As a new user open page "Bank Account"
    When On the "Bank Account" page I click "create new button"
    And On the "Bank Account" page fill in "bank account name" with "new bank account name"
    And On the "Bank Account" page fill in "bank account routing number" with "123456789"
    And On the "Bank Account" page fill in "bank account account number" with "1234567890"
    And On the "Bank Account" page I click "save button"
    Then On the "Bank Account" page the "last bank account" has the value "new bank account name"