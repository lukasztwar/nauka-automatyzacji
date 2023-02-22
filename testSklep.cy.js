import { SCP } from "../support/pageObjects/testSklepu"

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
    
    SCP.checkoutCheck()

    })
})       
