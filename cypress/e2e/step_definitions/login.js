import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginpag} from '@pages/LoginPag'

Given("A web browser is at the Automation login page", () => {
  cy.visit("/login");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginpag.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginpag.submitLogin(row.username, row.password)

  });
});
Then("Validate the ingress and the web", () => {
  cy.contains('Automation')
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginpag.elements.errorMessage().should("have.text", errorMessage);
});
