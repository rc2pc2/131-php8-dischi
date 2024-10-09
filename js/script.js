// 
const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "http://localhost/131-php8-dischi/api/server.php",
            discs : [],
        }
    },
    methods:{
        getDiscs(url){
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    this.discs = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created(){
        this.getDiscs(this.apiUrl);
    }
}).mount('#app')


// # creo un metodo per chiamare la nostra api attraverso una chiamata GET e ricevere la lista dei miei dischi
// ! sovrascrivo discs con la risposta ricevuta
// % faccio in modo che appena la mia applicazione venga caricata automaticamente avvenga la chiamata ==> created()