# Mi Bolsillo

Aplicación móvil personal para registrar gastos e ingresos en pesos argentinos.

## Incluye

- Saldo actual, presupuesto mensual y proyección de cierre.
- Disponible semanal calculado a partir del presupuesto, gastos del mes y gastos fijos pendientes.
- Gastos e ingresos en ARS; los USD se convierten con la cotización elegida (blue, oficial o MEP) desde DolarAPI cuando hay conexión.
- Ocho atajos configurables para registrar gastos habituales en pocos toques.
- Datos guardados solo en el navegador del dispositivo (`localStorage`).
- Funcionamiento sin conexión luego de la primera carga; la cotización del dólar necesita conexión para actualizarse.

## Para usarla en el celular

1. Publicá esta carpeta en cualquier hosting estático con HTTPS (por ejemplo, GitHub Pages, Netlify o Cloudflare Pages).
2. Abrí la dirección desde Chrome en Android o Safari en iPhone.
3. Elegí **Instalar aplicación** / **Agregar a pantalla de inicio** desde el menú del navegador.

Al abrirla por primera vez, entrá a Ajustes para cargar el presupuesto mensual y el saldo inicial. Después editá los atajos y registrá tus gastos desde el botón `+`.
