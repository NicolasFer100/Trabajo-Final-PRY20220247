(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-678c2578"],{"0d3c":function(t,e,s){"use strict";s.r(e);var a=s("8336"),i=s("b0af"),o=s("99d9"),n=s("62ad"),l=s("0789"),c=s("16b7"),r=s("f2e7"),d=s("58df"),u=s("d9bd"),h=Object(d["a"])(c["a"],r["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(u["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(u["c"])("v-hover should only contain a single element",this),t)}}),p=s("adda"),v=s("0fd9"),m=(s("20f6"),s("80d2")),C=Object(m["e"])("spacer","div","v-spacer"),b=s("8654"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-5 pl-5 pr-5"},[s(i["a"],{attrs:{color:"#55B4B0",rounded:"xl"}},[s(o["b"],{staticClass:"justify-center text-h4 pt-5 pb-5 font-weight-black"},[t._v("CONSULTA POR CODIGO DE MEDICINA")])],1),s(h,{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[s(i["a"],{staticClass:"mx-auto mt-10",attrs:{color:"grey lighten-4","max-width":"400"},on:{click:t.setComponentes}},[s(p["a"],{attrs:{"aspect-ratio":16/9,src:"https://www.collinsdictionary.com/images/full/medicine_524556844_1000.jpg"}},[s(l["a"],[a?s("div",{staticClass:"d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal text-h8 white--text px-10 pt-10",staticStyle:{height:"100%"}},[t._v(" Aquí podrá consultar una medicina mediante su código. Los datos mostrados en nuestro sistema aparecerán de acuerdo al código ingresado. ")]):t._e()])],1)],1)]}}])}),s("div",{staticClass:"pt-5",attrs:{align:"center",justify:"center"}},[1==t.reveal?s(i["a"],{staticClass:"mx-10",attrs:{color:"#55B4B0",rounded:"xl","max-width":"60%"}},[s(o["b"],{staticClass:"justify-center text-h5 pt-5 pb-5 font-weight-black"},[t._v("CONSULTA")]),s("form",{attrs:{color:"blue lighten-1"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s(b["a"],{staticClass:"pl-10 pt-2 pr-10",attrs:{color:"white",label:"CODIGO"},model:{value:t.selectCode,callback:function(e){t.selectCode=e},expression:"selectCode"}}),s(n["a"],{staticClass:"pb-3 pl-10 pt-2 pr-10",attrs:{cols:"12"}},[s(a["a"],{attrs:{block:"",color:"blue lighten-1"},on:{click:function(e){return t.submit(t.selectCode)}}},[t._v("ENVIAR")])],1)],1)],1):t._e()],1),s("div",{staticClass:"pt-5",attrs:{align:"center",justify:"center"}},[0==t.hide?s(i["a"],{staticClass:"mx-10",attrs:{color:"#55B4B0",rounded:"xl","max-width":"57%"}},[s(v["a"],[s("div",{staticClass:"pl-12 pr-15"},[s(v["a"],[s(o["b"],{staticClass:"txtN"},[t._v(t._s(t.name))])],1),s(o["b"],{staticClass:"inf"},[t._v("INFORMACION")]),s(v["a"],{staticClass:"pl-3 pt-1"},[s(o["a"],{staticClass:"sub"},[t._v("Forma farmacéutica:")]),s(o["a"],{staticClass:"data pl-2"},[t._v(" "+t._s(t.form))])],1),s(v["a"],{staticClass:"pl-3 pt-1"},[s(o["a"],{staticClass:"sub"},[t._v("Concentración: ")]),s(o["a"],{staticClass:"data pl-14"},[t._v(" "+t._s(t.concentration))])],1),s(v["a"],{staticClass:"pl-3 pt-1"},[s(o["a"],{staticClass:"sub"},[t._v("Fecha de expiración: ")]),s(o["a"],{staticClass:"data pl-3"},[t._v(" "+t._s(t.expiration))])],1),s(v["a"],{staticClass:"pl-3 pt-1"},[s(o["a"],{staticClass:"sub"},[t._v("Cantidad actualizada: ")]),s(o["a"],{staticClass:"data pl-1"},[t._v(" "+t._s(t.quantity))])],1),s(v["a"],{staticClass:"pl-3 pt-1"},[s(o["a"],{staticClass:"sub"},[t._v("Lote - Código: ")]),s(o["a"],{staticClass:"data pl-16"},[t._v(" "+t._s(t.barcode))])],1)],1),s("div",[s(p["a"],{attrs:{src:"https://us.123rf.com/450wm/sylverarts/sylverarts2008/sylverarts200800157/153123800-s%C3%ADmbolo-de-caduceo-hecho-con-alas-de-p%C3%A1jaro-y-serpientes-venenosas-ilustraci%C3%B3n-vectorial-conceptual-.jpg?ver=6","max-height":"400","max-width":"400"}})],1)])],1):t._e()],1),1==t.snb?s("div",{staticClass:"mt-15",attrs:{align:"center",justify:"center"}},[s(i["a"],{staticClass:"mx-10 blue darken-2",attrs:{rounded:"xl","max-width":"60%"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s(v["a"],[s(o["b"],{staticClass:"justify-center text-h5 pt-5 pb-5 font-weight-black"},[t._v(t._s(t.text))]),s(C),s(a["a"],{staticClass:"text-h5 mr-12 mt-5 red darken-2",attrs:{"text-right":""},on:{click:function(e){t.snb=!1}}},[t._v("Cerrar")])],1)],1)],1):t._e()],1)},g=[],y=s("d4ce"),x={data:()=>({reveal:!1,medicines:[],codes:[],windows:null,wJs:null,total:"",selectCode:null,hide:!0,idCode:{},name:"",concentration:"",form:"",expiration:"",quantity:"",barcode:"",snb:!1,multiLine:!0,snackbar:!1}),created(){this.retrieveMedicines()},methods:{async setComponentes(){this.reveal=!0,this.hide=!0},retrieveMedicines(){y["a"].getAllMedicines().then(t=>{console.log(t.data.response);let e=t.data.response,s=JSON.parse(e);this.windows=s;for(var a=0;a<this.windows.length;a++)this.codes.push(this.windows[a]["Record"].code),this.idCode[this.windows[a]["Record"].code]="MEDICINE"+a.toString();console.log("CODES "+this.codes.toString())}).catch(t=>{console.log(t)})},async submit(t){console.log("BARCODE "+t.toString()),console.log("BARCODE "+this.codes.toString());for(var e=0;e<this.codes.length;e++)if(t==this.codes[e]){console.log("CORRECTO CODE"),this.reveal=!1,this.retrieveMedicineById(this.idCode[t]),console.log("print "+this.idCode[t].toString()),this.hide=!1;break}1==this.hide&&(this.snb=!0,this.snackbar=!0,this.text="CODIGO INGRESADO NO REGISTRADO",console.log("CODIGO INGRESADO NO REGISTRADO"))},retrieveMedicineById(t){y["a"].getMedicineById(t).then(t=>{let e=t.data.response,s=JSON.parse(e);console.log(s),this.name=s.name,this.concentration=s.concentration,this.form=s.form,this.expiration=s.expiration,this.quantity=s.quantity,this.barcode=s.code,console.log("na "+this.name)}).catch(t=>{console.log(t)})}}},_=x,O=(s("8940"),s("2877")),w=Object(O["a"])(_,f,g,!1,null,"10ebc0b3",null);e["default"]=w.exports},"16b7":function(t,e,s){"use strict";var a=s("2b0e");e["a"]=a["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const s=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),s)}}})},"20f6":function(t,e,s){},"6c39":function(t,e,s){},8940:function(t,e,s){"use strict";var a=s("6c39"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-678c2578.e7dbc56e.js.map