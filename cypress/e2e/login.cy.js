import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Test Login ', () => {
  it('Deve logar com sucesso', () => {
    const user = {
      name:'LaryMortis',
      instagram: '@LaryMortis',
      password:'123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
  })

  it('Não deve logar com a senha incorreta', () => {
    const user ={
      name:'LaryMortis',
      instagram: '@LaryMortis',
      password:'1111'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com Instagram inexistente', () => {
    const user ={
      name:'LaryMortis',
      instagram: '@teste',
      password:'123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')  
  })

  it('Instagram deve ser obrigatório', () => {
    const user ={
      instagram: '',
      password:'123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
   loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('Senha deve ser obrigatório', () => {
    const user ={
      instagram: '@LaryMortis',
      password:''
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('Todos os campos devem ser obrigatório', () => {
    const user ={
      instagram: '',
      password:''
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

})