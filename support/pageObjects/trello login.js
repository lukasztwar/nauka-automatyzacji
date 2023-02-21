export class logIn{

    
    login() {

        cy.visit('https://trello.com/u/ukasztwarowski2/boards')

        cy.get('[class="js-login"]').click()

        cy.get('[placeholder="Enter email"]').type('lukasztwarowski82@wp.pl')
        cy.get('[value="Continue"]').click()

        cy.wait(3000)

        cy.origin('https://id.atlassian.com', () => {

            cy.get('[aria-labelledby="password-uid2-label password-uid2-helper password-uid2-valid password-uid2-error"]').type('Warszawa11!')
            cy.get('[id="login-submit"]').click()
        })

    }
}

export const LOG = new logIn