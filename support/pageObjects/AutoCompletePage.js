export class AutoCompletePage{

    url = 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'
    input = '[id="myInput"]'
    myInputautocomplete = '[id="myInputautocomplete-list"]'

    visit(){
        cy.visit(this.url)
    }

    typeInput(text){

        cy.get(this.input)
            .type(text)
    }

    selectFromList(item){

        cy.get(this.myInputautocomplete)        
            .should('contain', item)
            .contains(item)
            .click()
    }
}

export const ACP = new AutoCompletePage