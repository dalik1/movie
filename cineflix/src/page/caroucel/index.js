import { boostrap } from "bootstrap"

export function Caroucel(){
    return(
        <div class="carousel" id="add">
            <CarouselInner></CarouselInner>
            <CarouselInner></CarouselInner>
            <CarouselInner></CarouselInner>
            
            <botton class="carousel-control-prov" data-bs-target="#add" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </botton>
            <botton class="carousel-control-next" data-bs-target="#add" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </botton>
        </div>
    )
}

function CarouselInner(){
    return(
        <div class="carousel-inner">
            <Item></Item>
        </div>
    )
}

function Item(){
    return(
        <img class="caroucel-item" src= "https://picsum.photos/702/420?random=1"/>
    )
}