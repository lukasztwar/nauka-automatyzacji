export class Datepicker{

    visit(){
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    }

    selectDate(date) {
        cy.get('input').click()
        cy.get('[class="datepicker-switch"]').eq(0).click()
        cy.get('[class="datepicker-months"]').contains(date.month).click()
        cy.get('[class="datepicker-years"]').contains(date.year).click()
        cy.get('[class="datepicker-months"]').contains(date.monthName).click()
        cy.get('[class="datepicker-days"]').contains(date.day).click()
    }

    powinien() { should('contain', '12-22-2028')}

}

export const DPI = new Datepicker