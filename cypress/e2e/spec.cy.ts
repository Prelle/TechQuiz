const url = 'http://127.0.0.1:3001/';

describe('template spec', () => {
  it('loads the main page', () => {
    cy.visit(url)
    cy.get('button').contains('Start Quiz')
  })

  it('clicks the start quiz button', () => {
    cy.visit(url)
    cy.get('button').click()
    cy.get('button').its('length').should('eq', 4)
  })

  it('completes the quiz', () => {
    cy.visit(url)
    cy.get('button').click()

    for (let i = 0; i < 10; i++) {
      // Get a random number between 0 and 3
      const r = Math.floor(Math.random() * 4)

      cy.get('button').eq(r).click()
    }

    cy.get('button').contains('Take New Quiz')
  })
})