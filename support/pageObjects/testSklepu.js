export class ShoppingCartPage {

    url = 'https://automationteststore.com/'
    Tshirts = 'T-shirts'
    TshirtName = 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie'
    Cart = '[class="cart"]'
    Shoes = 'Shoes'
    CartIcon = '[class="fa fa-cart-plus fa-fw"]'
    size = '[id="option344747"]'
    search = '[placeholder="Search Keywords"]'
    Go = '[title="Go"]'
    itemToSearch = 'ck one shock for him Deodorant'
    manualShoe = 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals'
    openCart = '[class="table table-striped table-bordered"]'
    totalAmount = '[class="bold totalamout"]'
    Amount = '$74.00'
    checkout = '[title="Checkout"]'
    checkOut = '[id="checkout_btn"]'
    guest = '[id="accountFrm_accountguest"]'
    continue = '[title="Continue"]'
    firstname = '[name="firstname"]'
    lastname = 'input[name="lastname"]'
    address = '[name="address_1"]'
    city = 'input[name="city"]'
    country = 'select[name="country_id"]'
    zone = 'select[name="zone_id"]'
    email = '[id="guestFrm_email"]'
    pcode = '[name="postcode"]'
    maintext = '[class="maintext"]'


    visit() {
        cy.visit(this.url);
    }

    goToTShirtsCategory() {
        cy.contains(this.Tshirts).click({force: true});
    }
        
    selectTShirt() {
        cy.contains(this.TshirtName).click();
    }
        
    addToCart() {
        cy.get(this.Cart).click();
    }
        
    goToShoesCategory() {
        cy.contains(this.Shoes).click({force: true});
    }
        
    selectShoeSize() {
        cy.get(this.CartIcon).eq(0).click()
        cy.get(this.size).check();
    }
        
    searchForProduct(keyword) {
        cy.get(this.search).click().type(keyword);
        cy.get(this.Go).click();
    }
        
    selectSearchResult() {
        cy.contains(this.itemToSearch).click();
    }
        
    checkCartContents() {
        cy.get(this.openCart)
        .should('contain', this.itemToSearch)
        .should('contain', this.TshirtName)
        .should('contain', this.manualShoe);
    }
        
    checkCartTotal() {
        cy.get(this.totalAmount).should('contain', this.Amount);
    }
        
    goToCheckout() {
        cy.get(this.checkout).eq(1).click();
    }
        
    checkoutAsGuest() {
        cy.get(this.guest).check();
        cy.get(this.continue).click();
    }

    enterBillingDetails() {
        cy.get(this.firstname).type('zaq');
        cy.get(this.lastname).type('qaz');
        cy.get(this.address).type('moja 1');
        cy.get(this.city).type('miasto');
        cy.get(this.country).select('Poland')
        cy.get(this.zone).select('Lodzkie')
        cy.get(this.email).type('test@example.com')
        cy.get(this.pcode).type('01-100')
    }

    checkoutCheck() {
        cy.get(this.continue).click()
        cy.get(this.checkOut).click()

        cy.get(this.maintext).should('contain', 'Your Order Has Been Processed!')
    }


}

export const SCP = new ShoppingCartPage
