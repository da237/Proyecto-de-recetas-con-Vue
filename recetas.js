const { createApp } = Vue;

createApp({
  data() {
    return {
      lista_recetas: [
        {
          id: "001",
          nombre: "Mermelada de leche",
          descripcion: "Leche hervida con canela",
          chef: "Daniel Osorio",
          ingredientes: [
            {
              id: "i001",
              nombre: "3 cajas de leche",
            },
            {
              id: "i002",
              nombre: "3 cajas de canela",
            },
            {
              id: "i003",
              nombre: "3 cajas de mantequilla",
            },
            {
              id: "i004",
              nombre: "2 tazas de azúcar",
            },
          ],
        },
        {
          id: "002",
          nombre: "Tarta de manzana",
          descripcion: "Tarta clásica de manzana con canela",
          chef: "Laura González",
          ingredientes: [
            {
              id: "i005",
              nombre: "5 manzanas",
            },
            {
              id: "i006",
              nombre: "2 tazas de harina",
            },
            {
              id: "i007",
              nombre: "1 taza de azúcar",
            },
            {
              id: "i008",
              nombre: "1 cucharadita de canela",
            },
          ],
        },
        {
          id: "003",
          nombre: "Sopa de tomate",
          descripcion: "Sopa cremosa de tomate con albahaca",
          chef: "Carlos Pérez",
          ingredientes: [
            {
              id: "i009",
              nombre: "6 tomates",
            },
            {
              id: "i010",
              nombre: "1 cebolla",
            },
            {
              id: "i011",
              nombre: "2 dientes de ajo",
            },
            {
              id: "i012",
              nombre: "Hojas de albahaca",
            },
          ],
        },
        {
          id: "004",
          nombre: "Pan de banana",
          descripcion: "Pan dulce de banana con nueces",
          chef: "Ana María",
          ingredientes: [
            {
              id: "i013",
              nombre: "3 bananas maduras",
            },
            {
              id: "i014",
              nombre: "2 tazas de harina",
            },
            {
              id: "i015",
              nombre: "1 taza de nueces picadas",
            },
            {
              id: "i016",
              nombre: "1 taza de azúcar",
            },
          ],
        },
        {
          id: "005",
          nombre: "Ensalada César",
          descripcion: "Ensalada clásica César con aderezo",
          chef: "Roberto Martínez",
          ingredientes: [
            {
              id: "i017",
              nombre: "Lechuga romana",
            },
            {
              id: "i018",
              nombre: "1 pechuga de pollo",
            },
            {
              id: "i019",
              nombre: "Crutones",
            },
            {
              id: "i020",
              nombre: "Queso parmesano",
            },
          ],
        },
      ],
      search: "",
      show_add_receta: false,
      new_receta: {
        id: "",
        nombre: "",
        descripcion: "",
        chef: "",
        ingredientes: [],
      },
      nuevo_ingrediente: "",
      receta_seleccionada:null,
    };
  },
  computed: {
    // lista_recetas_filtrada: function (){
    //   var self = this.search
    //   return this.lista_recetas.filter(
    //     function (value){
    //       return value.nombre.includes(self.search)
    //     }
    //   )
    // }
    lista_recetas_filtrada() {
      return this.lista_recetas.filter((value) => {
        return value.nombre.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    AgregarIngrediente () {
      var new_date = new Date();
      let ingrediente = {
        id: "i1000" + new_date.getTime(),
        nombre: this.nuevo_ingrediente,
      };
      this.new_receta.ingredientes.push(ingrediente);
      // this.new_receta.ingredientes.push('nuevo_ingrediente')
      // console.log(this.nuevo_ingrediente)
    },
    AgregarReceta (){
      return this.lista_recetas.push(this.new_receta)
    },
    SeleccionarReceta ( receta ){
      return this.receta_seleccionada = receta
    }
  },
}).mount("#appReceta");
