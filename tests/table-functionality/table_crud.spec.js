import { test, expect, } from '@playwright/test';

test('Creation of new record in the table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

 //Click on the add button 
  await page.click('#addNewRecordButton');

  //Fillup the details on the modal which appears after clicking on the add button
  await page.fill('#firstName', 'testFirstName');
  await page.fill('#lastName', 'testLastName');
  await page.fill('#userEmail', 'testEmail@example.com');
  await page.fill('#age', '28');
  await page.fill('#salary', '50000');
  await page.fill('#department', 'testDepartment');
  //Click on the submit button
  await page.click('#submit');
  // Expect the First name to be displayed on the table

await expect(page.locator('div.rt-td:has-text("testFirstName")')).toBeVisible();
await expect(page.locator('div.rt-td:has-text("testLastName")')).toBeVisible();
await expect(page.locator('div.rt-td:has-text("testEmail@example.com")')).toBeVisible();
await expect(page.locator('div.rt-td:has-text("50000")')).toBeVisible();
await expect(page.locator('div.rt-td:has-text("testDepartment")')).toBeVisible();
});

test('Deletion of a record in the table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  //Click the delete SVG within the row which has Kierra as FirstName
await page.locator('.rt-tr-group', { hasText: 'Alden' })
          .locator('[title="Delete"] svg')
          .click();
  //Test code to check if the element id deleted and this fails
//  await expect(page.locator('div.rt-td:has-text("Kierra")')).toBeVisible();
 await expect(page.locator('div.rt-td:has-text("Alden")')).not.toBeVisible();
});

test('Deletion of a record in the table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  //Click the delete SVG within the row which has Kierra as FirstName
await page.locator('.rt-tr-group', { hasText: 'Alden' })
          .locator('[title="Delete"] svg')
          .click();
  //Test code to check if the element id deleted and this fails
//  await expect(page.locator('div.rt-td:has-text("Kierra")')).toBeVisible();
 await expect(page.locator('div.rt-td:has-text("Alden")')).not.toBeVisible();
});