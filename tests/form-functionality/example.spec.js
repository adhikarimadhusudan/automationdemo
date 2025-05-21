// // @ts-check
// import { test, expect, } from '@playwright/test';

// const testCases = [
//   { name: 'First Name', selector: '#firstName', error: 'First name is required' },
//   { name: 'Last Name', selector: '#lastName', error: 'Last name is required' },
//   { name: 'Email', selector: '#email', error: 'Email is required' }
// ];

// test.describe('Form validation - Required Fields', () => {
//   testCases.forEach(({ name, selector, error }) => {
//     test(`should show validation error when ${name} is empty`, async ({ page }) => {
//       await page.goto('https://example.com/form'); // Replace with your form URL

//       // Fill all fields first
//       await page.fill('#firstName', 'John');
//       await page.fill('#lastName', 'Doe');
//       await page.fill('#email', 'john@example.com');

//       // Clear the current field
//       await page.fill(selector, '');

//       // Submit the form
//       await page.click('#submitButton');

//       // Assert the correct error message is shown
//       await expect(page.locator(`text=${error}`)).toBeVisible();
//     });
//   });
// });



