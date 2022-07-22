
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user opens a website

    Scenario: Success Login
        When A user enters the email "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the website will redirect the user back to homepage

    Scenario: Blocked Login
        When A user enters the email "locked_out_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then The error message "invalid email or password" is displayed

    Scenario: Incorrect email Login
        When A user provides incorrect credentials
            | email | password     |
            | testName | secret_sauce |
        And A user clicks on the login button
        Then The error message "invalid email or password" is displayed
        
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials
            | email      | password     |
            | standard_user | testPassword |
        And A user clicks on the login button
        Then The error message "invalid email or password" is displayed

