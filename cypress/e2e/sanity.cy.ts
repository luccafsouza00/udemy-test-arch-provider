import { retryableBefore } from 'cy-retryable-before'
//import { retryableBefore } from '../support/retryable-before'
describe('CRUD movie', () => {
  let token: string
  retryableBefore(() => {
    cy.api({
      method: 'GET',
      url: '/'
    })
      .its('body.message')
      .should('eq', 'Server is running!')

    cy.maybeGetToken('token-session').then((t) => {
      console.log(t)
      token = t
    })
  })

  it('should', () => {
    cy.log(token)
    cy.wrap(token).should('be.a', 'string')
  })
})
