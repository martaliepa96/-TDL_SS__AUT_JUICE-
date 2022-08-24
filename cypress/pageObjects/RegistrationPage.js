import BasePageObjects from "./BasePageObjects";

class RegistrationPage extends BasePageObjects {
    static get AccountButton() {
        return cy.get("#navbarAccount")
    };
    static get LogingButton() {
        return cy.get("#navbarLoginButton")
    }
    static get CustomerButton() {
        return cy.get(`[href="#/register"]`)
    }
    static get emailField() {
        return cy.get("#emailControl")
    }
    static get Password() {
        return cy.get("#passwordControl")
    }
    static get RepeatPassword() {
        return cy.get('#repeatPasswordControl')
    }
    static get SecurityQuestion() {
        return cy.get(`[aria-label="Selection list for the security question"]`)
    }
    static get SecurityQuestionOptions(){
        return cy.get(".mat-option-text")
    }
    static get AnswerButton() {
        return cy.get("#securityAnswerControl")
    }
    static get RegistrationButton () {
        return cy.get('#registerButton')
    }
}

export default RegistrationPage