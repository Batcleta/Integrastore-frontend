class TopBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div>            
         {*Top bar code goes here *}         
        </div>
      `;
    }
}

class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div id="navbar" class="slide-navbar">
        <div class="nav">
            <div>
                <div class="nav__brand">
                    <!-- colocar icone de menu -->
                    <i id="nav-toggle" class="icon ion-android-menu nav__toggle"></i>
                    <a href="#" class="nav__logo">
                        <img src="./src/img/integra-logo.svg" alt="logo integra store" srcset="">
                    </a>
                </div>

                <div class="nav__list">
                    <a href="" class="nav__link active nav__active">
                        <i class="nav__icon icon ion-clipboard " ></i>
                        <span class="nav__name">Dashboard</span>
                    </a>
                    <a href="" class="nav__link nav__active">
                    <i class="icon ion-android-people nav__icon"></i>
                        <span class="nav__name">Contatos</span>
                    </a>
                    <a href="" class="nav__link nav__active">
                    <i class="icon ion-ios-box nav__icon"></i>
                        <span class="nav__name">Estoque</span>
                    </a>
                    <a href="" class="nav__link nav__active">
                    <i class="icon ion-social-dropbox nav__icon"></i>
                        <span class="nav__name">Saídas</span>
                    </a>
                    <div class="nav__link nav_active nav_collapse">
                    <i class="icon ion-person-add nav__icon"></i>
                        <span class="nav__name">Cadastros</span>
                        <i class="icon ion-android-arrow-dropdown collapse__link"></i>
                        <ul class="collapse__menu">
                            <li class="collapse__sublink">
                                <a href="">Emitente</a>
                            </li>
                            <li class="collapse__sublink">
                                <a href="">Formas de pagamento</a>
                            </li>
                            <li class="collapse__sublink">
                                <a href="">Funcionários</a>
                            </li>
                            <li class="collapse__sublink">
                                <a href="">Parcelamento</a>
                            </li>
                            <hr>
                            <li class="collapse__sublink">
                                <a href="">Terminais</a>
                            </li>
                            <li class="collapse__sublink">
                                <a href="">Cargos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#" class="nav__link">
                <svg class="nav__icon icon ion-" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                    <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="nav__name">Sair</span>
            </a>
        </div>
    </div>
      `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer>            
          {*footer code goes here *}         
        </footer>     
      `;
    }
}


customElements.define('main-top-bar', TopBar);
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);