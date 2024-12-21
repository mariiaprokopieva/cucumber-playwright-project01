const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const PaginationPage = require('../pages/PaginationPage')
const paginationPage = new PaginationPage()



Given(/^the user is on "([^"]*)"$/, async function(url) {
	await page.goto(url);
});


Then(/^the user should see the "([^"]*)" button is disabled$/, async function(button) {
	await expect(paginationPage.getButtonLocator(button)).toBeDisabled()
});

Then(/^the user should see the "([^"]*)" button is enabled$/, async function(button) {
	await expect(paginationPage.getButtonLocator(button)).toBeEnabled()
});

When(/^the user clicks on the "([^"]*)" button$/, async function(button) {
	await paginationPage.clickButton(button)
});


When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, async function(button) {
	await paginationPage.clickButtonTillDisabled(button)
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, async function(city, dataTable) {
	const infos = dataTable.rawTable.flat()
	const $paginationInfos = await page.locator(paginationPage.locators.infos).all()
	const $image = page.locator(paginationPage.locators.image)

	if (`City: ${city}` !== infos[0]) {
		throw new Error(`Expected city "${city}" but found "${infos[0]}" in the data table.`);
	}

	for (const [index, value] of infos.entries()) {
		await expect($paginationInfos[index]).toHaveText(value)
	}

	await expect($image).toBeVisible();
});

