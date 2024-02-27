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
        <div class="carousel-item active" data-bs-interval="20000">
           <iframe width="917" height="515" src="https://www.youtube.com/embed/ncwsW3qxQlo" title="Duna: Parte 2 | Trailer Oficial 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}