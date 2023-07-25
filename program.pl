% Una regla para definir un triángulo válido
triangulo(A, B, C) :-
    A > 0, B > 0, C > 0, % Los lados deben ser positivos
    A + B > C, A + C > B, B + C > A. % La suma de dos lados debe ser mayor que el tercero

% Un triángulo es equilátero si sus tres lados son iguales
equilatero(A, A, A).

% Un triángulo es isósceles si dos de sus lados son iguales y el tercero es diferente
isosceles(A, A, B) :- A \= B.
isosceles(A, B, A) :- A \= B.
isosceles(B, A, A) :- A \= B.

% Un triángulo es escaleno si sus tres lados son diferentes
escaleno(A, B, C) :- A \= B, A \= C, B \= C.

% Un predicado para clasificar un triángulo válido según sus lados
clasificar(A, B, C, Tipo) :-
    triangulo(A, B, C),
    (   equilatero(A, B, C) -> Tipo = equilatero
    ;   isosceles(A, B, C) -> Tipo = isosceles
    ;   escaleno(A, B, C) -> Tipo = escaleno
    ).
