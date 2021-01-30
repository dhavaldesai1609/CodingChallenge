To run project using Cypress:
1) Open CMD
2) Go to folder location where the Cypress project is located
3) Install Cypress: npm install cypress (Skip if already installed)
4) Open Cypress using command: npx cypress open
5) Click on file amazonSample.js to run the cypress code in browser

Alternate way of running the code:
1) Open CMD
2) Go to folder location where the Cypress project is located
3) Run command: npm run test:cli -> This will run all the tests in the specified folder in Browserless mode
4) After test suite is completed, run command: npm run create:html:report to generate HTML report

The HTML report will be located in root/TestReport folder.

Reporters Used: mochaawesome
Dependencies: None
