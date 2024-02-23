import 'bootstrap';

export function Caroucel(){
    return(
        <div class="carousel slide" data-bs-ride="carousel" id="ads" data-bs-touch="true">
            <div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1280/420?random=1" alt="" class="d-block"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1280/420?random=2" alt="" class="d-block"/>
                    </div>
                    <div class="carousel-item">
                        <video src="https://youtu.be/Tj6XC1Xw_oE"></video>
                    </div>
                </div>
                <button class="carousel-control-prev" data-bs-target="#ads" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon">
                    </span>
                </button>
                <button class="carousel-control-next" data-bs-target="#ads" data-bs-slide="next">
                    <span class="carousel-control-next-icon">
                    </span>
                </button>
            </div>
        </div>
    )
}

function CarouselInner(){
    return(
        <div class="carousel-inner">
            <img class="caroucel-item" src= "https://picsum.photos/702/420?random=1"/>
        </div>
    )
}

/*function Item(){

        return(
            
        )
}*/