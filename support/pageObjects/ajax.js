export class Ajax {

    url = 'https://webdriveruniversity.com/Ajax-Loader/index.html'
    button = '[class="btn btn-default btn-lg dropdown-toggle"]'
    header = '[class="modal-header"]'

    visit() {

        cy.visit(this.url)
    }

    headClick() {        
        cy.wait(1000)
        cy.get(this.button)
            .should('be.visible')
            .click()

        cy.get(this.header).should('contain', 'Well ')
    }
}

export const AJA = new Ajax