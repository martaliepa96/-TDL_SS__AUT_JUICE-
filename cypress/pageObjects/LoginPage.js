import BasePageObjects from "./BasePageObjects";

class LoginPage extends BasePageObjects {
    static get AccountButton() {
        return cy.get("#navbarAccount")
    };
    static get LogingButton() {
        return cy.get("#navbarLoginButton")
    };
    static get Email() {
        return cy.get("#email")
    };
    static get Password() {
        return cy.get("#password")
    };
    static get LoginIn() {
        return cy.get("[aria-label='Login']")
    };
    static get AccountButton() {
        return cy.get("#navbarAccount")
    };
    static get DemoButton() {
        return cy.get("button[aria-label='Go to user profile']")
    }








}
export default LoginPage