import { test, expect, } from '@playwright/test';
//Calling the helper functions for CRUD operations in the form
const { createNewRecord, deleteRecord, editAndVerify, viewRecord } = require('../../../helpers/table_helpers');

//Here Begins the tests for the CRUD operations for the table

test('Creation of new record in the table and verify it', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  const testData = {
    fields: {
      '#firstName': 'testFirstName',
      '#lastName': 'testLastName',
      '#userEmail': 'testEmail@example.com',
      '#age': '28',
      '#salary': '50000',
      '#department': 'testDepartment',
    },
    expectedTexts: [
      'testFirstName',
      'testLastName',
      'testEmail@example.com',
      '50000',
      'testDepartment',
    ]
  };

  await createNewRecord(page, testData);
});

test('View a record in the table and verify its values', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // Assuming "Alden" is a unique row identifier
  const expectedValues = [
    'Alden',
    'Cantrell',
    'alden@example.com',
    '45',
    '12000',
    'Compliance'
  ];

  await viewRecord(page, 'Alden', expectedValues);
});

test('Deleting a record in the table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // Use the helper to delete the row with "Alden"
  await deleteRecord(page, 'Alden');
});

test('Editing of a record in the table', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  //utilize the editAndVerify helper function to edit and verify values in a particular cell
  //it takes in existing values, the locator for the cell to be edited, the new value to be put in place, and the value used to verify which is basically the newly added value itself
  await editAndVerify(page, 'Alden', '#firstName', 'Alex', 'Alex');  // edit and verify by changing Alden to Alex in firstname cell
  await editAndVerify(page, 'Alex', '#lastName', 'Smith', 'Smith');  //edit and verify by changing the lastname field of Alex 
  await editAndVerify(page, 'Alex', '#userEmail', 'alex.smith@example.com', 'alex.smith@example.com'); //edit and verify the email changes

  await editAndVerify(page, 'Cierra', '#firstName', 'Fierra', 'Fierra'); //edit name of Cierra and verify the changes. 
}); 

