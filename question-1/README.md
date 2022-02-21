# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Para resolver este problema, nos basaremos en el método inductivo; es decir, de casos particulares, llegaremos a una generalidad.
  -Para 1 peldaño, # de formas de escalar: (1) -> **1** forma
  -Para 2 peldaños, # de formas de escalar: (11)(2) -> **2** formas
  -Para 3 peldaños, # de formas de escalar: (111)(12)(21) -> **3** formas 
  -Para 4 peldaños, # de formas de escalar: (1111)(121)(112)(211)(22) -> **5** formas
  -Para 5 peldaños, # de formas de escalar: (11111)(2111)(221)(212)(1211)(122)(1121)(1112) -> **8** formas

Nos percatamos que, a medida que aumenta el número de peldaños, la sucesión que se forma es la conocida **Sucesión de Fibonacci**:
1, 2, 3, 5, 8, 13, ...
Lo cual podríamos generalizar como: **F(N) = F(N-1) + F(N-2)**
    donde **N** es el número de peldaños y **F(N)** es la función que muestra el número de formas de subir las escaleras para N  peldaños.
    
***Considerando que se podría plantear el código de forma recursiva, se optó por plantear una codificación de forma lineal usando un bucle, de tal manera que reemplacemos valores ya calculados en cada corrida, ya que con la recursividad, para este caso, recalcula valores innecesariamente.***_


