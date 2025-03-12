import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })

  // write a test to see whether the Start Quiz button renders
  it('renders the Start Quiz button', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz')
  })
})
