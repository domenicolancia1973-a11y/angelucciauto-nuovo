document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <header class="main-header">
      <div class="container nav-inner" style="display: flex !important; align-items: center !important; justify-content: space-between !important; width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 15px; box-sizing: border-box;">
        
        <!-- Logo che punta alla Home -->
        <a href="index.html" class="nav-logo" style="display: block !important;">
          <img src="logo.png" alt="Angelucci Domenico Auto" style="height: 58px !important; width: auto !important; display: block !important;">
        </a>

        <!-- Tasto Hamburger per Mobile (Usa la stessa classe del tuo CSS vecchio) -->
        <button class="nav-burger" id="mobile-menu-btn" aria-label="Apri menu" style="background: none; border: none; color: #333333; font-size: 1.8rem; cursor: pointer;">☰</button>

        <!-- Link del Menu (Usa l'ID per non sovrapporsi al CSS mobile vecchio) -->
        <ul class="nav-links" id="nav-links-menu">
          <li><a href="chi-siamo.html">Chi Siamo</a></li>
          <li><a href="dove-siamo.html">Dove Siamo</a></li>
          <li class="desktop-only"><a href="lista-veicoli.html">Veicoli</a></li> 
          <li><a href="contatti.html">Contatti</a></li>
          <!-- Tasto WhatsApp integrato per i menu compatti -->
          <li class="mobile-only-wa" style="margin-top: 10px;">
            <a class="btn-wa" href="https://wa.me/390666152690" target="_blank">
              <svg viewBox="0 0 24 24" style="width: 17px; height: 17px; fill: #fff;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.722-1.458L0 24zm6.59-3.771l.394.233c1.554.922 3.346 1.409 5.174 1.41h.031c5.549 0 10.064-4.512 10.068-10.066.002-2.69-1.043-5.22-2.943-7.12S14.698 1.666 12.01 1.666c-5.552 0-10.067 4.513-10.07 10.068-.001 1.872.49 3.704 1.423 5.28l.255.433-.993 3.626 3.722-.976zm11.233-7.662c-.311-.155-1.838-.907-2.111-1.006-.273-.099-.472-.148-.67.148-.199.297-.769.967-.942 1.165-.173.199-.347.223-.658.068-.311-.155-1.313-.484-2.502-1.545-.925-.825-1.549-1.844-1.73-2.155-.182-.311-.02-.479.135-.634.14-.139.311-.36.466-.54.155-.18.207-.311.311-.518.104-.207.052-.387-.026-.542-.078-.155-.67-1.613-.918-2.21-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.838-.75 2.099-1.438.261-.688.261-1.276.182-1.4-.078-.124-.273-.197-.583-.352z"/></svg>
              <span>Scrivici</span>
            </a>
          </li>
        </ul>

      </div>
    </header>
  `;

  // Inserisce l'header in cima alla pagina
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Gestione del click per aprire/chiudere la tendina su mobile
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-links-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
