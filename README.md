# How to Install

To get started with this project, follow these steps:

1. **Install Node.js and npm**  
   Ensure that you have Node.js and npm installed on your system.  
   You can download and install them from the official website: [https://nodejs.org/](https://nodejs.org/)

2. **Clone the Repository**  
   Clone this project to your local machine using Git:

   ```bash
   git clone https://github.com/adhikarimadhusudan/automationdemo.git
   cd automationdemo
   ```

3. **Install the Project Dependencies**  
   Once inside the project directory, run the following command to install all required dependencies:

   ```bash
   npm install
   ```
4. **Install Browsers**  
   Once inside the project directory, run the following command to install all required browsers:

   ```bash
   npx playwright install
     ```
  This step is very important, as without this, the project won't be able to run UI tests. 
  You may encounter an error that browsers are not present while executing tests skipping this step

5. **Setup Environment Configuration**  
   Copy the `.env.example` file and create your own `.env` file for environment-specific variables:

   ```bash
   cp .env.example .env
   ```
   This is where the credentials are supposed to be stored. 
   But due to execution issues, I've added credentials in `util/constants.js` for now so that test runs without hassle.
   If you feel like changing the credentials to log into demoqa.com, you can change from `util/constants.js`.

# How to Run the Tests
   To execute the tests, run the following command:
   
  ```bash
   npx playwright test
   
 ```
# How to See the Test Results

   Once the tests are executed, playwright will share you a link to the report html or else you can hit the following command:
 
    npx playwright show-report
    
# Configuring Tests 

   The tests execution can be configured based on the needs, This is done on the file

   - `playwright.config.js` 

   At present, only chromium browser has been enabled. 
    To run tests on other browsers make change in  `playwright.config.js`. 

   Uncomment the json for the intended browser. For example to enable testing in Firefox uncomment: 

   ```bash 
     {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
     } 
   ```

# File and Folder Structure

- **tests/**  
  This folder contains all test-related files.  
  - `tests/UI/`: Contains all UI test cases.  
  - `tests/API/`: Contains all API test cases.
  tests files have `.spec.js` extensions

- **helpers/**  
  Includes helper functions that are called by the test files.  
  Refer to the import section at the top of each test file to see which helpers are used.
  tests files are  javascript files with`.js` extensions

- **utils/**  
  Contains utility files that support the testing framework.

- **util/constants.js**  
  This file holds all the constant values that are repeatedly used in the tests.

# Programming Practice

- Helper files are suffixed with `_helpers` (e.g., `table_helpers.js`)
- File names use **snake_case** (e.g., `table_crud_spec.js`)
- For variables and functions  in programs use lowerCamelCase (e.g.,`firstName` ).
- For API test fiels use name of the endpoints as the name of the file (e.g., `books.spec.js`).
