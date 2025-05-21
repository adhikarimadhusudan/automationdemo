import { test, expect } from '@playwright/test';
const { BASE_URL, ENDPOINTS, CREDENTIALS } = require('../../../utils/constants');
const {fillRequiredFieldsExceptEmail } = require('../../../helpers/form_helpers');


test.describe('Form Validation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}${ENDPOINTS.practiceForm}`); 
  });

test('Should verify all required fields have the required attribute', async ({ page }) => {
    await page.click('#submit'); 
    
    // Check 'First Name' field
    const firstName = page.locator('#firstName');
    await expect(firstName).toHaveAttribute('required', '');

    // Check 'Last Name' field
    const lastName = page.locator('#lastName');
    await expect(lastName).toHaveAttribute('required', '');

    // Check 'Gender' radio buttons (at least one should have required)
    const genderMale = page.locator('#gender-radio-1');
    await expect(genderMale).toHaveAttribute('required', '');

    const genderFemale = page.locator('#gender-radio-2');
    await expect(genderFemale).toHaveAttribute('required', '');

    const genderOther = page.locator('#gender-radio-3');
    await expect(genderOther).toHaveAttribute('required', '');

    // Check 'Mobile Number' input
    const userNumber = page.locator('#userNumber');
    await expect(userNumber).toHaveAttribute('required', '');

    // Check for fields that are not required in the form 

    const email = page.locator('#userEmail');
    await expect(email).not.toHaveAttribute('required', '');

    const dateOfBirth = page.locator('#dateOfBirthInput');
    await expect(dateOfBirth).not.toHaveAttribute('required', '');

    const currentAddress = page.locator('#currentAddress');
    await expect(currentAddress).not.toHaveAttribute('required', '');

    const fileUpload = page.locator('#uploadPicture');
    await expect(fileUpload).not.toHaveAttribute('required', '');

    const stateSelect = page.locator('#react-select-3-input');
    await expect(stateSelect).not.toHaveAttribute('required', '');

    const citySelect = page.locator('#react-select-4-input');
    await expect(citySelect).not.toHaveAttribute('required', '');

    const subjects = page.locator('#subjectsInput');
    await expect(subjects).not.toHaveAttribute('required', '');
  });
});

test.describe('Mobile Number Field Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}${ENDPOINTS.practiceForm}`);
  });

  // Test for 9 digits
  test('should reject less than 10 digits', async ({ page }) => {
    const userNumber = page.locator('#userNumber');
    await userNumber.fill('123456789');
    await page.click('#submit');

    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeFalsy();
  });

  // Test for 11 digits
  test('should reject more than 10 digits', async ({ page }) => {
    const userNumber = page.locator('#userNumber');
    await userNumber.fill('12345678901');
    await page.click('#submit');

    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeFalsy();
  });

  // Test for letters instead of numbers
  test('should reject non-numeric input', async ({ page }) => {
    const userNumber = page.locator('#userNumber');
    await userNumber.fill('abcdefghij');
    await page.click('#submit');

    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeFalsy();
  });

  // Test for valid 10-digit number
  test('should accept exactly 10 numeric digits', async ({ page }) => {
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.click('label:has-text("Male")');
    await page.fill('#userNumber', '1234567890');
    await page.click('#submit');
    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeTruthy();
  });
  
});

test.describe('Email Field Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}${ENDPOINTS.practiceForm}`);
  });

  test('should reject invalid email format (missing @)', async ({ page }) => {
    await fillRequiredFieldsExceptEmail(page);
    await page.fill('#userEmail', 'invalidemail.com');
    await page.click('#submit');
    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeFalsy();
  });

  test('should reject invalid email format (missing domain)', async ({ page }) => {
    await fillRequiredFieldsExceptEmail(page);
    await page.fill('#userEmail', 'user@');
    await page.click('#submit');
    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeFalsy();
  });

  test('should accept valid email address', async ({ page }) => {
    await fillRequiredFieldsExceptEmail(page);
    await page.fill('#userEmail', 'user@example.com');
    await page.click('#submit');
    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeTruthy();
  });

  test('should allow form submission without email since it is not required', async ({ page }) => {
    await fillRequiredFieldsExceptEmail(page);
    await page.fill('#userEmail', ''); // Leave email empty
    await page.click('#submit');
    const isValid = await page.$eval('#userForm', form => form.checkValidity());
    expect(isValid).toBeTruthy();
  });
});


