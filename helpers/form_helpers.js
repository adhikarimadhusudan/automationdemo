const { expect } = require('@playwright/test');

async function fillRequiredFieldsExceptEmail(page) {
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.check('label:has-text("Male")');
    await page.fill('#userNumber', '1234567890');
  }
  
  module.exports = {
    fillRequiredFieldsExceptEmail,
  };
  