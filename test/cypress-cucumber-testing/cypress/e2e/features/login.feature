
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given User goes to the website
        And User clicks on the Menu
        And User selects the Login option
        Then Login Page should be loaded successfully


    Scenario: L01 - Verify if the Login page has function reset password/Forgot password
    Scenario: L02 - Verify that the email's and password box has properly placeholder

    Scenario: L03 - Verify if user is able to login with a valid email and password
        When User types "<email>" in email input field of Login Page
        And User types "<password>" in password input field of Login Page
        And User clicks on Submit button of Login Page
        Then User should be redirected to homepage

        Examples:
            | email   | password |
            | johnsmith@gmail.com | 123@123a |

        
    Scenario: L02 - Verify that the email's and password box has properly placeholder
        When User types "<email>" in email input field of Login Page
        And User types "<password>" in password input field of Login Page
        And User clicks on Submit button of Login Page
        Then An error message should be displayed

        Examples:
            | email   | password |
            | johnsmith@gmail.com | zxcvbnm, |