const { test, expect } = require('@playwright/test');

class datepicker {

    url = 'https://webdriveruniversity.com/Datepicker/index.html'
    input = 'input'
    switch = '[class="datepicker-switch"]'
    months = '[class="datepicker-months"]'
    years = '[class="datepicker-years"]'
    days = '[class="datepicker-days"]'
    
    
    constructor(page) {
      this.page = page
    }

    async visit() {
      await this.page.goto(this.url)
    }

    async selectDate(date) {
      await this.page.click(this.input);
      await this.page.click(this.switch);
      await this.page.click(`${this.months} >> text=2023`)
      await this.page.click(`${this.years} >> text=${date.year}`)
      await this.page.click(`${this.months} >> text=${date.month}`)
      await this.page.click(`${this.days} >> text=${date.day}`)

    }

    async check() {
        const value = await this.page.$eval(this.input, (input) => input.value);
        expect(value).toContain('12-22-2028');
    }
    


}

const DTP = (page) => new datepicker(page)

module.exports = { DTP }