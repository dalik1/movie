

export function Carousel(){
    return(
        <div class="carousel slide"  data-bs-interval="10000" data-bs-ride="carousel" id="ads" data-bs-touch="true">
                <div class="carousel-inner">
                    <CarouselInnerActive></CarouselInnerActive>
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
    )
}

function CarouselInner(){
    return(
        <div class="carousel-item">
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <iframe class="video" width="1209" height="679" src="https://www.youtube.com/embed/ILAwV65XuGA" title="&quot;Oppenheimer&quot; - Trailer Final Legendado (Universal Pictures Portugal)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

function CarouselInnerActive(){
    return(
        <div class="carousel-item active">
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-cresce" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <img class="films col-3 mid-sai" src="https://www.themoviedb.org/t/p/w1280/miif4N3YWL5mGGlXA2YrHPr2iwz.jpg" alt="Duna"/>
            <iframe class="video" width="1209" height="679" src="https://www.youtube.com/embed/ILAwV65XuGA" title="&quot;Oppenheimer&quot; - Trailer Final Legendado (Universal Pictures Portugal)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}