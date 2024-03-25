import '../style/style.css';

export function Plataforma() {
    return(
    <div class="plataformas m-4 d-flex justify-content-center">
        <a href="#" class="plat">
            <button class="plataforma">
                <img class="imgplat" id="netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/495px-Netflix_2015_N_logo.svg.png" alt="Netflix"/>
            </button>
        </a>
        <a href="#" class="plat">
            <button class="plataforma bg-secundary">
            <img class="imgplat" id="disnay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disney_Plus_logo.svg/884px-Disney_Plus_logo.svg.png" alt="Disnay+"/>
            </button>
        </a>
        <a href="#" class="plat">
            <button class="plataforma">
                <img class="imgplat"  id="hbo"src="https://logohistory.net/wp-content/uploads/2023/12/HBO-Max-Symbol.png" alt="HBO Max"/>
            </button>
        </a>
        <a href="#" class="plat">
            <button class="plataforma">
                <img class="imgplat" id="prime" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/120px-Amazon_Prime_Logo.svg.png" alt="Amazon Prime"/>
            </button>
        </a>
        <a href="#" class="plat">
            <button class="plataforma">
                <img class="imgplat" id="paramount" src="https://seeklogo.com/images/P/paramount-logo-D0604AF7D3-seeklogo.com.png" alt="Paramount+"/>
            </button>
        </a>
    </div>
    )
}