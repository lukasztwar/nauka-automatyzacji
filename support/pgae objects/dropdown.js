export class DropdownPage {

    visit() {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    selectFromDropdown(id, value) {

        cy.get(id)
            .select(value)
            .should('contain', value)
    }

}

export const DDP = new DropdownPage