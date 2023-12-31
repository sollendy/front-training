<template >
    <div class="selectMultiple w-100" :class="{ open: isOpen }" >
        <div @click.stop="toggleOpen" :class="{ error: store.specError }" >
            <span v-if="!selectedServices.length">{{ placeholder }}</span>
            <a v-for="service in selectedServices" @click.stop="removeService(service)" class="">
                <em >{{ service.name }}</em>
                <i></i>
            </a>
            <div class="arrow"></div>
        </div>
        <ul v-show="isOpen">
            <li v-for="service in services" @click.stop="selectedService(service)" > 
                {{ service.name }}
            </li>
        </ul>
    </div>
</template>

<script>
/**
 *      ISTRUZIONI PER L'USO
 * 
 * GENITORE:
 * 
 *  Nel componente padre dovre mettere una promp dinamica che contenga 
 *  l'array di services che vogliamo contenga la nostra select:
 *      esempio:
 *          :array="myArray"
 * 
 *  Dovrete inoltre mettere in ascolto il componente a alle varie
 *  selezioni, come qui dimostrato:
 *      esempio:
 *          @sendResult="myFunction"
 * 
 *  Fatto questo dovrete gestire l'assegnazione del risultato
 *  alla variabile che desiderate:
 *      esempio:
 *          methods:{
 *              myFunction(result) {
 *                  this.myVariable = result        
 *              }
 *          }
 * 
 *  Per concludere un piccolo suggerimento, se avete intenzione di utilizzare
 *  il componente a tutto schermo, vi consiglio di dare al genitore un 
 *  padding-x di 6px oppure px-2 di bootstrap/tailwind,
 *  così da evitare la comparsa di mezzo secondo della barra orizzontale
 *  creata dall'animazione in ingresso,
 *  tuttavia se proprio la volete a tutto schermo, potete customizzare
 *  l'animazione e non farla sbordare
 * 
 * 
 * Figlio:
 * 
 *  Nel caso vogliate modificare o customizzare il componente,
 *  nello style riassegnate alle varie variabili utilizzate
 *  i colori di vostro gradimento
 * 
 *  $primary: colore del testo delle service;
 *  $accent: colore dell'hover sulle service selezionate;
 *  $white: bg delle singole service selezionate;
 *  $$secondary: colore della crocetta e del placeholder;
 *  $red: boh alla fine non l'ho usata, unlucky;
 *  $dark: n'altra variabile inutile, molte bene;
 *  $size: Indica lo grandezza delle service da selezionare in ingresso,
 *         consigliato impostare un numero da 1 a 1.5;
 *  $resize: Indica lo grandezza delle service da selezionare in uscita,
 *           consigliato impostare un numero da 0 a -0.5;
 * 
 */

