# PoC Manipulacion Arrays con Js

# foreach()

El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Este método recibe dos argumentos:

- La función que itera cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

### Ejemplo

```
node server/01-foreach.js
```

# map()

El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.

La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. Las posibilidades son infinitas.Este método recibe dos argumentos:

- La función que itera y transforma cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

### Ejemplos

```
node server/02-map.js
node server/03-map-reloaded.js
```

# filter()

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo. Este proceso recibe dos argumentos:

- La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

### Ejemplo

```
node server/04-filter.js
```

# reduce()

El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo. Este método recibe dos argumentos:

- La función que itera y reduce cada elemento del array. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función.

La función, que recibe como argumento el método map, utiliza cuatro parámetros:

- El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

### Ejemplo

```
node server/05-reduce.js
node server/06-reduce-reloaded.js
```

# some()

El método some es inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

Este método recibe dos argumentos:

- La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

### Ejemplo

```
node server/07-some.js
```

# find()

Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

Estos procedimientos reciben dos argumentos:

- La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

### Ejemplo

```
node server/08-find.js
```

# includes()

El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

- El elemento a comparar.
- El índice inicial desde donde comparar hasta el último elemento.

### Ejemplo

```
node server/09-includes.js
```


# join()

El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

### Ejemplo

```
node server/10-join.js
```

##### Made with ❤️ by Leandro Arturi
