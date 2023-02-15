export class Checkboxes {

    visit() {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    checkGreen() {
        cy.get('[value="green"]').check().should('be.checked')
    }

    checkBlue() {
        cy.get('[value="blue"]').check().should('be.checked')
    }

    checkOrange() {
        cy.get('form [value="orange"]').check().should('be.checked')
    }

    checkPurple() {
        cy.get('[value="purple"]').check().should('be.checked')
    }

    checkYellow() {
        cy.get('[value="yellow"]').check().should('be.checked')
    }

    verifyOtherThanGreen() {
        cy.get('[value="blue"]').should('not.be.checked')
        cy.get('[value="yellow"]').should('not.be.checked')
        cy.get('form [value="orange"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    }

    verifyOtherThanBlue() {
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="yellow"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        cy.get('form [value="orange"]').should('not.be.checked')
    }

    verifyOtherThanYellow() {
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
        cy.get('form [value="orange"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    }

    verifyOtherThanOrange() {
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
        cy.get('[value="yellow"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    }
    
    verifyOtherThanPurple() {
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
        cy.get('[value="yellow"]').should('not.be.checked')
        cy.get('form [value="orange"]').should('not.be.checked')
    }
}

export const CBx = new Checkboxes