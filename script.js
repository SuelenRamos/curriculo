
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(
      'YtwBc5rVUcgDe7OAhkQ4WM7LMRgrOEZrTsTNFlcj', // This is your Application ID
      'rLo27t1D23rhpaMFm5Tgn7m7KTJX4pZoaQgQyA9l' // This is your Javascript key
    );

    const mensagem = Parse.Object.extend("mensagem");
    const mensagem1 = document.getElementById("tx_mensagem");
    const email = document.getElementById("tx_email");
    const nome = document.getElementById("tx_nome")
    const btnEnviar = document.getElementById("btnEnviar")
   
        
        
        const funcEnviar = async () => {
            

            const descricao = mensagem1.value.trim();
            const identifica = email.value.trim();

            if (!descricao) {
                alert("Favor inserir uma mensagem!");
                return;
              }
            
              if (!identifica) {
                alert("Favor inserir um email!");
                return;
              }

            const enviomensagem = new Parse.Object("mensagem");
            enviomensagem.set("mensagem", mensagem1.value);
            enviomensagem.set("email", email.value);
            enviomensagem.set("name", nome.value);

            try{
                const result = await enviomensagem.save();
                console.log("Mensagem enviada!", result.id)
                alert("Mensagem enviada!")
            }catch(erro){
                console.log(erro);
            }
        }

btnEnviar.onclick = funcEnviar;




    
    


        
