
Feature: Register Page

    Feature Register will work depending on the user's input.

    Background:
        Given User goes to the website
        And User clicks on the Menu
        And User selects the Register option
        Then Register Page should be loaded successfully

    # Scenario: R01 - Verify that all of the elements are visible and working properly

    Scenario: R02 - The user should be able to register an account with validdate data
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

    Scenario: R03 - Verify the alert dialog when input fiels are empty
        When User clicks on Submit button of Register Page
        Then An error alert should be displayed

    Scenario: R04 - Verify name validation
        When User fills the form of Register Page with the following data
                | name | email | password | repeatPassword |
                | <name> | <email> | <password> | <repeatPassword> |
        Then An error alert should be displayed
        Examples:
                | 1234!@#$ | johnsmith@gmail.com | 123@123a | 123@123a |
                | 1235!@#$ | johnsmith@gmail.com | 123@123a | 123@123a |
                | 12346!@#$ | johnsmith@gmail.com | 123@123a | 123@123a |

    Scenario: R05 - Verify email validation 
        When User fills the form of Register Page with the following data
                | name | email | password | repeatPassword |
                | John Smith | johnsmith | 123@123a | 123@123a |    
        Then An error alert should be displayed

    Scenario: R06 - Verify password validation
        When User fills the form of Register Page with the following data
                | name | email | password | repeatPassword |
                | John Smith | johnsmith@gmail.com | 123@123a | 123@123a |
        Then An error alert should be displayed

    Scenario: R07 - Verify repeat password validation
        When User fills the form of Register Page with the following data
                | name | email | password | repeatPassword |
                | John Smith | johnsmith@gmail.com | 123@123a | a |
        Then An error alert should be displayed


    

    

    