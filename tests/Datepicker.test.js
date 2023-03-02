const { test, expect } = require('@playwright/test');
const { DTP } = require('./datepicker')

test('datepicker check', async ({page}) => {

    const datepicker = DTP(page)

    await datepicker.visit()

    const date = {
        day: '22',
        month: 'Dec',
        year: '2028',
        
    }

    await datepicker.selectDate(date)

    await datepicker.check()

})