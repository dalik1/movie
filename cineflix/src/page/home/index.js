import { Caroucel } from "../caroucel"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Plataforma } from "../plataformas"
import { Cabecalio } from "../header"
export function Container(){
    return(
        <div class="container">
            <Cabecalio></Cabecalio>
            <Plataforma></Plataforma>
            <Caroucel></Caroucel>
        </div>
    )
}