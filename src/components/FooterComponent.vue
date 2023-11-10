<template>
    <footer>
        <section class="foot-cont">
            <div class="last-items d-flex flex-column align-items-center">
                <div class="foot-logo">
                    <img class="basso-logo" src="../assets/img/logoBoolBNBFilled.png" alt="logo">
                </div>
                <p class="frasetta text-light fs-4">
                    Trovare l’alloggio ideale per i tuoi bisogni, non è mai stato così facile
                </p>
                <div class="links d-flex gap-2 fs-4 pb-4">
                    <a href="#">
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-square-google-plus"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-square-twitter"></i>
                    </a>
                </div>
            </div>
            <div class="copirait">
                <p class="dream-team text-center">
                    <small class="text-light text-center">Copiright ©2023 BoolBnb. Design By Morena, Martina, Massimo, Edoardo e Filippo</small>
                </p>
            </div>
        </section>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterComponent',
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
footer {
    .foot-cont {
        .last-items {
            background-color: rgb(217, 128, 108);
            .foot-logo {
                //width: 5rem;
                .basso-logo {
                    width: 7rem;
                }
            }
            .links {
                a {
                    color: rgb(68, 110, 112);
                }
            }
        }
    }
    .copirait {
        background-color: rgb(217, 143, 107);
    }
}
</style>