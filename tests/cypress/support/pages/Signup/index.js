import modal from  '../Components/modal'

class SignupPage {  //class orientada por funções p/cadastrar usuario

    constructor(){//propriedade da class modal
        this.modal = modal
    }
    go(){
        cy.visit('/signup')
    }

    form(user){
        if (user.name) cy.get('input[name=name]').type(user.instagram)//se conter campo preenchido executa o cod
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit(){
        cy.contains('button', 'Cadastrar').click()
    }

}

export default new SignupPage()