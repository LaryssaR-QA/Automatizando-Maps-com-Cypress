const cypressConfig = require("../../cypress.config")

describe('Test Login ', () => {
  it('Deve logar com sucesso', () => {

    const user ={
      name:'LaryMortis',
      instagram: '@LaryMortis',
      password:'123456'
    }
    cy.login(user)//diminuir codigo
    cy.loggedUser(user.name)
  })

  it('Não deve logar com a senha incorreta', () => {
    const user ={
      name:'LaryMortis',
      instagram: '@LaryMortis',
      password:'1111'
    }
    cy.login(user)//diminuir codigo
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com Instagram inexistente', () => {
    const user ={
      name:'LaryMortis',
      instagram: '@teste',
      password:'123456'
    }
    cy.login(user)//diminuir codigo
    cy.modalHaveText('Credenciais inválidas, tente novamente!')  
  })
})