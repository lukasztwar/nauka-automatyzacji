import { CBx } from "../support/pgae objects/checkbox"
import { DPI } from "../support/pgae objects/datepicker"
import { DDP } from "../support/pgae objects/dropdown"
import {ACP, AutoCompletePage} from "../support/pgae objects/uzupełniacz"
import { CUP } from "../support/pgae objects/wpisz i usun"


describe('cały test', () =>{
    it('uzupełnij 3 znaki', () => {
        ACP.visit()
        ACP.typeInput('chi')
        ACP.selectFromList('Chips')
    })

    it('wpisz i usuń contact form', () =>{

        CUP.visit()
        
        CUP.firstNameInput('Ludek')
        CUP.lastNameInput('Ludkowski')
        CUP.emailAddressInput('Ludek@gmail.com')
        CUP.commentsInput('krootki komentarz')
          
        cy.get('[value="RESET"').click()
          
        CUP.EmptyFields()
          
    })

    it('wprowadznie części danych', () => {

        CUP.visit()
        CUP.firstNameInput('Bolek')

        cy.get('[value="SUBMIT"').click()
        cy.get('body').should('contain','Error: all fields are required')

    })

    it('błędny email', () => {

        CUP.visit()
        CUP.emailAddressInput('bolek@gmail')

        CUP.firstNameInput('Bolek')
        CUP.lastNameInput('Ludkowski')
        CUP.commentsInput('krootki komentarz')

        cy.get('[value="SUBMIT"').click()
        cy.get('body').should('contain','Error: Invalid email address')

    })

    it('wszystkie dane w contact form poprawne', () =>{

        CUP.visit()
        
        CUP.firstNameInput('Ludek')
        CUP.lastNameInput('Ludkowski')
        CUP.emailAddressInput('Ludek@gmail.com')
        CUP.commentsInput('krootki komentarz')

        cy.get('[value="SUBMIT"').click()
        cy.get('[id="contact_reply"]').should('contain','Thank You for your Message!')

    })
    
    it('dropdown', () =>{

        DDP.visit()

        DDP.selectFromDropdown('[id="dropdowm-menu-1"]', 'JAVA')
        DDP.selectFromDropdown('[id="dropdowm-menu-1"]', 'C#')
        DDP.selectFromDropdown('[id="dropdowm-menu-1"]', 'Python')
        DDP.selectFromDropdown('[id="dropdowm-menu-1"]', 'SQL')

        DDP.selectFromDropdown('[id="dropdowm-menu-2"]', 'Eclipse')
        DDP.selectFromDropdown('[id="dropdowm-menu-2"]', 'Maven')
        DDP.selectFromDropdown('[id="dropdowm-menu-2"]', 'TestNG')
        DDP.selectFromDropdown('[id="dropdowm-menu-2"]', 'JUnit')

        DDP.selectFromDropdown('[id="dropdowm-menu-3"]', 'HTML')
        DDP.selectFromDropdown('[id="dropdowm-menu-3"]', 'CSS')
        DDP.selectFromDropdown('[id="dropdowm-menu-3"]', 'JavaScript')
        DDP.selectFromDropdown('[id="dropdowm-menu-3"]', 'JQuery')

    })

    it('checkboxy', () =>{

        CBx.visit()

        CBx.checkGreen()
        CBx.verifyOtherThanGreen()

        CBx.checkBlue()
        CBx.verifyOtherThanBlue()

        CBx.checkYellow()
        CBx.verifyOtherThanYellow()

        CBx.checkOrange()
        CBx.verifyOtherThanOrange()

        CBx.checkPurple()
        CBx.verifyOtherThanPurple()  
        
    })

    it('wybór daty', () => {

        DPI.visit()

        const date = {
            day: '22',
            month: '2023',
            year: '2028',
            monthName: 'Dec'
        }

        DPI.selectDate(date)

        cy.get('input').invoke('prop', 'value').should('contain', '12-22-2028')

    })

    it.only('loader', () =>{
        
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')
        cy.wait(1000)
        
        cy.get('[class="btn btn-default btn-lg dropdown-toggle"]')
            .should('be.visible')
            .click()
        cy.get('[class="modal-header"]').should('contain', 'Well ')
        
    })
        
})