Feature: Register Page

    Feature Register will work depending on the user's input.

    Background:
        Given User goes to the website
        And User clicks on the Menu
        And User selects the Register option
        Then Register Page should be loaded successfully

    Scenario: Register Successfully  
        When User types "<name>" in name input field
        And User types "<email>" in email input field
        And User types "<password>" in password input field
        And User types "<repeatPasword>" in repeat password input field
        And User clicks on Submit button
        Then User should be redirected to homepage
        # And User should be able to see the <name> on the menu

        Examples:
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | 123@123a |

    Scenario: Register Unsuccessfully 
        When User types "<name>" in name input field
        And User types "<email>" in email input field
        And User types "<password>" in password input field
        And User types "<repeatPasword>" in repeat password input field
        And User clicks on Submit button
        Then An error alert should be displayed

        Examples:
            | name | email | password | repeatPassword |
            | John Smith | johnsmith@gmail.com | 123@123a | wrong repeat password |
