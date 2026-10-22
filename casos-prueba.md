# Casos de Prueba Funcionales — Cypress

## 1. Información general

| Campo | Detalle |
|---|---|
| Proyecto | Aprendizaje de automatización QA con Cypress |
| Tipo de pruebas | Pruebas funcionales automatizadas |
| Herramienta | Cypress |
| Archivo de automatización | `cypress/e2e/spec.cy.js` |
| Entorno | Cypress Example y formulario HTML local |
| Fecha de ejecución | 22/10/2026 |
| Resultado de la ejecución | 11 PASS / 0 FAIL |
| Estado general | APROBADO |

## 2. Resumen de ejecución

| Métrica | Resultado |
|---|---:|
| Casos ejecutados | 11 |
| Casos aprobados | 11 |
| Casos fallidos | 0 |
| Casos pendientes | 0 |
| Capturas generadas | 11 |
| Video de ejecución | 1 |

**Resultado:** todos los casos de prueba ejecutados finalizaron correctamente. Cypress generó una captura PNG por cada caso y un video de la ejecución completa.

## 3. Detalle de los casos de prueba

### CP-01 — Verificar que la página de ejemplo se carga

- **ID:** CP-01
- **Prioridad:** Alta
- **Tipo:** Funcional / Interfaz
- **Precondiciones:** Cypress instalado y acceso a Internet.
- **Pasos:**
  1. Abrir `https://example.cypress.io`.
  2. Buscar el texto `Kitchen Sink`.
  3. Verificar que el texto esté visible.
- **Resultado esperado:** la página carga y muestra el texto `Kitchen Sink`.
- **Resultado obtenido:** la aserción de visibilidad fue satisfactoria.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-01-pagina-cargada.png`

### CP-02 — Permitir escribir en un campo de texto

- **ID:** CP-02
- **Prioridad:** Alta
- **Tipo:** Funcional
- **Precondiciones:** acceso a la página de acciones de Cypress.
- **Pasos:**
  1. Abrir `https://example.cypress.io/commands/actions`.
  2. Localizar el campo `.action-email`.
  3. Escribir `qa.prueba@example.com`.
  4. Verificar el valor ingresado.
- **Resultado esperado:** el campo contiene el texto ingresado.
- **Resultado obtenido:** el valor coincide con el esperado.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-02-campo-texto.png`

### CP-03 — Permitir limpiar el campo de correo

- **ID:** CP-03
- **Prioridad:** Media
- **Tipo:** Funcional
- **Precondiciones:** acceso a la página de acciones de Cypress.
- **Pasos:**
  1. Abrir la página de acciones.
  2. Escribir `qa.prueba@example.com` en `.action-email`.
  3. Verificar el valor ingresado.
  4. Limpiar el campo mediante `.clear()`.
  5. Verificar que el campo quede vacío.
- **Resultado esperado:** el campo queda sin contenido después de limpiarlo.
- **Resultado obtenido:** el campo tiene un valor vacío.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-03-campo-correo-limpio.png`

### CP-04 — Completar y validar un campo de correo

- **ID:** CP-04
- **Prioridad:** Media
- **Tipo:** Funcional
- **Precondiciones:** acceso a la página de acciones de Cypress.
- **Pasos:**
  1. Abrir la página de acciones.
  2. Escribir `prueba@email.com` en `.action-email`.
  3. Verificar que el campo contenga el valor ingresado.
- **Resultado esperado:** el campo conserva el correo ingresado.
- **Resultado obtenido:** la aserción del valor fue satisfactoria.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-04-correo-validado.png`
- **Observación:** este caso verifica el valor del campo; no comprueba por sí solo la validación nativa del formato del correo.

### CP-05 — Completar y enviar el formulario

- **ID:** CP-05
- **Prioridad:** Alta
- **Tipo:** Funcional positivo
- **Precondiciones:** servidor local activo y formulario accesible en `http://localhost:8000/formulario.html`.
- **Pasos:**
  1. Abrir el formulario local.
  2. Ingresar `María` en el nombre.
  3. Ingresar `maria@example.com` en el correo.
  4. Ingresar un mensaje de prueba.
  5. Verificar los tres valores.
  6. Presionar el botón de envío.
  7. Verificar que aparezca el mensaje de confirmación.
- **Resultado esperado:** los campos contienen los valores ingresados y se muestra `¡Formulario enviado correctamente!`.
- **Resultado obtenido:** los valores y el mensaje de confirmación cumplen las aserciones.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-05-formulario-enviado.png`

### CP-06 — Impedir el envío del formulario vacío

- **ID:** CP-06
- **Prioridad:** Alta
- **Tipo:** Funcional negativo / Validación
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Dejar todos los campos vacíos.
  3. Intentar enviar el formulario.
  4. Verificar que el campo nombre no sea válido.
  5. Verificar que no aparezca la confirmación.
- **Resultado esperado:** el formulario vacío no se procesa y no muestra la confirmación de envío.
- **Resultado obtenido:** la validación del nombre indica que no es válido y la confirmación permanece oculta.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-06-formulario-vacio.png`

