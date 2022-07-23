
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given User goes to the website
        And User clicks on the Menu
        And User selects the Login option
        Then Login Page should be loaded successfully


    Scenario: Login Successfully
        When User types "<email>" in email input field of Login Page
        And User types "<password>" in password input field of Login Page
        And User clicks on Submit button of Login Page
        Then User should be redirected to homepage

        Examples:
            | email   | password |
            | johnsmith@gmail.com | 123@123a |

        
    Scenario: Login Unsuccessfully
        When User types "<email>" in email input field of Login Page
        And User types "<password>" in password input field of Login Page
        And User clicks on Submit button of Login Page
        Then An error message should be displayed

        Examples:
            | email   | password |
            | johnsmith@gmail.com | zxcvbnm, |