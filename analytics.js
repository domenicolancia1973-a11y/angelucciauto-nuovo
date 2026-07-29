// Caricamento Google Analytics 4
(function() {
  // Inserisce lo script di Google Tag Manager
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4G3JT0Q1V5';
  document.head.appendChild(script);

  // Inizializza dataLayer e gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-4G3JT0Q1V5');
})();
