const Parse = require('parse');
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
        // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
        Parse.initialize(
          'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is your Application ID
          '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW' // This is your Javascript key
        );


    const mensagem = Parse.Object.extend("mensagem");
    const mensagem1 = document.getElementById("inputMensagem");
    const email = document.getElementById("inputEmail");
    const enviomensagem = new mensagem();
    const btnEnviar = document.getElementById("btnEnviar")

   
    const enviarMensagem= async () => {
        enviomensagem.set("mensagem", mensagem1);
        enviomensagem.set("email", email);

        enviomensagem.save();
        alert("A mensagem foi enviada!");
    };

    btnEnviar.onclick = enviarMensagem;


    
    



        
