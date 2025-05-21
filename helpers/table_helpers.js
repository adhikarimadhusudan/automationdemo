const { expect } = require('@playwright/test');

async function createNewRecord(page, data) {
  await page.click('#addNewRecordButton');

  for (const [selector, value] of Object.entries(data.fields)) {
    await page.fill(selector, value);
  }

  await page.click('#submit');

  for (const expectedText of data.expectedTexts) {
    await expect(page.locator(`div.rt-td:has-text("${expectedText}")`)).toBeVisible();
  }
}

async function deleteRecord(page, rowIdentifier) {
  const row = page.locator('.rt-tr-group', { hasText: rowIdentifier });
  await row.locator('[title="Delete"] svg').click();

  await expect(page.locator(`div.rt-td:has-text("${rowIdentifier}")`)).not.toBeVisible();
}

async function editAndVerify(page, rowIdentifier, fieldSelector, newValue, expectedValue) {
  const row = page.locator('.rt-tr-group', { hasText: rowIdentifier });
  await row.locator('[title="Edit"] svg').click();

  const field = page.locator(fieldSelector);
  await expect(field).toBeVisible();
  await field.fill(newValue);

  await page.click('#submit');

  const updatedRow = page.locator('.rt-tr-group', { hasText: expectedValue });
  await expect(updatedRow).toBeVisible();
}

async function viewRecord(page, rowIdentifier, expectedValues) {
  const row = page.locator('.rt-tr-group', { hasText: rowIdentifier });

  for (const value of expectedValues) {
    const cell = row.locator(`div.rt-td:has-text("${value}")`).first();
    await expect(cell).toBeVisible();
  }
}

// ✅ Export all helpers from one module
module.exports = {
  createNewRecord,
  deleteRecord,
  editAndVerify,
  viewRecord,
};
