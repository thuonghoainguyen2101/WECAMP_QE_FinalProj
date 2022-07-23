Feature: Register Page

    Feature Register will work depending on the user's input.

    Background:
        Given User goes to the website
        And User has not authenticated 
        And User selects the Register option
        And Register Page should be loaded successfully

    Scenario: Register Successfully 
        When User types "Name" in name input field
        And User types "user@gmail.com" in email input field
        And User types "password" in password input field
        And User types "password" in repeat password input field
        And User clicks on Submit button
        Then User should be registered successfully
        And User should be redirected to homepage
