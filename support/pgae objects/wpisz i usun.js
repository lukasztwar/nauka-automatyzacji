export class ContactUsPage{


    visit(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    }

    firstNameInput(text) {
        cy.get('[placeholder="First Name"]')
        .type(text)
        .should('have.value', text)
    }

    lastNameInput(text) {
        cy.get('[placeholder="Last Name"]')
        .type(text)
        .should('have.value', text)
    }

    emailAddressInput(text) {
        cy.get('[placeholder="Email Address"]')
        .type(text)
        .should('have.value', text)
    }

    commentsInput(text) {
        cy.get('[placeholder="Comments"]')
        .type(text)
        .should('have.value', text)
    }

    EmptyFields() {
        cy.get('[placeholder="First Name"]').should('have.value', '')
        cy.get('[placeholder="Last Name"]').should('have.value', '')
        cy.get('[placeholder="Email Address"]').should('have.value', '')
        cy.get('[placeholder="Comments"]').should('have.value', '')
    }

}
export const CUP = new ContactUsPage