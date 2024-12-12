describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
 })

 it('Верный пароль и Неверный логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('erman@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Проверка валидации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)').click();
    cy.get('#mailForgot').type('Syvor@ya.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Строчные буквы', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('GERmAn@dolnIKOV.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
})