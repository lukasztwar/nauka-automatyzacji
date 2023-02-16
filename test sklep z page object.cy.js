import { SCP } from "../support/pgae objects/t2"

describe('sklep test', () =>{

    it('zakupy', () =>{

    SCP.visit()
    
    SCP.goToTShirtsCategory();
    SCP.selectTShirt();
    SCP.addToCart();

    SCP.goToShoesCategory();
    SCP.selectShoeSize();
    SCP.addToCart();

    SCP.searchForProduct('shock');
    SCP.selectSearchResult();
    SCP.addToCart();

    SCP.checkCartContents();
    SCP.checkCartTotal();

    SCP.goToCheckout();
    SCP.checkoutAsGuest();

    SCP.enterBillingDetails();
    
    cy.get('[title="Continue"]').click()
    cy.get('[id="checkout_btn"]').click()

    cy.get('[class="maintext"]').should('contain', 'Your Order Has Been Processed!')

    })
})       
