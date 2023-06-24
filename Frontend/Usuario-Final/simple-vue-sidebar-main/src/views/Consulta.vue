<template>
    <div class="pt-5 pl-5 pr-5">
      <v-card color="#55B4B0" rounded="xl">
        <v-card-title class="justify-center text-h4 pt-5 pb-5 font-weight-black">CONSULTA POR CODIGO DE MEDICINA</v-card-title>
      </v-card>
    
      <v-hover v-slot="{ hover }">
        <v-card class="mx-auto mt-10" color="grey lighten-4" max-width="400" @click="setComponentes">         
          <v-img :aspect-ratio="16/9" src="https://www.collinsdictionary.com/images/full/medicine_524556844_1000.jpg">
            <v-expand-transition>
              <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal text-h8 white--text px-10 pt-10" style="height: 100%;">
                Aquí podrá consultar una medicina mediante su código. Los datos mostrados en nuestro sistema aparecerán de acuerdo al código ingresado.
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>

      <div class="pt-5" align="center" justify="center">
        <v-card v-if="reveal == true" color="#55B4B0" rounded="xl" class="mx-10" max-width="60%">
          <v-card-title class="justify-center text-h5 pt-5 pb-5 font-weight-black">CONSULTA</v-card-title>
            <form @submit.prevent="submit" color="blue lighten-1">
              <v-text-field class="pl-10 pt-2 pr-10" v-model="selectCode" color="white" label="CODIGO"></v-text-field>
              <v-col cols="12" class="pb-3 pl-10 pt-2 pr-10">
                  <v-btn @click="submit(selectCode)" block color="blue lighten-1">ENVIAR</v-btn>
              </v-col>
            </form>
        </v-card>
      </div>

      <div class="pt-5" align="center" justify="center">
        <v-card v-if="hide == false" color="#55B4B0" rounded="xl" class="mx-10" max-width="57%">
          <v-row>
            <div class="pl-12 pr-15">
              <v-row>            
                <v-card-title class="txtN">{{ name }}</v-card-title>
              </v-row>
              <v-card-title class="inf">INFORMACION</v-card-title>
              <v-row class="pl-3 pt-1">
                <v-card-subtitle class="sub">Laboratorio/Drogueria:</v-card-subtitle>
                <v-card-subtitle class="data pl-2"> {{ laboratory }}</v-card-subtitle>
              </v-row>
              <v-row class="pl-3 pt-1">
                <v-card-subtitle class="sub">Forma farmacéutica:</v-card-subtitle>
                <v-card-subtitle class="data pl-2"> {{ form }}</v-card-subtitle>
              </v-row>
              <v-row class="pl-3 pt-1">
                <v-card-subtitle class="sub">Concentración: </v-card-subtitle>
                <v-card-subtitle class="data pl-14"> {{ concentration }}</v-card-subtitle>
              </v-row>
              <v-row class="pl-3 pt-1">
                <v-card-subtitle class="sub">Lote - Código: </v-card-subtitle>
                <v-card-subtitle class="data pl-16"> {{ barcode }}</v-card-subtitle>
              </v-row>
            </div>
            
          </v-row>

           <v-row class="pl-3 pt-1">   
              </v-row>
          <v-row class="pl-3 pt-1">
              </v-row>
         

        </v-card>
      </div>

      <div v-if="snb == true" align="center" justify="center" class="mt-15">
        <v-card v-model="snackbar" rounded="xl" class="mx-10 blue darken-2" max-width="60%">
          <v-row>
            <v-card-title class="justify-center text-h5 pt-5 pb-5 font-weight-black">{{ text }}</v-card-title>
            <v-spacer></v-spacer>
            <v-btn text-right class="text-h5 mr-12 mt-5 red darken-2" @click="snb = false">Cerrar</v-btn>
          </v-row>
        </v-card>
        <!-- <v-snackbar v-model="snackbar" :timeout="-1" :value="true" bottom :multi-line="multiLine" color="primary" align="center" justify="center">{{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>  -->
      </div>

    </div>
</template>

<script>

    import MedicinesApiService from "@/services/medicines-api.service";

    export default {
      data: () => ({
        reveal: false,
        medicines: [],
        codes: [],
        windows: null,
        wJs: null,
        total: '',
        selectCode: null,
        hide: true,
        idCode: {},
        name: '',
        laboratory: '',
        concentration: '',
        form: '',
        expiration: '',
        quantity: '',
        barcode: '',
        snb: false,
        multiLine: true,
        snackbar: false
      }),

      created() {
        this.retrieveMedicines();
      },

      methods: {

        async setComponentes() {
          this.reveal = true;
          this.hide = true;
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

        async submit(id) {
            // console.log('SUBMIT: ' + id);

            console.log('BARCODE ' + id.toString());
            console.log('BARCODE ' + this.codes.toString());
            

            for (var i = 0; i < this.codes.length; i++) {
                if (id == this.codes[i]) {
                    console.log('CORRECTO CODE')
                    this.reveal = false;
                    this.retrieveMedicineById(this.idCode[id]);
                    console.log('print ' + this.idCode[id].toString());
                    this.hide = false;
                    break
                }
            }
            if (this.hide == true) {
                this.snb = true;
                this.snackbar = true;
                this.text = 'CODIGO INGRESADO NO REGISTRADO';
                console.log('CODIGO INGRESADO NO REGISTRADO')
            }
        },

        retrieveMedicineById(id){
          MedicinesApiService.getMedicineById(id)
          .then(response => {
              let respDataStr = response.data.response;
              let jsObject = JSON.parse(respDataStr);
              console.log(jsObject);
              this.name = jsObject.name;
              this.laboratory = jsObject.laboratory;
              this.concentration = jsObject.concentration,
              this.form = jsObject.form,
              //this.expiration = '2020-10-10',
              this.expiration = jsObject.expiration,
              this.quantity = jsObject.quantity,
              this.barcode = jsObject.code,
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
.txtN {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 30px;
    color: rgb(255, 255, 255);
    font-weight: 600;
}

.inf {
  color: rgb(0, 0, 0);
  font-weight: 800;
  font-size: 18px;
}

.sub {
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-size: 18px;
}

.data {
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size: 18px;
}
</style>