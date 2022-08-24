import BasePageObjects from "./BasePageObjects";

class SearchBarPage extends BasePageObjects {

    static get SearchIcon() {
        return cy.get(`mat-search-bar mat-form-field.mat-form-field`)
    }

    static get searchField(){
        return cy.get('#searchQuery');
    }

    static get SelectButton() {
        return cy.get(`[aria-label="Click for more information about the product"]`)
    }
    static get InfoButton() {
        return cy.get("app-product-details")
    }

}

export default SearchBarPage