# // [ ] Verify that all of the elements are visible and working properly
# // [ ] Verify that the user should be able to register an account
# // [ ] Verify that the system add user's data into database
# // [ ] Verify that the name field should display warning message when the input has number
# // [ ] Verify that the name field should display warning message when the input has special character
# // [ ] Verify that an error message will show up if the user submits the form with the Name input field is empty
# // [ ] Verify that an error message will show up if the user submits the form with the Email input field is empty
# // [ ] Verify that the email field should display warning message when the email address is entered without @
# // [ ] Verify that the email field should display warning message when the email address is entered without dot '.'
# // [ ] Verify that the email field should display warning message when the email entered has ! # $ % ^ & * ( ) , + = / ? \ | [ ] { } ` ~ < >
# // [ ] Verify that the email field should display message when the email is already existed in the system
# // [ ] Verify that an error message will show up if the user submits the form with the Password input field is empty
# // [ ] Verify that an error message will show up if the user submits the form with the Repeat Password input field is empty
# // [ ] Verify that the system display message if the repeated password is not the same with the password
# // [ ] Verify that the system display message if the password is too short
# // [ ] Verify that the password and repeated password can be copy pasted

Feature: Register Page

    Feature Register will work depending on the user's input.

    Background:
        Given User goes to the website
        And User clicks on the Menu
        And User selects the Register option
        Then Register Page should be loaded successfully

    Scenario: Verify that all of the elements are visible and working properly

    Scenario: Verify that the user should be able to register an account
        When User types "<name>" in name input field of Register Page
        And User types "<email>" in email input field of Register Page
        And User types "<password>" in password input field of Register Page
        And User types "<repeatPasword>" in repeat password input field of Register Page
        And User clicks on Submit button of Register Page
        Then User should be redirected to homepage
        # And User should be able to see the <name> on the menu

        Examples:
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | 123@123a |

    Scenario: Verify that the system add user's data into database

    Scenario: Verify that the name field should display warning message when the input has number
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed

    Scenario: Verify that the name field should display warning message when the input has special character
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that an error message will show up if the user submits the form with the Name input field is empty
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that an error message will show up if the user submits the form with the Email input field is empty
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the email field should display warning message when the email address is entered without @
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the email field should display warning message when the email address is entered without dot '.'
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the email field should display warning message when the email entered has ! # $ % ^ & * ( ) , + = / ? \ | [ ] { } ` ~ < >
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the email field should display message when the email is already existed in the system
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that an error message will show up if the user submits the form with the Password input field is empty
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that an error message will show up if the user submits the form with the Repeat Password input field is empty
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the system display message if the repeated password is not the same with the password
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the system display message if the password is too short
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    Scenario: Verify that the password and repeated password can be copy pasted
        When User fills the form of Register Page with the following data
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
        Then An error alert should be displayed
    


