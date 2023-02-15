export class AutoCompletePage{

    visit(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
    }

    typeInput(text){
    cy.get('[id="myInput"]')
        .type(text)

    }

    selectFromList(item){
    cy.get('[id="myInputautocomplete-list"]')
        .should('contain', item)
        .contains(item)
        .click()
    }
}

export const ACP = new AutoCompletePage