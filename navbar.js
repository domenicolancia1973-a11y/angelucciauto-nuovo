document.addEventListener("DOMContentLoaded", function () {
  // 1. INIETTIAMO IL CSS DEDICATO E ISOLATO PER QUESTA NAVBAR
  const navbarStyle = `
    <style>
      /* Stili generali della barra (PC) */
      .custom-js-header {
        position: sticky !important;
        top: 0 !important;
        z-index: 99999 !important;
        width: 100% !important;
        height: 72px !important;
        background: #ffffff !important;
        border-bottom: 1px solid #e0e0e0 !important;
        display: flex !important;
        align-items: center !important;
        box-sizing: border-box !important;
        font-family: 'Barlow Condensed', sans-serif !important;
      }
      .custom-js-container {
        width: 100% !important;
        max-width: 1200px !important;
        margin: 0 auto !important;
        padding: 0 20px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-sizing: border-box !important;
      }
      .custom-js-logo img {
        height: 52px !important;
        width: auto !important;
        display: block !important;
      }
      .custom-js-links {
        display: flex !important;
        align-items: center !important;
        gap: 2rem !important;
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .custom-js-links a {
        font-size: 1rem !important;
        font-weight: 700 !important;
        letter-spacing: .07em !important;
        text-transform: uppercase !important;
        color: #1a1a1a !important;
        text-decoration: none !important;
        transition: color .2s !important;
      }
      .custom-js-links a:hover {
        color: #000000 !important;
      }
      .custom-js-burger {
        display: none !important;
        background: none !important;
        border: none !important;
        color: #1a1a1a !important;
        font-size: 1.8rem !important;
        cursor: pointer !important;
        padding: 0 !important;
      }
      .custom-js-wa {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        background: #25d366 !important;
        color: #ffffff !important;
        padding: 10px 20px !important;
        border-radius: 999px !important;
        font-size: .95rem !important;
        font-weight: 700 !important;
        text-decoration: none !important;
        white-space: nowrap !important;
        transition: background .2s !important;
      }
      .custom-js-wa:hover {
        background: #1ebe5d !important;
      }
      .custom-js-wa svg {
        width: 18px !important;
        height: 18px !important;
        fill: #ffffff !important;
      }

      /* COMPORTAMENTO SU CELLULARE (Sotto i 768px) */
      @media (max-width: 768px) {
        .custom-js-container {
          position: relative !important;
          justify-content: space-between !important;
        }
        .custom-js-burger {
          display: block !important; /* Hamburger a sinistra */
          order: 1 !important;
        }
        .custom-js-logo {
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important; /* Logo perfettamente al centro */
          order: 2 !important;
        }
        .custom-js-wa-wrapper {
          order: 3 !important; /* WhatsApp a destra */
        }
        .custom-js-wa {
          padding: 10px !important;
          border-radius: 50% !important; /* Diventa un cerchio verde */
        }
        .custom-js-wa span {
          display: none !important; /* Nasconde il testo sul telefono */
        }
        
        /* Menu a tendina Mobile nascosto di base */
        .custom-js-links {
          display: none !important;
          flex-direction: column !important;
          position: absolute !important;
          top: 57px !important; /* Scende preciso sotto la barra bianca */
          left: -20px !important;
          width: calc(100% + 40px) !important;
          background: #ffffff !important;
          border-bottom: 3px solid #c0392b !important; /* Linea rossa estetica in fondo */
          padding: 20px 0 !important;
          gap: 1.5rem !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
        }
        /* Quando è attivo mostra la tendina */
        .custom-js-links.js-active {
          display: flex !important;
        }
        .custom-js-links li {
          width: 100% !important;
          text-align: center !important;
        }
        .custom-js-links li.desktop-only {
          display: none !important; /* Nasconde "Veicoli" su mobile */
        }
      }
    </style>
  `;

  // 2. STRUTTURA HTML DELLA NAVBAR
  const navbarHTML = `
    <header class="custom-js-header">
      <div class="custom-js-container">
        
        <!-- Hamburger (visibile solo su mobile a sinistra) -->
        <button class="custom-js-burger" id="custom-burger-btn" aria-label="Apri menu">☰</button>

        <!-- Logo (al centro su mobile, a sinistra su PC) -->
        <a href="index.html" class="custom-js-logo">
          <img src="logo.png" alt="Angelucci Domenico Auto">
        </a>

        <!-- Links di navigazione (Tendina su mobile) -->
        <ul class="custom-js-links" id="custom-nav-menu">
          <li><a href="chi-siamo.html">Chi Siamo</a></li>
          <li><a href="dove-siamo.html">Dove Siamo</a></li>
          <li class="desktop-only"><a href="lista-veicoli.html">Veicoli</a></li> 
          <li><a href="contatti.html">Contatti</a></li>
        </ul>

        <!-- Tasto WhatsApp (Icona tonda su mobile, bottone esteso su PC) -->
        <div class="custom-js-wa-wrapper">
          <a class="custom-js-wa" href="https://wa.me/390666152690" target="_blank">
            <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.722-1.458L0 24zm6.59-3.771l.394.233c1.554.922 3.346 1.409 5.174 1.41h.031c5.549 0 10.064-4.512 10.068-10.066.002-2.69-1.043-5.22-2.943-7.12S14.698 1.666 12.01 1.666c-5.552 0-10.067 4.513-10.07 10.068-.001 1.872.49 3.704 1.423 5.28l.255.433-.993 3.626 3.722-.976zm11.233-7.662c-.311-.155-1.838-.907-2.111-1.006-.273-.099-.472-.148-.67.148-.199.297-.769.967-.942 1.165-.173.199-.347.223-.658.068-.311-.155-1.313-.484-2.502-1.545-.925-.825-1.549-1.844-1.73-2.155-.182-.311-.02-.479.135-.634.14-.139.311-.36.466-.54.155-.18.207-.311.311-.518.104-.207.052-.387-.026-.542-.078-.155-.67-1.613-.918-2.21-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.838-.75 2.099-1.438.261-.688.261-1.276.182-1.4-.078-.124-.273-.197-.583-.352z"/></svg>
            <span>06 6615 2690</span>
          </a>
        </div>

      </div>
    </header>
  `;

  // Inseriamo sia gli stili blindati che l'HTML in cima al body
  document.body.insertAdjacentHTML('afterbegin', navbarStyle + navbarHTML);

  // 3. LOGICA DI APERTURA/CHIUSURA DELLA TENDINA CON INTERCETTAZIONE ERRORI
  const burgerBtn = document.getElementById("custom-burger-btn");
  const navMenu = document.getElementById("custom-nav-menu");

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("js-active");
    });

    // Chiude il menu se l'utente clicca fuori dalla tendina aperta
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        navMenu.classList.remove("js-active");
      }
    });
  }
});
// Carica il file di tracciamento Analytics esterno
if (!document.querySelector('script[src*="analytics.js"]')) {
  var analyticsScript = document.createElement('script');
  analyticsScript.src = '/analytics.js';
  document.head.appendChild(analyticsScript);
}
// Google Search Console Verification
(function() {
  var meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = 'vreZXYB_mfMTT-48Mls5UCvFz9dwZaiirDz7DJXg9OA';
  document.head.appendChild(meta);
})();
