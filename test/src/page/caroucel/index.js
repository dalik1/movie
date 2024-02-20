
import bootstrap from ''
export function caroucel() {
    return(
        <div class="caroucel">
            <div class="caroucel-inner">
                <Item></Item>
            </div>
        </div>
    )
}

export function Item() {
    return(
        <img class="caroucel-item" src= "https://picsum.photos/1280/420?random=1"/>
    )
}