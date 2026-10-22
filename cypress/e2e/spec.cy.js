
describe('Pruebas funcionales iniciales', () => {

  it('verifica que la página de ejemplo se carga', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')

    // Evidencia CP-01
    cy.screenshot('CP-01-pagina-cargada')
  })

  it('permite escribir en un campo de texto', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('qa.prueba@example.com')
      .should('have.value', 'qa.prueba@example.com')

    // Evidencia CP-02
    cy.screenshot('CP-02-campo-texto')
  })

  it('permite limpiar el campo de correo', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('qa.prueba@example.com')

    cy.get('.action-email')
      .should('have.value', 'qa.prueba@example.com')

    cy.get('.action-email').clear()

    cy.get('.action-email')
      .should('have.value', '')

    // Evidencia CP-03
    cy.screenshot('CP-03-campo-correo-limpio')
  })

  it('permite completar y validar un campo de correo', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('prueba@email.com')
      .should('have.value', 'prueba@email.com')

    // Evidencia CP-04
    cy.screenshot('CP-04-correo-validado')
  })

  it('permite completar y enviar el formulario', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#nombre').type('María')
    cy.get('#email').type('maria@example.com')
    cy.get('#mensaje').type('Estoy realizando una prueba funcional.')

    cy.get('#nombre').should('have.value', 'María')
    cy.get('#email').should('have.value', 'maria@example.com')
    cy.get('#mensaje').should(
      'have.value',
      'Estoy realizando una prueba funcional.'
    )

    cy.get('button[type="submit"]').click()

    cy.get('#confirmacion')
      .should('be.visible')
      .and('contain.text', '¡Formulario enviado correctamente!')

    // Evidencia CP-05
    cy.screenshot('CP-05-formulario-enviado')
  })

  it('no permite enviar el formulario vacío', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('button[type="submit"]').click()

    cy.get('#nombre').then(($campo) => {
      expect($campo[0].checkValidity()).to.be.false
    })

    cy.get('#confirmacion').should('not.be.visible')

    // Evidencia CP-06
    cy.screenshot('CP-06-formulario-vacio')
  })

  it('no permite enviar un correo con formato incorrecto', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#nombre').type('María')
    cy.get('#email').type('correo-invalido')
    cy.get('#mensaje').type('Prueba de validación de correo')

    cy.get('#email').then(($campo) => {
      expect($campo[0].checkValidity()).to.be.false
    })

    cy.get('button[type="submit"]').click()

    cy.get('#confirmacion').should('not.be.visible')

    // Evidencia CP-07
    cy.screenshot('CP-07-correo-invalido')
  })

  it('no permite enviar el formulario sin nombre', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#email').type('maria@example.com')
    cy.get('#mensaje').type('Mensaje de prueba')

    cy.get('#nombre').then(($campo) => {
      expect($campo[0].checkValidity()).to.be.false
    })

    cy.get('button[type="submit"]').click()
    cy.get('#confirmacion').should('not.be.visible')

    // Evidencia CP-08
    cy.screenshot('CP-08-sin-nombre')
  })

  it('no permite enviar el formulario sin correo', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#nombre').type('María')
    cy.get('#mensaje').type('Mensaje de prueba')

    cy.get('#email').then(($campo) => {
      expect($campo[0].checkValidity()).to.be.false
    })

    cy.get('button[type="submit"]').click()
    cy.get('#confirmacion').should('not.be.visible')

    // Evidencia CP-09
    cy.screenshot('CP-09-sin-correo')
  })

  it('no permite enviar el formulario sin mensaje', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#nombre').type('María')
    cy.get('#email').type('maria@example.com')

    cy.get('#mensaje').then(($campo) => {
      expect($campo[0].checkValidity()).to.be.false
    })

    cy.get('button[type="submit"]').click()
    cy.get('#confirmacion').should('not.be.visible')

    // Evidencia CP-10
    cy.screenshot('CP-10-sin-mensaje')
  })

  it('verifica que el mensaje de confirmación sea exacto', () => {
    cy.visit('http://localhost:8000/formulario.html')

    cy.get('#nombre').type('María')
    cy.get('#email').type('maria@example.com')
    cy.get('#mensaje').type('Prueba de confirmación')

    cy.get('button[type="submit"]').click()

    cy.get('#confirmacion')
      .should('be.visible')
      .invoke('text')
      .then((texto) => {
        expect(texto.trim()).to.equal(
          '¡Formulario enviado correctamente!'
        )
      })

    // Evidencia CP-11
    cy.screenshot('CP-11-confirmacion-exacta')
  })

})

