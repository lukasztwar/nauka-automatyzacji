export class Datepicker{

    url = 'https://webdriveruniversity.com/Datepicker/index.html'
    input = 'input'
    switch = '[class="datepicker-switch"]'
    months = '[class="datepicker-months"]'
    years = '[class="datepicker-years"]'
    days = '[class="datepicker-days"]'


    visit(){
        cy.visit(this.url)
    }

    selectDate(date) {
        cy.get(this.input).click()
        cy.get(this.switch).eq(0).click()
        cy.get(this.months).contains(date.month).click()
        cy.get(this.years).contains(date.year).click()
        cy.get(this.months).contains(date.monthName).click()
        cy.get(this.days).contains(date.day).click()
    }

    check(){

        cy.get(this.input)
        .invoke('prop', 'value')
        .should('contain', '12-22-2028')
    }
}

export const DPI = new Datepicker