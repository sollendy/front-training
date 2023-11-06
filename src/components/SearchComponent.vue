<script>
export default {
    name: 'SearchComponent',
}
</script>
<template>
    <div class="container">
        <div class="row g-5 my-5">
            <div class="col-md-4">
                <small for="where">Dove</small>
                <input type="text" class="form-control" id="where" name="where" placeholder="Cerca una destinazione">
            </div>
            <div class="col-md-4">
                <small for="rooms">Numero di stanze</small>
                <input type="number" class="form-control" id="rooms" name="rooms"
                    placeholder="Inserisci il numero minimo di stanze">
            </div>
            <div class="col-md-4">
                <small for="beds">Numero posti letto</small>
                <input type="number" class="form-control" id="beds" name="beds"
                    placeholder="Inserisci il numero minimo di letti">
            </div>
            <div class="col-md-8">
                <small for="service">Servizi</small>
                <select class="form-select" aria-small="Default select example" >
                    <option disabled selected>Seleziona i servizi che desideri</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="col-md-4">
                <small for="km">Raggio di ricerca</small>
                <input type="number" class="form-control" id="km" name="km"
                    placeholder="Cerca entro un limite di Km">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>