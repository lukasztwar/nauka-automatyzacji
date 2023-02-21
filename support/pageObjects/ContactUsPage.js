export class ContactUsPage{

    url = 'https://webdriveruniversity.com/Contact-Us/contactus.html'
    FirstName = '[placeholder="First Name"]'
    LastName = '[placeholder="Last Name"]'
    Email = '[placeholder="Email Address"]'
    Comments = '[placeholder="Comments"]'
    reset = '[value="RESET"]'
    ssubmit = '[value="SUBMIT"'
    RReply = '[id="contact_reply"]'
    
    visit(){

        cy.visit(this.url)
    }

    firstNameInput(text) {

        cy.get(this.FirstName)        
            .type(text)
            .should('have.value', text)
    }

    lastNameInput(text) {

        cy.get(this.LastName)
            .type(text)
            .should('have.value', text)
    }

    emailAddressInput(text) {

        cy.get(this.Email)
            .type(text)
            .should('have.value', text)
    }

    commentsInput(text) {

        cy.get(this.Comments)
            .type(text)
            .should('have.value', text)
    }

    EmptyFields() {

        cy.get(this.FirstName).should('have.value', '')
        cy.get(this.LastName).should('have.value', '')
        cy.get(this.Email).should('have.value', '')
        cy.get(this.Comments).should('have.value', '')
    }

    Resset() {

        cy.get(this.reset).click()  
    }

    Submit() {

        cy.get(this.ssubmit).click()
    }

    BodyCheck() {

        cy.get('body').should('contain','Error:')
    }

    Reply() {

        cy.get(this.RReply).should('contain','Thank You for your Message!')
    }

}
export const CUP = new ContactUsPage