<template>
    <div class="pt-5 pl-5 pr-5">
      <v-card color="#55B4B0" rounded="xl">
        <v-card-title class="justify-center text-h4 pt-5 pb-5 font-weight-black">ACTUALIZAR POR EL CODIGO DE LA MEDICINA</v-card-title>
      </v-card>

    <v-row class="pt-10"> 
        <v-col cols="12" sm="8">
                <v-card color="#55B4B0" rounded="xl">
                    <v-card-title class="justify-center text-h5 pt-5 pb-5 font-weight-black">INGRESAR CODIGO DE LA MEDICINA</v-card-title>

                    <form @submit.prevent="submit" color="blue lighten-1">
                    <!-- <v-autocomplete :items="codes" label="CODE MEDICINE" class="pl-10 pt-2 pr-10" v-model="selectCode" :search-input.sync="search" color="white" hide-no-data hide-selected></v-autocomplete> -->
                    <v-text-field class="pl-10 pt-2 pr-10" v-model="selectCode" color="white" label="CODIGO MEDICINA"></v-text-field>
                    <v-col cols="12" class="pb-3 pl-10 pt-2 pr-10">
                        <v-btn @click="submit(selectCode)" block color="blue lighten-1">ENVIAR</v-btn>
                    </v-col>
                    </form>
                </v-card>
                <h1 class="pt-10"></h1>
                <v-card v-if="hide == false" color="#55B4B0" rounded="xl">
                    <v-card-title class="justify-center text-h5 pt-5 pb-5 font-weight-black">MEDICINA SELECCIONADA</v-card-title>
                    <form @submit.prevent="update" color="blue lighten-1">
                    <vue-title title="Static Title"></vue-title>
                    <!-- <v-text-field v-model="name" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: name}" hint="Generic Name"></v-text-field> -->
                    <v-text-field color="white" v-model="laboratory" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: laboratory}" label="Nombre del Laboratorio/Drogueria"></v-text-field>
                    <v-text-field color="white" v-model="name" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: name}" label="Nombre Génerico"></v-text-field>
                    <v-text-field color="white" v-model="concentration" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: concentration }" label="Concentración"></v-text-field>
                    <v-text-field color="white" v-model="form" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: form }" label="Forma Farmacéutica"></v-text-field>
                    <v-text-field color="white" type="date" v-model="expiration" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: expiration }" label="Fecha de Expiración"></v-text-field>
                    <v-text-field color="white" type="number" v-model="quantity" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: quantity }" label="Cantidad"></v-text-field>
                    <v-text-field color="white" class="pl-10 pt-2 pr-10" v-model="barcode" v-bind="{ placeholder: barcode }" label="Lote - Código" disabled></v-text-field>
                    <v-col cols="12" class="pb-3 pl-10 pt-2 pr-10">
                        <v-btn @click="update" block color="blue lighten-1">ACTUALIZAR</v-btn>
                    </v-col>
                    <!-- <v-text-field v-model="concentration" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: concentration }" hint="Concentration"></v-text-field>
                    <v-text-field v-model="form" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: form }" hint="Pharmaceutical Form"></v-text-field>
                    <v-text-field type="date" v-model="expiration" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: expiration }" hint="Expiration Date"></v-text-field>
                    <v-text-field type="number" v-model="quantity" class="pl-10 pt-2 pr-10" v-bind="{ placeholder: quantity }" hint="Quantity"></v-text-field>
                    <v-text-field class="pl-10 pt-2 pr-10" v-bind="{ placeholder: barcode }" disabled></v-text-field>
                    <v-col cols="12" class="pb-3 pl-10 pt-2 pr-10">
                        <v-btn @click="update" block color="blue lighten-1">UPDATE</v-btn>
                    </v-col> -->
                    </form>
                </v-card>
        </v-col>

        <v-col cols="12" sm="3">
        <v-img :src="require('../assets/sym.png')" class="pl-20" contain height="400"/>
        </v-col>
    </v-row>

    <div v-if="snb == true">
      <v-snackbar v-model="snackbar" :timeout="-1" :value="true" bottom :multi-line="multiLine" color="primary">{{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar> 
    </div>

    </div>
</template>

<script>

import MedicinesApiService from "@/services/medicines-api.service";
import axios from "axios";

export default {
        data: () => ({
        windows: null,
        idCode: {},
        codes: [],
        selectCode: null,
        hide: true,
        laboratory: '',
        name: '',
        concentration: '',
        form: '',
        expiration: '',
        quantity: '',
        barcode: '',
        verification1: null,
        verification2: null,
        verification3: null,
        search: null,
        text: '',
        snb: false,
        multiLine: true,
        snackbar: false
    }),

    created() {
        this.retrieveMedicines();
    },
    
    methods: {
        async submit(id) {
            // console.log('SUBMIT: ' + id);

            console.log('BARCODE ' + id)
            

            for (var i = 0; i < this.codes.length; i++) {
                if (id == this.codes[i]) {
                    console.log('CORRECTO CODE')
                    this.retrieveMedicineById(this.idCode[id]);
                    this.hide = false;
                    break
                }
            }
            if (this.hide == true) {
                this.snb = true;
                this.snackbar = true;
                this.text = 'CODIGO INGRESADO NO IDENTIFICADO';
                console.log('CODE NO IDENTIFICADO')
            }
        },

        async update() {

            var tiempoTranscurrido = Date.now();
            var hoy = new Date(tiempoTranscurrido);
            var exp = new Date(this.expiration);
            
            if (exp > hoy) {
                if (this.name.length > 0 && this.concentration.length > 0 && this.form.length > 0
                && this.quantity > 0) {
                    let data = {
                    "laboratory": this.laboratory,
                    "name": this.name,
                    "concentration": this.concentration,
                    "form": this.form,
                    "expiration": this.expiration,
                    "quantity": this.quantity,
                    "verification1": this.verification1,
                    "verification2": this.verification2,
                    "verification3": this.verification3,
                    }
                    await axios.put(`http://localhost:8080/api/updatemedicine/${ this.idCode[this.selectCode] }`, data)
                    .then((result) => {
                        console.log(result);
                    })

                    this.$router.push({name: 'Medicines'});
                } else {
                    this.snb = true;
                    this.snackbar = true;
                    this.text = 'REVISAR LOS DATOS ENTRANTES';
                    console.log('REVISAR LOS DATOS ENTRANTES')
                }  
            } else {
                this.snb = true;
                this.snackbar = true;
                this.text = 'FECHA NO ACEPTADA';
                console.log('FECHA NO ACEPTADA')
            }

        },

        retrieveMedicines(){
            MedicinesApiService.getAllMedicines()
            .then(response => {
                console.log(response.data.response)
                //this.medicines = response.data.response;
                let respDataStr = response.data.response;
                let jsObject = JSON.parse(respDataStr);
                this.windows = jsObject;
                for (var i = 0; i < this.windows.length; i++) {
                    this.codes.push(this.windows[i]["Record"].code);
                    this.idCode[this.windows[i]["Record"].code] = 'MEDICINE' + i.toString();
                }
                console.log('CODES '+ this.codes.toString());
            })
            .catch((e) => {
                console.log(e);
            });
        },

        retrieveMedicineById(id){
            MedicinesApiService.getMedicineById(id)
            .then(response => {
                let respDataStr = response.data.response;
                let jsObject = JSON.parse(respDataStr);
                console.log(jsObject);
                this.laboratory = jsObject.laboratory;
                this.name = jsObject.name;
                this.concentration = jsObject.concentration,
                this.form = jsObject.form,
                //this.expiration = '2020-10-10',
                this.expiration = jsObject.expiration,
                this.quantity = jsObject.quantity,
                this.barcode = jsObject.code,
                this.verification1 = jsObject.verification1,
                this.verification2 = jsObject.verification2,
                this.verification3 = jsObject.verification3,
                console.log('na '+ this.name);
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }
}
</script>

<style scoped>
</style>