import { store } from '../store/store';
export default {
    data() {
        return {
            placeholder: "Seleziona un'opzione",
            selectedServices: [],
            isOpen: false,
            services: [],
            store
        }
    },
    props: ['array', 'selectedValues'],
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen;
        },
        closeOpen() {
            this.isOpen = false;
        },
        selectedService(service) {
            this.selectedServices.push(service);
            this.services = this.services.filter(o => o !== service);
            this.sendResult();
        },
        removeService(service) {
            this.services.push(service);
            this.selectedServices = this.selectedServices.filter(o => o !== service);
            this.services = this.services.sort()
            this.sendResult();
        },
        sendResult() {
            this.$emit('sendResult', this.selectedServices);
        },
        handleSelectedValues() {
            this.selectedServices = this.selectedValues
            this.services = this.array.filter(val => !this.selectedServices.includes(val));
        }
    },
    mounted() {
        window.addEventListener('click', this.closeOpen);
        if (this.array) this.services = [...this.array];
        if (this.selectedValues) this.handleSelectedValues();
        if (this.store.services) this.services = [...this.store.services];
    },
    beforeUnmount() {
        window.removeEventListener('click', this.closeOpen)
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

$primary: $primary;
$accent: $primary_dark;
$white: $light;
$secondary: $secondary;
$dark: $dark;
$size: 1.2;
$resize: -0.21;

.selectMultiple {
    width: 240px;
    position: relative;
    cursor: pointer;
    .error{
        border: 1px solid red;
    }

    select {
        display: none;
    }

    &>div {
        position: relative;
        z-index: 2;
        padding: 1rem 20px;
        border-radius: 8px;
        background: #fff;
        font-size: inherit;
        min-height: 60px;
        transition: box-shadow .3s ease;
        border: 1px solid $primary;
        .arrow {
            right: 1px;
            top: 0;
            bottom: 0;
            cursor: pointer;
            width: 28px;
            position: absolute;

            &:before,
            &:after {
                content: '';
                position: absolute;
                display: block;
                width: 2px;
                height: 8px;
                border-bottom: 8px solid #99A3BA;
                top: 43%;
                transition: all .3s ease;
            }

            &:before {
                right: 12px;
                transform: rotate(-130deg);
            }

            &:after {
                left: 9px;
                transform: rotate(130deg);
            }
        }

        span {
            color: $primary;
            display: block;
            position: absolute;
            left: 12px;
            cursor: pointer;
            top: 50%;
            transform: translateY(-50%);
            transition: all .3s ease;

            &.hide {
                opacity: 0;
                visibility: hidden;
                transform: translate(-4px, 0);
            }
        }

        a {
            position: relative;
            padding: 0 24px 6px 8px;
            line-height: 28px;
            color: $primary;
            display: inline-block;
            vertical-align: top;
            margin: 0 6px 0 0;

            &:hover {
                em {

                    color: $accent;
                }
                i:before, i:after{
                    background: $accent;
                }
            }

            em {
                font-style: normal;
                display: block;
                white-space: nowrap;
                cursor: pointer;
            }

            &:before {
                content: '';
                left: 0;
                top: 0;
                bottom: 6px;
                width: 100%;
                position: absolute;
                display: block;
                background: $white;
                z-index: -1;
                border-radius: 4px;
            }

            i {
                cursor: pointer;
                position: absolute;
                top: 0;
                right: 0;
                width: 24px;
                height: 28px;
                display: block;

                &:before,
                &:after {
                    content: '';
                    display: block;
                    width: 2px;
                    height: 10px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    background: $secondary;
                    border-radius: 1px;
                }

                &:before {
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:after {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

            &.notShown {
                opacity: 0;
                transition: opacity .3s ease;

                &:before {
                    width: 28px;
                    transition: width .45s cubic-bezier(.87, $resize, .19, $size) .2s;
                }

                i {
                    opacity: 0;
                    transition: all .3s ease .3s;
                }

                em {
                    opacity: 0;
                    transform: translate(-6px, 0);
                    transition: all .4s ease .3s;
                }

                &.shown {
                    opacity: 1;

                    &:before {
                        width: 100%;
                    }

                    i {
                        opacity: 1;
                    }

                    em {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                }
            }

            &.remove {
                &:before {
                    width: 28px;
                    transition: width .4s cubic-bezier(.87, $resize, .19, $size) 0s;
                }

                i {
                    opacity: 0;
                    transition: all .3s ease 0s;
                }

                em {
                    opacity: 0;
                    transform: translate(-12px, 0);
                    transition: all .4s ease 0s;
                }

                &.disappear {
                    opacity: 0;
                    transition: opacity .5s ease 0s;
                }
            }
        }
    }

    &>ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 16px;
        z-index: 1;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        visibility: hidden;
        opacity: 0;
        border-radius: 8px;
        transform: translate(0, 20px) scale(.8);
        transform-origin: 0 0;
        filter: drop-shadow(0 12px 20px rgba(#162A5A, .08));
        transition: all .4s ease, transform .4s cubic-bezier(.87, $resize, .19, $size), filter .3s ease .2s;
        max-height: 300px;
        overflow-y: auto;

        li {
            color: $primary;
            background: #fff;
            padding: 12px 16px;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            transition: background .3s ease, color .3s ease, transform .3s ease .3s, opacity .5s ease .3s, border-radius .3s ease .3s;

            &:first-child {
                border-radius: 8px 8px 0 0;

                &:last-child {
                    border-radius: 8px;
                }
            }

            &:last-child {
                border-radius: 0 0 8px 8px;

                &:first-child {
                    border-radius: 8px;
                }
            }

            &:hover {
                background: $secondary;
                color: #fff;
            }

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 6px;
                height: 6px;
                background: rgba(#000, .4);
                opacity: 0;
                border-radius: 100%;
                transform: scale(1, 1) translate(-50%, -50%);
                transform-origin: 50% 50%;
            }

            &.beforeRemove {
                border-radius: 0 0 8px 8px;

                &:first-child {
                    border-radius: 8px;
                }
            }

            &.afterRemove {
                border-radius: 8px 8px 0 0;

                &:last-child {
                    border-radius: 8px;
                }
            }

            &.remove {
                transform: scale(0);
                opacity: 0;

                &:after {
                    animation: ripple .4s ease-out;
                }
            }

            &.notShown {
                display: none;
                transform: scale(0);
                opacity: 0;
                transition: transform .35s ease, opacity .4s ease;

                &.show {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        }
    }

    &.open {
        &>div {
            box-shadow: 0 4px 20px -1px rgba(#162A5A, .12);

            .arrow {
                &:before {
                    transform: rotate(-50deg);
                }

                &:after {
                    transform: rotate(50deg);
                }
            }
        }

        &>ul {
            transform: translate(0, 12px) scale(1);
            opacity: 1;
            visibility: visible;
            filter: drop-shadow(0 16px 24px rgba(#162A5A, .16));
        }
    }
}

@keyframes ripple {
    0% {
        transform: scale(0, 0);
        opacity: 1;
    }

    25% {
        transform: scale(30, 30);
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: scale(50, 50);
    }
}
</style>