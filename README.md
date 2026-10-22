# Proyecto de Automatización QA con Cypress


## 🛠️ Tech Stack

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## 🧪 Testing

- Functional testing
- Form validation
- Positive and negative test cases
- Test evidence: screenshots and video

## Descripción

Proyecto de práctica de **Quality Assurance (QA)** enfocado en la automatización de pruebas funcionales utilizando Cypress y JavaScript.

El objetivo es verificar el comportamiento de páginas web y validar un formulario HTML local, comprobando la interacción con campos de entrada, las validaciones de datos obligatorios y la visualización de mensajes de confirmación.

## Tecnologías y herramientas

- **Cypress:** automatización de pruebas end-to-end.
- **JavaScript:** lenguaje utilizado para escribir los casos de prueba.
- **Node.js y npm:** entorno de ejecución y gestión de dependencias.
- **HTML:** estructura del formulario de práctica.
- **Visual Studio Code:** editor de código.
- **Python HTTP Server:** servidor local para acceder al formulario de práctica.
- **Git y GitHub:** control de versiones y publicación del proyecto.

## Estructura del proyecto

```text
aprendizaje-cypress/
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js
│   ├── screenshots/
│   │   └── spec.cy.js/
│   │       ├── CP-01-pagina-cargada.png
│   │       ├── CP-02-campo-texto.png
│   │       ├── CP-03-campo-correo-limpio.png
│   │       ├── CP-04-correo-validado.png
│   │       ├── CP-05-formulario-enviado.png
│   │       ├── CP-06-formulario-vacio.png
│   │       ├── CP-07-correo-invalido.png
│   │       ├── CP-08-sin-nombre.png
│   │       ├── CP-09-sin-correo.png
│   │       ├── CP-10-sin-mensaje.png
│   │       └── CP-11-confirmacion-exacta.png
│   └── videos/
│       └── spec.cy.js.mp4
├── formulario.html
├── casos-prueba.md
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Casos de prueba implementados

La suite contiene 11 pruebas funcionales automatizadas:

| ID | Caso de prueba | Resultado |
|---|---|---|
| CP-01 | Verificar que la página de ejemplo se carga | PASS |
| CP-02 | Permitir escribir en un campo de texto | PASS |
| CP-03 | Permitir limpiar el campo de correo | PASS |
| CP-04 | Completar y verificar el valor de un campo de correo | PASS |
| CP-05 | Completar y enviar el formulario | PASS |
| CP-06 | Impedir el envío del formulario vacío | PASS |
| CP-07 | Impedir el envío con correo de formato incorrecto | PASS |
| CP-08 | Impedir el envío sin nombre | PASS |
| CP-09 | Impedir el envío sin correo | PASS |
| CP-10 | Impedir el envío sin mensaje | PASS |
| CP-11 | Verificar el texto exacto de confirmación | PASS |

## Resultados de ejecución

Última ejecución registrada de Cypress:

- **Casos ejecutados:** 11
- **Aprobados:** 11
- **Fallidos:** 0
- **Pendientes:** 0
- **Capturas de pantalla:** 11
- **Video de ejecución:** generado

**Resultado general: 100 % de los casos ejecutados fueron aprobados.**

## Evidencias

Las capturas individuales se encuentran en:

`cypress/screenshots/spec.cy.js/`

El video de ejecución completa se encuentra en:

`cypress/videos/spec.cy.js.mp4`

La documentación detallada de cada caso, sus precondiciones, pasos, resultados esperados y obtenidos está disponible en [`casos-prueba.md`](casos-prueba.md).

## Instalación y ejecución

### Requisitos previos

- Node.js y npm instalados.
- Dependencias del proyecto instaladas.
- Python instalado para levantar el servidor local del formulario.
- Conexión a Internet para ejecutar los casos que utilizan el sitio de ejemplo de Cypress.

### 1. Instalar dependencias

Desde la raíz del proyecto:

```bash
npm install
```

### 2. Iniciar el servidor local

En una terminal, ejecutar:

```bash
python -m http.server 8000
```

Si el comando anterior no funciona en Windows, probar:

```bash
py -m http.server 8000
```

Mantener esta terminal abierta durante las pruebas del formulario local.

### 3. Ejecutar las pruebas

En una segunda terminal, desde la raíz del proyecto:

```bash
npx cypress run
```

### 4. Abrir Cypress en modo interactivo

```bash
npx cypress open
```

Desde la interfaz de Cypress se puede seleccionar el archivo `spec.cy.js` y observar las pruebas durante su ejecución.

## Alcance y limitaciones

Este proyecto es una práctica de automatización funcional.

Las pruebas verifican interacciones de interfaz, valores de campos, validaciones nativas del navegador y mensajes de confirmación. El formulario local simula una confirmación de envío, pero no realiza una comunicación real con un backend ni envía correos electrónicos.

El caso CP-04 verifica el valor introducido en el campo de correo; la validación de formato se comprueba específicamente en CP-07.

## Aprendizajes

- Creación y organización de pruebas automatizadas con Cypress.
- Uso de selectores CSS para localizar elementos.
- Interacción con campos de entrada mediante `type()` y `clear()`.
- Validación de resultados mediante aserciones.
- Verificación de campos obligatorios y formato de correo.
- Generación de capturas y video como evidencias de ejecución.
- Documentación de casos de prueba y resultados funcionales.

## Autora Maria Chiribao

Proyecto personal de práctica y aprendizaje de **Quality Assurance y automatización de pruebas con Cypress**.
