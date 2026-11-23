# Defensa de titulación – LeadPilot (reveal.js)

Presentación web de 30 diapositivas. Es un sitio estático: no necesita compilación ni servidor propio.

## Verla en tu computadora
Abre una terminal en esta carpeta y ejecuta:

    npx serve .

Luego entra a la dirección que muestra (por ejemplo http://localhost:3000).
(Abrir index.html con doble clic también funciona, pero el modo presentador necesita servidor.)

## Teclas útiles
- Flechas o barra espaciadora: avanzar y retroceder
- S: modo presentador con notas del orador y cronómetro (se abre en otra ventana)
- F: pantalla completa
- O o Esc: vista general de todas las diapositivas
- Para exportar a PDF: abre index.html?print-pdf en Chrome y usa Imprimir → Guardar como PDF

## Publicar en tu dominio con Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com: Add New → Project → importa el repositorio. Framework: "Other". Sin comando de build. Deploy.
3. En el proyecto: Settings → Domains → escribe tu dominio (por ejemplo defensa.tudominio.com).
4. En el panel donde compraste el dominio crea el registro DNS que Vercel te indique
   (normalmente CNAME a cname.vercel-dns.com para un subdominio, o un registro A para el dominio raíz).
5. Espera la propagación; Vercel activa HTTPS automáticamente.

## Dónde editar
- index.html: el contenido; cada <section> es una diapositiva y su <aside class="notes"> son las notas.
- css/deck.css: colores, tipografía y diseño (azul UTA #00345C, acento #2F6FA8).
- css/animations.css: animaciones (barras que crecen, aparición escalonada, matriz de riesgos).
- js/main.js: configuración de reveal.js y números que cuentan (data-count).
- img/: imágenes. En conversaciones.png y dashboard.png se difuminaron teléfonos y nombres reales.

## Diapositiva de demostración (24)
Para poner un video: copia el archivo a img/ (por ejemplo demo.mp4) y reemplaza el recuadro punteado por:

    <video src="img/demo.mp4" controls style="width:1748px;height:720px;border-radius:17px;background:#000"></video>

## Créditos
reveal.js (licencia MIT, ver vendor/reveal/LICENSE). Fuentes Caladea y Carlito (licencias abiertas, vía Fontsource).
