// // // @ts-check
// // import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Playwright/);
// // });

// // test('get started link', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// //   await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// // });
// import { test, expect, } from '@playwright/test';

// test('Creation of new record in the table', async ({ page }) => {
//   await page.goto('https://demoqa.com/webtables');

//  //Click on the add button 
//   await page.click('#addNewRecordButton');

//   //Fillup the details on the modal which appears after clicking on the add button
//   await page.fill('#firstName', 'testFirstName');
//   await page.fill('#lastName', 'testLastName');
//   await page.fill('#userEmail', 'testEmail@example.com');
//   await page.fill('#age', '28');
//   await page.fill('#salary', '50000');
//   await page.fill('#department', 'testDepartment');
//   //Click on the submit button
//   await page.click('#submit');
//   // Expect the First name to be displayed on the table
//   await page.isVisible('div.rt-td:has-text("testfirstname")');
    
// });