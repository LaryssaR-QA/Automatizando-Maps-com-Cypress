import modal from  '../Components/modal'

class loginPage {  //class orientada por funções

    constructor(){//propriedade da class modal
        this.modal = modal
    }
    go(){
        cy.visit('/')
    }

    form(user){
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)//se conter campo preenchido executa o cod
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit(){
        cy.contains('button', 'Entrar').click()
    }

}

export default new loginPage()