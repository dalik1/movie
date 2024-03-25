import '../style/style.css'

export function Cabecalio() {
    return(
        <div class="cabecalio">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list menu-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <form>
                    <input type="text" name="pesquisa" class="form-control pesquisa-control"></input>
                    <label for="pesquisa" class="form-label pesquisa-label">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search pesquisa-icon" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </label>
                </form>
        </div>
    )
}