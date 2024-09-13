

const { createApp, ref } = Vue;


const app = createApp ({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>{{ author }}</p>
    // `,

    setup() {

        const author    = ref("---");
        const message   = ref("Soy Jesus Solis"); 

        const changeQuote = () => {
            author.value  = "Bruce Wayne"
            message.value = 'Solis Martinez'
        }

        // setTimeout(() => {
        //     author.value  = "Bruce Wayne"
        //     message.value = 'Solis Martinez'
        // }, 1500);

        return {
            author,
            changeQuote,
            message,
        }
    }

})

app.mount('#myApp');