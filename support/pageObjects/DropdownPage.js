export class DropdownPage {

    url = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'

    visit() {
        cy.visit(this.url)
    }

    selectFromDropdown(id, value) {

        cy.get(id)
            .select(value)
            .should('contain', value)
    }

}

export const DDP = new DropdownPage