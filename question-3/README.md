# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Este problema lo abordaremos con el concepto de la estructura de datos conocido como **Pila**. Simularemos un array como nuestra pila. Inicialmente estará vacía. 
- Al detectarse un símbolo de paréntesis de **apertura** (paréntesis, corchetes, llaves) en la cadena ingresada, lo insertaremos en la pila **(push)**.
- Al detectarse un símbolo de paréntesis de **cierre**, debemos extraer el último elemento insertado en la pila **(pop)**; y este, debe ser del mismo tipo de símbolo correspondiente (paréntesis, corchetes, llaves).
- Si los símbolos de apertura y de cierre no corresponden, la cadena es inválida
- Al finalizar el recorrido de la cadena, si la pila está vacía, la cadena es válida (se garantiza el balanceado); de lo contrario, la cadena es inválida.