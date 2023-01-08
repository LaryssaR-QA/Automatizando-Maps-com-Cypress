//COMMANDS
Cypress.Commands.add('login', (user)=> {
    cy.visit('/')
    cy.get('input[name=instagram]').type(user.instagram)
    cy.get('input[name=password]').type(user.password)
  
    cy.contains('button', 'Entrar').click()
  })
  
  Cypress.Commands.add('modalHaveText', (Text)=>{
    cy.get('.swal2-html-container')//class
      .should('be.visible')
      .should('have.text', Text)
  })
  
  Cypress.Commands.add('loggedUser', (name)=> {
    cy.get('.logged-user')//class
    .should('be.visible')
    .should('have.text', `Olá, ${name}`)
  
  })
  