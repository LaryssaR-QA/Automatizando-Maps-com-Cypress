import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('Deve cadastrar um novo usuário', ()=> {
      
        //Dado que, eu tenho usuario Becca Milano
        const user = {
            name: 'Becca Milano',
            instagram: '@beccaMilano',
            password: '654123'
        }

        //E que, esse usuário não existe no bando de dados
        cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
            cy.log(res); 
        });//funções do bando de dados, para apagar os dados de cadastrados

        //quando, faço o cadastro do mesmo
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        //Então vejo a mensagem de sucesso
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

})