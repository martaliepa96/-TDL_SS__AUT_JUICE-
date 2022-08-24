import BasePageObjects from "../pageObjects/BasePageObjects"
import LoginPage from "../pageObjects/LoginPage"
import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchBarPage from "../pageObjects/SearchBarpage";

describe('Juice Box', () => {
  context("Login", () => {
    beforeEach(() => {
      BasePageObjects.visit();
      BasePageObjects.MeWantIt.click();
      BasePageObjects.DismissAll.click();
    })
    it('Login Scenario', () => {
      LoginPage.AccountButton.click();
      LoginPage.LogingButton.click();
      LoginPage.Email.type("demo");
      LoginPage.Password.type("demo");
      LoginPage.LoginIn.click();
      LoginPage.AccountButton.click();
      LoginPage.DemoButton.should("contain", "demo")
    
    })
    it('Registration scenario', () => {
      RegistrationPage.AccountButton.click();
      RegistrationPage.LogingButton.click();
      RegistrationPage.CustomerButton.click({force: true});
      let x = Math.floor(Math.random() * 1000);
      let email = "email" + x + "@ebox.lv"; //email_4768@ebox.com
      RegistrationPage.emailField.type(email);
      RegistrationPage.Password.click();
      let y = Math.floor(Math.random() * 1000);
      let Password = "Password" + y;
      RegistrationPage.Password.type(Password);
      RegistrationPage.RepeatPassword.click();
      RegistrationPage.RepeatPassword.type(Password);
      RegistrationPage.SecurityQuestion.click();
      RegistrationPage.SecurityQuestionOptions.contains("Name of your favorite pet?").click();
      RegistrationPage.AnswerButton.click();
      RegistrationPage.AnswerButton.type("Bob")
      RegistrationPage.RegistrationButton.click();
      LoginPage.Email.click();
      LoginPage.Email.type(email);
      LoginPage.Password.click();
      LoginPage.Password.type(Password);
      LoginPage.LoginIn.click();
      LoginPage.AccountButton.click();
      LoginPage.DemoButton.click();
    })
    it.only('Search and validate Lemon', ()=> {
      LoginPage.AccountButton.click();
      LoginPage.LogingButton.click();
      LoginPage.Email.type("demo");
      LoginPage.Password.type("demo");
      LoginPage.LoginIn.click();
      SearchBarPage.SearchIcon.click({force: true});
      // SearchBarPage.SearchIcon.type("lemon{enter}");
      SearchBarPage.searchField.type("lemon{enter}");
      SearchBarPage.SelectButton.click();
      SearchBarPage.InfoButton.should('contain.text', 'Sour but full of vitamins.');

    })
  });


  

  

  
})