describe('complete', () =>{

    
    it('uzupełniacz', () =>{

        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')

        cy.get('[id="myInput"]')
        .type('chi')

        cy.get('[id="myInputautocomplete-list"]').should('contain','Chips')
        .contains('Chips').click()

    })

    it('wejdz, wpisz, reset, check if empty', () =>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[placeholder="First Name"]')
        .type('Ludek').should('have.value', 'Ludek')

        cy.get('[placeholder="Last Name"')
        .type('Ludkowski').should('have.value', 'Ludkowski')

        cy.get('[placeholder="Email Address"')
        .type('Ludek@gmail.com').should('have.value', 'Ludek@gmail.com')

        cy.get('[placeholder="Comments"')
        .type('krootki komentarz').should('have.value', 'krootki komentarz')

        cy.get('[value="RESET"')
        .click()

        cy.get('[placeholder="First Name"]')
        .should('have.value', '')
        cy.get('[placeholder="Last Name"')
        .should('have.value', '')
        cy.get('[placeholder="Email Address"')
        .should('have.value', '')
        cy.get('[placeholder="Comments"')
        .should('have.value', '')

    })
 

    it('część danych', () =>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[placeholder="First Name"]')
        .type('Ludek')
        .should('have.value', 'Ludek')

        cy.get('[value="SUBMIT"')
        .click()
        
        cy.get('body')
        .should('contain','Error: all fields are required')

    })

    it('błędny email', () =>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[placeholder="First Name"]')
        .type('Ludek')

        cy.get('[placeholder="Last Name"')
        .type('Ludkowski')

        cy.get('[placeholder="Email Address"')
        .type('Ludek@gmail')

        cy.get('[placeholder="Comments"')
        .type('krootki komentarz')

        cy.get('[value="SUBMIT"')
        .click()

        cy.get('body')
        .should('contain','Error: Invalid email address')
        
    })

    it('wszystkie dane', () =>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[placeholder="First Name"]')
        .type('Ludek')

        cy.get('[placeholder="Last Name"')
        .type('Ludkowski')

        cy.get('[placeholder="Email Address"')
        .type('Ludek@gmail.com')

        cy.get('[placeholder="Comments"')
        .type('krootki komentarz')

        cy.get('[value="SUBMIT"')
        .click()

        cy.get('[id="contact_reply"]')
        .should('contain','Thank You for your Message!')

    })

    
    it('dropdown', () =>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('[id="dropdowm-menu-1"]')
        .select('JAVA').should('contain', 'JAVA')
        cy.get('[id="dropdowm-menu-1"]')
        .select('C#').should('contain', 'C#')
        cy.get('[id="dropdowm-menu-1"]')
        .select('Python').should('contain', 'Python')
        cy.get('[id="dropdowm-menu-1"]')
        .select('SQL').should('contain', 'SQL')

        cy.get('[id="dropdowm-menu-2"]')
        .select('Eclipse').should('contain', 'Eclipse')
        cy.get('[id="dropdowm-menu-2"]')
        .select('Maven').should('contain', 'Maven')
        cy.get('[id="dropdowm-menu-2"]')
        .select('TestNG').should('contain', 'TestNG')
        cy.get('[id="dropdowm-menu-2"]')
        .select('JUnit').should('contain', 'JUnit')

        cy.get('[id="dropdowm-menu-3"]')
        .select('HTML').should('contain', 'HTML')
        cy.get('[id="dropdowm-menu-3"]')
        .select('CSS').should('contain', 'CSS')
        cy.get('[id="dropdowm-menu-3"]')
        .select('JavaScript').should('contain', 'JavaScript')
        cy.get('[id="dropdowm-menu-3"]')
        .select('JQuery').should('contain', 'JQuery')
    })

    it('checkboxy', () =>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('[value="option-1"]')
        .check()
        .should('be.checked')
        cy.get('[value="option-2"]')
        .check()
        .should('be.checked')
        cy.get('[value="option-3"]')
        .check()
        .should('be.checked')
        cy.get('[value="option-4"]')
        .check()
        .should('be.checked')

        cy.get('[value="option-2"]')
        .uncheck()
        .should('not.be.checked')
        cy.get('[value="option-4"]')
        .uncheck()
        .should('not.be.checked')

    })

    it('checkboxy 2', () =>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('[value="green"]')
        .check()
        .should('be.checked')
        cy.get('[value="blue"]')
        .should('not.be.checked')
        cy.get('[value="yellow"]')
        .should('not.be.checked')
        cy.get('form [value="orange"]')
        .should('not.be.checked')
        cy.get('[value="purple"]')
        .should('not.be.checked')

        cy.get('[value="blue"]')
        .check()
        .should('be.checked')
        cy.get('[value="green"]')
        .should('not.be.checked')
        cy.get('[value="yellow"]')
        .should('not.be.checked')
        cy.get('form [value="orange"]')
        .should('not.be.checked')
        cy.get('[value="purple"]')
        .should('not.be.checked')
      
        cy.get('form [value="orange"]')
        .check()
        .should('be.checked')
        cy.get('[value="green"]')
        .should('not.be.checked')
        cy.get('[value="blue"]')
        .should('not.be.checked')
        cy.get('[value="purple"]')
        .should('not.be.checked')
        cy.get('[value="yellow"]')
        .should('not.be.checked')

        cy.get('[value="purple"]')
        .check()
        .should('be.checked')
        cy.get('[value="green"]')
        .should('not.be.checked')
        cy.get('[value="blue"]')
        .should('not.be.checked')
        cy.get('form [value="orange"]')
        .should('not.be.checked')
        cy.get('[value="yellow"]')
        .should('not.be.checked')
    })


    it('datepicker', () =>{

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

        cy.get('input').click()
        cy.get('[class="datepicker-switch"]').eq(0).click()
        cy.get('[class="datepicker-months"]').contains('2023').click()
        cy.get('[class="datepicker-years"]').contains('2028').click()
        cy.get('[class="datepicker-months"]').contains('Dec').click()
        cy.get('[class="datepicker-days"]').contains('22').click()

        cy.get('input').invoke('prop', 'value').should('contain', '12-22-2028')
    })

    it('loader', () =>{
        
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')

        cy.wait(5000)
        cy.get('[class="container"]').contains('CLICK ME!').click()
        cy.get('[class="modal-header"]').should('contain', 'Well ')
    })

})