// Configuración de la presentación (reveal.js)
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.1,
  maxScale: 2,
  center: false,
  hash: true,
  controls: true,
  progress: true,
  slideNumber: false,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  plugins: [ RevealNotes ]
});

// Índices para escalonar animaciones de los bloques
document.querySelectorAll('.stagger').forEach(function (box) {
  Array.prototype.forEach.call(box.children, function (el, i) { el.style.setProperty('--i', i); });
});

// Números que cuentan hasta su valor ("35,1 s", "98,7 %", "478", "7×")
function countUp(el) {
  if (!el.dataset.final) el.dataset.final = el.textContent;
  var finalText = el.dataset.final;
  var m = finalText.match(/^([^\d]*)([\d.]+(?:,\d+)?)(.*)$/);
  if (!m) return;
  var prefix = m[1], num = m[2], suffix = m[3];
  var decimals = num.indexOf(',') >= 0 ? num.split(',')[1].length : 0;
  var target = parseFloat(num.replace(/\./g, '').replace(',', '.'));
  var t0 = Date.now(), dur = 1200;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = finalText; return; }
  clearInterval(el._timer);
  el._timer = setInterval(function () {
    var p = Math.min((Date.now() - t0) / dur, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + (target * eased).toFixed(decimals).replace('.', ',') + suffix;
    if (p >= 1) { clearInterval(el._timer); el.textContent = finalText; }
  }, 30);
}
function runCounts(slide) {
  if (!slide) return;
  slide.querySelectorAll('[data-count]').forEach(function (el) { setTimeout(function () { countUp(el); }, 350); });
}
Reveal.on('ready', function (e) { runCounts(e.currentSlide); });
Reveal.on('slidechanged', function (e) { runCounts(e.currentSlide); });
