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
            <img class="films col-4" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-4" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-4" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
        </div>
    )
}