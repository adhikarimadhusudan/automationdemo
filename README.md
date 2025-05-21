# How to Install

To get started with this project, follow these steps:

1. **Install Node.js and npm**  
   Ensure that you have Node.js and npm installed on your system.  
   You can download and install them from the official website: [https://nodejs.org/](https://nodejs.org/)

2. **Clone the Repository**  
   Clone this project to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. **Install the Project Dependencies**  
   Once inside the project directory, run the following command to install all required dependencies:

   ```bash
   npm install
   ```

4. **Setup Environment Configuration**  
   Copy the `.env.example` file and create your own `.env` file for environment-specific variables:

   ```bash
   cp .env.example .env
   ```

# File and Folder Structure

- **tests/**  
  This folder contains all test-related files.  
  - `tests/UI/`: Contains all UI test cases.  
  - `tests/API/`: Contains all API test cases.

- **helpers/**  
  Includes helper functions that are called by the test files.  
  Refer to the import section at the top of each test file to see which helpers are used.

- **utils/**  
  Contains utility files that support the testing framework.

- **util/constants.js**  
  This file holds all the constant values that are repeatedly used throughout the tests.

# How to Run the Tests

To execute the tests, run the following command:

```bash
npx playwright test
```

Once the tests have finished running, a report will be generated.  
You can view the report using the link that appears in the terminal after test execution is complete.

# Programming Practice

- Helper files are suffixed with `_helpers` (e.g., `login_helpers.js`)
- File names use **snake_case** (e.g., `user_login_test.js`)
- Environment files use **UPPERCASE** (e.g., `.ENV`)
