describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '5')
  })

  it('should chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '32')
  })

  it('the output should be as expected for a range of numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-0.5');
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '69358185615.5')
  })

  it('should be able to divide by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Undefined')
  })
})