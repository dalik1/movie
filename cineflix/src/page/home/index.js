import { Caroucel } from "../caroucel"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Plataforma } from "../plataformas"
export function Container(){
    return(
        <div class="container">
            <Plataforma></Plataforma>
            <Caroucel></Caroucel>
        </div>
    )
}