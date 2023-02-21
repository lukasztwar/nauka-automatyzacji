export class ShoppingCartPage {

    visit() {
        cy.visit('https://automationteststore.com/');
    }

    goToTShirtsCategory() {
        cy.contains('T-shirts').click({force: true});
    }
        
    selectTShirt() {
        cy.contains('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie').click();
    }
        
    addToCart() {
        cy.get('[class="cart"]').click();
    }
        
    goToShoesCategory() {
        cy.contains('Shoes').click({force: true});
    }
        
    selectShoeSize() {
        cy.get('[class="fa fa-cart-plus fa-fw"]').eq(0).click()
        cy.get('[value="747"]').check();
    }
        
    searchForProduct(keyword) {
        cy.get('[placeholder="Search Keywords"]').click().type(keyword);
        cy.get('[title="Go"]').click();
    }
        
    selectSearchResult() {
        cy.contains('ck one shock for him Deodorant').click();
    }
        
    checkCartContents() {
        cy.get('[class="table table-striped table-bordered"]')
        .should('contain', 'ck one shock for him Deodorant')
        .should('contain', 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie')
        .should('contain', 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals');
    }
        
    checkCartTotal() {
        cy.get('[class="bold totalamout"]').should('contain', '$74.00');
    }
        
    goToCheckout() {
        cy.get('[title="Checkout"]').eq(1).click();
    }
        
    checkoutAsGuest() {
        cy.get('[value="guest"]').check();
        cy.get('[title="Continue"]').click();
    }

    enterBillingDetails() {
        cy.get('[name="firstname"]').type('zaq');
        cy.get('input[name="lastname"]').type('qaz');
        cy.get('[name="address_1"]').type('moja 1');
        cy.get('input[name="city"]').type('miasto');
        cy.get('select[name="country_id"]').select('Poland')
        cy.get('select[name="zone_id"]').select('Lodzkie')
        cy.get('[id="guestFrm_email"]').type('test@example.com')
        cy.get('[name="postcode"]').type('01-100')
    }


}

export const SCP = new ShoppingCartPage
