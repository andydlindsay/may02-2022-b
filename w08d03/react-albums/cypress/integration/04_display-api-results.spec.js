it('can display the results from an API query', () => {

  // visit the app
  cy.visit('/');

  // tell cypress to get in the way of each AJAX request and respond with fake data
  cy.intercept('GET', '**/search*', { fixture: 'itunes' })
    .as('loadData');

  // get the input field and type 'Daft Punk'
  cy.get('.search__form')
    .find('input')
    .type('Daft Punk')

  // get the spinner and make sure it's visible
  cy.get('.spinner')
    .should('be.visible');

  // wait until the API results load
  cy.wait('@loadData');

  // pick out one Daft Punk album and make sure it's visible
  cy.contains('Random Access Memories')
    .should('be.visible');

  // uncheck the explicit check box
  cy.get('#Explicit')
    .uncheck();

  // make sure the explicit album no longer appears
  cy.get('article.album')
    .should('not.contain', 'Daft Club');

});
