import { CBx } from "../support/pageObjects/Checkboxes"
import { DPI } from "../support/pageObjects/datepicker"
import { DDP } from "../support/pageObjects/DropdownPage"
import {ACP, AutoCompletePage} from "../support/pageObjects/AutoCompletePage"
import { CUP } from "../support/pageObjects/ContactUsPage"
import { AJA } from "../support/pageObjects/ajax"


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

        CUP.Resset()
          
        CUP.EmptyFields()
          
    })

    it('wprowadznie części danych', () => {

        CUP.visit()
        CUP.firstNameInput('Bolek')

        CUP.Submit()
        CUP.BodyCheck()

    })

    it('błędny email', () => {

        CUP.visit()
        CUP.emailAddressInput('bolek@gmail')

        CUP.firstNameInput('Bolek')
        CUP.lastNameInput('Ludkowski')
        CUP.commentsInput('krootki komentarz')

        CUP.Submit()
        CUP.BodyCheck()

    })

    it('wszystkie dane w contact form poprawne', () =>{

        CUP.visit()
        
        CUP.firstNameInput('Ludek')
        CUP.lastNameInput('Ludkowski')
        CUP.emailAddressInput('Ludek@gmail.com')
        CUP.commentsInput('krootki komentarz')

        CUP.Submit()
        CUP.Reply()

    })
    
    it('dropdown', () =>{

        DDP.visit()

        const m1 = '[id="dropdowm-menu-1"]'
        const m2 = '[id="dropdowm-menu-2"]'
        const m3 = '[id="dropdowm-menu-3"]'
        
        DDP.selectFromDropdown(m1, 'JAVA')
        DDP.selectFromDropdown(m1, 'C#')
        DDP.selectFromDropdown(m1, 'Python')
        DDP.selectFromDropdown(m1, 'SQL')

        DDP.selectFromDropdown(m2, 'Eclipse')
        DDP.selectFromDropdown(m2, 'Maven')
        DDP.selectFromDropdown(m2, 'TestNG')
        DDP.selectFromDropdown(m2, 'JUnit')

        DDP.selectFromDropdown(m3, 'HTML')
        DDP.selectFromDropdown(m3, 'CSS')
        DDP.selectFromDropdown(m3, 'JavaScript')
        DDP.selectFromDropdown(m3, 'JQuery')

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

        DPI.check()

    })

    it('loader', () =>{
        
        AJA.visit()
        AJA.headClick()
        
    })
        
})
