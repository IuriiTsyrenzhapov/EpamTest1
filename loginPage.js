class LoginPage {
  get usernameInput() {
    return $('login-username');
  }
  get passwordInput() {
    return $('login-password');
  }
  get loginButton() {
    return $('login-button');
  }
  get errorMessages() {
    return $$('.form-error-message');
  }

  clearUsername() {
    this.usernameInput.clearValue();
  }

  clearPassword() {
    this.passwordInput.clearValue();
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  getErrorMessages() {
    const messages = this.errorMessages.map((element) => element.getText());
    return messages;
  }
}

module.exports = LoginPage;
