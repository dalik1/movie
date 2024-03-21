import { Carousel } from "../carousel"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { Plataforma } from "../platform"
import { Cabecalio } from "../header"

export function Container(){
    return(
        <div class="container">
            <Cabecalio></Cabecalio>
            <Plataforma></Plataforma>
            <Carousel></Carousel>
        </div>
    )
}