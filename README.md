"# WECAMP_QE_FinalProj"

Test Plan: https://docs.google.com/document/d/1SJJiuS39z0og_AMtnheFLDlcgrkFymX2eYWUdt1wrfQ/edit
Test Cases: https://docs.google.com/spreadsheets/d/1jp0f-TZcZMtmeNl9m0Folif63TQhuWK19H-tyHa4RZo/edit
Bug Report: https://docs.google.com/spreadsheets/d/1f0OVkbIaTO0OpH1vYYyfPWi5xKb_ChXOg5NP5UbZpKM/edit?usp=drive_web&ouid=110510485291910340162

-   [ ] Bonus: Unit Test achieves 40-50% coverage score (with Jest, JUnit, Chai, Mocha, etc.)
-   [x] Manual API testing (**Postman**, curl, etc.)
-   [x] API integration test scripts (with **Postman collection**).
-   [x] Bonus: Write API integration test scripts in supertest, axios, jest, **mocha, chai** (Bonus in bonus: If using POM)

-   [x] Verify status codes, response body and response errors. Set/Get variable for further request.

-   [x] Bonus: If using **database query functions for API** javascript test scripts
-   [ ] Manual UI testing (visuals, functionality, user interaction, etc.)
-   [x] UI E2E automation test scripts (with **Cypress**, Selenium WebDriver, TestCafe, etc.).
-   [x] Bonus: If using BDD approach (Cucumber).
-   [x] Bonus: If using POM (Page Object Model), or App Action in Cypress.

Lecture:

-   Folder Struct:
-   Page Object Model:
-   Cucumber:

**Framework sử dụng:**

-   Unit test:

-   API test
    Unit: Postman
    Integration:
    Postman (Collection)
    _Bonus:_

-   UI E2E automation test scripts: Cypress + Cucumber

Các bước chạy:

-   Vào thư mục dev:
    chạy server = lệnh npm start
    chạy client = lệnh npm start
-   Vào thư mục test:
    nếu chạy script viết = cypress + cucumber: vào thư mục cypress-cucumber-testing, chạy = lệnh npx cypress open
    nếu chạy script viết = cypress : vào thư mục cypress-testing, chạy = lệnh npx cypress open
