const app = Vue.createApp({
     template:`<h1>Hallo, {{ name }}!! </h1>
     <img :src="myImage">
     <buttonv-on:click="getNewImage()">Klick mich!</button>
     `,
     data() {
        return {
            name: 'Papatastisch',
            myImage: 'https://picsum.photos/200/300'
        }

     },
     methods: {
        getNewImage() {
             const width = MAth.floor(Math.random()* 500);
            this.myImage = `https://picsum.photos/${width}/300`;
        }
     },
});

app.mount('#app')