### CP-07 — Impedir el envío con correo de formato incorrecto

- **ID:** CP-07
- **Prioridad:** Alta
- **Tipo:** Funcional negativo / Validación
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Ingresar un nombre.
  3. Ingresar `correo-invalido` en el campo de correo.
  4. Ingresar un mensaje.
  5. Verificar que el correo no sea válido.
  6. Intentar enviar el formulario.
  7. Verificar que no aparezca la confirmación.
- **Resultado esperado:** el correo inválido impide el envío y no aparece la confirmación.
- **Resultado obtenido:** la validación nativa del campo falla, como se esperaba, y la confirmación permanece oculta.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-07-correo-invalido.png`

### CP-08 — Impedir el envío sin nombre

- **ID:** CP-08
- **Prioridad:** Alta
- **Tipo:** Funcional negativo / Validación
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Dejar vacío el campo nombre.
  3. Ingresar un correo válido.
  4. Ingresar un mensaje.
  5. Verificar que el nombre no sea válido.
  6. Intentar enviar el formulario.
  7. Verificar que no aparezca la confirmación.
- **Resultado esperado:** el formulario no se envía si falta el nombre.
- **Resultado obtenido:** el campo nombre no es válido y la confirmación permanece oculta.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-08-sin-nombre.png`

### CP-09 — Impedir el envío sin correo

- **ID:** CP-09
- **Prioridad:** Alta
- **Tipo:** Funcional negativo / Validación
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Ingresar un nombre.
  3. Dejar vacío el campo correo.
  4. Ingresar un mensaje.
  5. Verificar que el correo no sea válido.
  6. Intentar enviar el formulario.
  7. Verificar que no aparezca la confirmación.
- **Resultado esperado:** el formulario no se envía si falta el correo.
- **Resultado obtenido:** el campo correo no es válido y la confirmación permanece oculta.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-09-sin-correo.png`

### CP-10 — Impedir el envío sin mensaje

- **ID:** CP-10
- **Prioridad:** Alta
- **Tipo:** Funcional negativo / Validación
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Ingresar un nombre.
  3. Ingresar un correo válido.
  4. Dejar vacío el campo mensaje.
  5. Verificar que el mensaje no sea válido.
  6. Intentar enviar el formulario.
  7. Verificar que no aparezca la confirmación.
- **Resultado esperado:** el formulario no se envía si falta el mensaje.
- **Resultado obtenido:** el campo mensaje no es válido y la confirmación permanece oculta.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-10-sin-mensaje.png`

### CP-11 — Verificar el texto exacto de confirmación

- **ID:** CP-11
- **Prioridad:** Alta
- **Tipo:** Funcional / Validación de mensaje
- **Precondiciones:** formulario local disponible.
- **Pasos:**
  1. Abrir el formulario.
  2. Completar nombre, correo y mensaje.
  3. Enviar el formulario.
  4. Verificar que la confirmación sea visible.
  5. Comparar el texto completo con el esperado.
- **Resultado esperado:** el texto sea exactamente `¡Formulario enviado correctamente!`.
- **Resultado obtenido:** el texto coincide exactamente después de quitar espacios al inicio y al final.
- **Estado:** PASS
- **Evidencia:** `cypress/screenshots/spec.cy.js/CP-11-confirmacion-exacta.png`

## 4. Evidencia complementaria

**Video de ejecución completa:**

`cypress/videos/spec.cy.js.mp4`

**Carpeta de capturas:**

`cypress/screenshots/spec.cy.js/`

Las capturas permiten revisar el estado de la interfaz al finalizar cada caso. El video permite observar la secuencia general de ejecución.

## 5. Conclusión

La suite de pruebas funcionales automatizadas ejecutó satisfactoriamente los 11 casos definidos. Se verificaron la carga de páginas, la interacción con campos de entrada, la limpieza de un campo, las validaciones de campos obligatorios, el rechazo de un correo con formato incorrecto y la visualización del mensaje de confirmación.

La ejecución registrada finalizó con **11 casos aprobados y 0 fallidos**, con generación de evidencias gráficas y video.

**Alcance:** las pruebas del formulario local validan el comportamiento del HTML y su lógica de confirmación. No demuestran el envío real de datos a un servidor ni el envío efectivo de correos electrónicos.


