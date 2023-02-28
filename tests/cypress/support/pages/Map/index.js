
class MapPage{
   loggedUser(name){ //class orientada por funções

    cy.get('.logged-user')//class
    .should('be.visible')
    .should('have.text', `Olá, ${name}`)

   }


}
export default new MapPage()