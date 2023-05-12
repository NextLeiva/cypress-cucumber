class LoginPag {
  elements = {
    usernameInput: () => cy.get('input[data-qa="login-email"]'),
    passwordInput: () => cy.get('input[data-qa="login-password"]'),
    loginBtn: () => cy.get('button[data-qa="login-button"]'),
    errorMessage: () => cy.contains('Your email or password is incorrect!'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginpag = new LoginPag();
