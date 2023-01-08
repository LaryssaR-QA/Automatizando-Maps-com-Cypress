

class Modal{//class componente 'msg de retorno'

    haveText(Text){
        cy.get('.swal2-html-container')//class
        .should('be.visible')
        .should('have.text', Text)
    }

}

export default new Modal()