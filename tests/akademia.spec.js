const { test, expect } = require('@playwright/test');
const { ACP } = require('./AutoComplete')



test('Autocompltete', async ({page}) => {
    const AutoCompletePage = ACP(page)
    await AutoCompletePage.visit()
    await AutoCompletePage.typeInput('chi')
    await AutoCompletePage.selectFromList('Chips')

    const value = await page.$eval('#myInput', (input) => input.value)
    expect(value).toBe('Chips')
})



