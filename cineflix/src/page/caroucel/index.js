import 'bootstrap';

export function Caroucel(){
    return(
        <div class="carousel slide" data-bs-ride="carousel" id="ads" data-bs-touch="true">
            <div>
                <div class="carousel-inner">
                    <CarouselInner></CarouselInner>
                    <CarouselInner></CarouselInner>
                    <CarouselInner></CarouselInner>
                </div>
                <button class="carousel-control-prev" data-bs-target="#ads" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark opacity-75 rounded-circle">
                    </span>
                </button>
                <button class="carousel-control-next" data-bs-target="#ads" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark opacity-75 rounded-circle">
                    </span>
                </button>
            </div>
        </div>
    )
}

function CarouselInner(){
    return(
        <div class="carousel-item active" data-bs-interval="10000" >
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <iframe width="560" class="d-none" height="315" src="https://www.youtube.com/embed/QqmbrvluQRA?si=xDem_qo2kod-Si14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}