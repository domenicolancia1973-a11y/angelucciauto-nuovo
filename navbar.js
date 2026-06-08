document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav style="position: sticky; top: 0; z-index: 99999 !important; background-color: #ffffff !important; border-bottom: 1px solid #e2e8f0 !important; padding: 0 1.5rem; display: flex !important; align-items: center !important; justify-content: space-between !important; height: 72px !important; box-sizing: border-box !important;">
      
      <div class="menu-toggle" id="mobile-menu-btn" style="cursor: pointer; display: flex; flex-direction: column; gap: 5px;">
        <span style="width: 25px; height: 3px; background-color: #1a1a1a !important; display: block;"></span>
        <span style="width: 25px; height: 3px; background-color: #1a1a1a !important; display: block;"></span>
        <span style="width: 25px; height: 3px; background-color: #1a1a1a !important; display: block;"></span>
      </div>

      <a href="index.html" class="nav-logo" style="display: block !important; z-index: 1001 !important;">
        <img src="logo.png" alt="Logo Domenico Angelucci" style="height: 54px !important; width: auto !important; display: block !important; visibility: visible !important; opacity: 1 !important;">
      </a>

      <ul class="nav-links" id="nav-links-menu" style="list-style: none !important; margin: 0 !important; padding: 0 !important;">
        <li><a href="chi-siamo.html">Chi Siamo</a></li>
        <li><a href="dove-siamo.html">Dove Siamo</a></li>
        <li class="desktop-only"><a href="lista-veicoli.html">Veicoli</a></li> 
        <li><a href="contatti.html">Contatti</a></li>
      </ul>

      <div class="nav-right-wa" style="display: block !important; z-index: 1002 !important;">
        <a href="https://wa.me/390666152690" class="btn-wa" target="_blank" style="display: flex !important; align-items: center !important; gap: 8px !important; background-color: #25d366 !important; color: #ffffff !important; padding: 9px 20px; border-radius: 999px !important; text-decoration: none !important; font-weight: 700 !important; white-space: nowrap !important;">
          <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: #ffffff !important;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.722-1.458L0 24zm6.59-3.771l.394.233c1.554.922 3.346 1.409 5.174 1.41h.031c5.549 0 10.064-4.512 10.068-10.066.002-2.69-1.043-5.22-2.943-7.12S14.698 1.666 12.01 1.666c-5.552 0-10.067 4.513-10.07 10.068-.001 1.872.49 3.704 1.423 5.28l.255.433-.993 3.626 3.722-.976zm11.233-7.662c-.311-.155-1.838-.907-2.111-1.006-.273-.099-.472-.148-.67.148-.199.297-.769.967-.942 1.165-.173.199-.347.223-.658.068-.311-.155-1.313-.484-2.502-1.545-.925-.825-1.549-1.844-1.73-2.155-.182-.311-.02-.479.135-.634.14-.139.311-.36.466-.54.155-.18.207-.311.311-.518.104-.207.052-.387-.026-.542-.078-.155-.67-1.613-.918-2.21-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.838-.75 2.099-1.438.261-.688.261-1.276.182-1.4-.078-.124-.273-.197-.583-.352z"/></svg>
          <span class="wa-text">06 6615 2690</span>
        </a>
      </div>
    </nav>
  `;

  // Inserisce la barra in cima alla pagina automaticamente
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
