# Encriptador de Texto

Este proyecto es un encriptador de texto desarrollado con HTML, CSS y JavaScript. Permite encriptar y desencriptar textos según un conjunto de reglas predefinidas, asegurando que solo se utilicen letras minúsculas sin acentos, números ni caracteres especiales.

## Especificaciones

### Funcionalidades Principales

1. **Encriptar Texto**: Convierte las letras de un mensaje en su versión encriptada utilizando la siguiente clave:
   - La letra "e" se convierte en "enter"
   - La letra "i" se convierte en "imes"
   - La letra "a" se convierte en "ai"
   - La letra "o" se convierte en "ober"
   - La letra "u" se convierte en "ufat"

2. **Desencriptar Texto**: Convierte un mensaje encriptado de vuelta a su forma original utilizando la clave inversa.

3. **Validación de Entrada**:
   - Solo se permiten letras minúsculas.
   - No se permiten acentos, números ni caracteres especiales.
   - Se muestra un mensaje de advertencia si el campo de texto está vacío o contiene caracteres no válidos.

4. **Copiar al Portapapeles**: Permite copiar el resultado encriptado o desencriptado al portapapeles con un solo clic.

### Reglas de Construcción

- Solo funciona con letras minúsculas.
- No se permiten acentos, números ni caracteres especiales.

## Instrucciones de Uso

1. **Encriptar**:
   - Escribe el texto que deseas encriptar en el campo de texto.
   - Haz clic en el botón "Encriptar".
   - El texto encriptado aparecerá en el área de resultado.

2. **Desencriptar**:
   - Escribe o pega el texto encriptado en el campo de texto.
   - Haz clic en el botón "Desencriptar".
   - El texto original aparecerá en el área de resultado.

3. **Copiar al Portapapeles**:
   - Una vez encriptado o desencriptado el texto, haz clic en el botón "Copiar".
   - El texto resultante se copiará al portapapeles.

## Flujo de los Archivos

- **index.html**: Contiene la estructura básica del encriptador.
- **assets/css/styles.css**: Define los estilos visuales para la interfaz de usuario.
- **assets/js/script.js**: Contiene la lógica de encriptación, desencriptación, validación de entrada y la funcionalidad de copiar al portapapeles.
