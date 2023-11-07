<template>
    <section class="giumbo d-flex justify-content-between align-items-center position-relative">
        <div class="schizzo-cont position-absolute">
            <img src="../assets/img/schizzo2.png" class="top-img w-75" alt="schizzo">
        </div>
        <div class="title-search pt-4 d-flex flex-column justify-content-center align-items-between">
            <h1 class="pt-5 w-50">Il soggiorno perfetto per il tuo viaggio in pochi click</h1>
            <div class="form-button w-50 d-flex flex-column align-items-center">
                <input class="form-control shadow mt-5 border-1" type="text" aria-label="default input example">
                <button class="btn mt-4 w-25 text-light">
                    CERCA
                </button>
            </div>
        </div>
        <div class="schizzo2-cont">
            <img src="../assets/img/schizzo1.png" class="top-img position-absolute" alt="schizzo">
        </div>
    </section>
    <section>
        
    </section>

</template>

<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
    .giumbo {
        h1 {
            color: rgb(217, 128, 108);
        }
        .schizzo-cont {
           // height: 285px;
            //overflow: hidden;
            top: 0;
            left: -350px;
            img {
                rotate: 145deg;
            }
        }
        .title-search {
            padding-left: 20%;
            h1 {
                font-size: 400%;
            }
            .form-button {
                .form-control {
                    border-color: rgb(121, 195, 199);
                }
                button {
                    background-color: rgb(121, 195, 199);
                }
            }
        }
        .schizzo2-cont {
            img {
                width: 35%;
                top: 1%;
                right: -30px;
            }
        }
    }
</style>