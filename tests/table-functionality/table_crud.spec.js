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