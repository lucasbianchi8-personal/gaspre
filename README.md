# Gaspre

Node version: 22.12.0
Angular version: 21.2.15

## Pasos para levantar la solucion
1- npm i
2- ng serve --o

## Consideraciones
### Servicios
Se creo un mock para simular la llamda a un servicio de obtención de bookings.

### Loader
Si bien está creado el interceptor, al simular la llamad y nunca realizar la llamada final por network se tuvo que simular la visualización y ocultamiento dentro del mock descripto arriba.
