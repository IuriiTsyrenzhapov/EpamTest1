const { assert } = require('chai');
const LoginPage = require('./loginPage');
const baseURL = 'https://open.spotify.com/';

describe('UC test', () => {
  it('UC-1', () => {
    browser.url(baseURL);

    const loginPage = new LoginPage();

    loginPage.clearUsername();
    loginPage.clearPassword();

    loginPage.clickLoginButton();

    const errorMessages = loginPage.getErrorMessages();

    assert.include(
      errorMessages,
      'Введіть своє ім’я користувача Spotify або електронну адресу.'
    );
    assert.include(errorMessages, 'Будь ласка, введіть свій пароль.');
  });

  it('UC-2', () => {
    browser.url(baseURL);
    const loginPage = new LoginPage();
    loginPage.login('Error@Login.com', 'ErrorPassword');
    const errorMessage = LoginPage.errorMessage.getText();
    assert.include(errorMessage, "Невірне ім'я користувача або пароль");
  });

  it('UC-3', () => {
    browser.url(baseURL);
    const loginPage = new LoginPage();
    loginPage.login('tsyrenzhapov@gmail.com', 'Wassailer1987');

    const userName = LoginPage.getUserName();
    assert.equal(userName, 'Expected_Username', 'User name is not correct');
  });
});
