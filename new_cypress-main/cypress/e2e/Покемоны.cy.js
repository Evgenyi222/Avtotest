describe('Покупка аватара', function () {                                // название набора тестов
    it(' тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('Syrikan1@yandex.ru');
        cy.get('#password').type('987123Q');
        cy.get('.auth__button').should('have.css', 'color', 'rgb(255, 255, 255)').click();
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.success__image').should('be.visible');
        cy.get('.payment__adv').click();

    })
})