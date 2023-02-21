export class Checkboxes {

    url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    green = '[id="radio-buttons"]>[value="green"]'
    blue = '[id="radio-buttons"]>[value="blue"]'
    orange = 'form [value="orange"]'
    purple = '[id="radio-buttons"]>[value="purple"]'
    yellow = '[id="radio-buttons"]>[value="yellow"]'


    visit() {

        cy.visit(this.url)
    }

    checkGreen() {

        cy.get(this.green)
            .check()
            .should('be.checked')
    }

    checkBlue() {

        cy.get(this.blue)
        .check()
        .should('be.checked')
    }

    checkOrange() {

        cy.get(this.orange)
            .check()
            .should('be.checked')
    }

    checkPurple() {

        cy.get(this.purple)
        .check()
        .should('be.checked')
    }

    checkYellow() {

        cy.get(this.yellow)
        .check()
        .should('be.checked')
    }

    verifyOtherThanGreen() {
        cy.get(this.blue).should('not.be.checked')
        cy.get(this.yellow).should('not.be.checked')
        cy.get(this.orange).should('not.be.checked')
        cy.get(this.purple).should('not.be.checked')
    }

    verifyOtherThanBlue() {
        cy.get(this.green).should('not.be.checked')
        cy.get(this.yellow).should('not.be.checked')
        cy.get(this.purple).should('not.be.checked')
        cy.get(this.orange).should('not.be.checked')
    }

    verifyOtherThanYellow() {
        cy.get(this.green).should('not.be.checked')
        cy.get(this.blue).should('not.be.checked')
        cy.get(this.orange).should('not.be.checked')
        cy.get(this.purple).should('not.be.checked')
    }

    verifyOtherThanOrange() {
        cy.get(this.green).should('not.be.checked')
        cy.get(this.blue).should('not.be.checked')
        cy.get(this.yellow).should('not.be.checked')
        cy.get(this.purple).should('not.be.checked')
    }
    
    verifyOtherThanPurple() {
        cy.get(this.green).should('not.be.checked')
        cy.get(this.blue).should('not.be.checked')
        cy.get(this.yellow).should('not.be.checked')
        cy.get(this.orange).should('not.be.checked')
    }
}

export const CBx = new Checkboxes