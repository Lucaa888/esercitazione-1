let firstName = "";
        while (!firstName) {
            firstName = prompt("Qual è il tuo nome?");
            if (firstName === null) {
                alert("Per favore, inserisci un nome per continuare.");
            } else {
                firstName = firstName.trim();  
            }
        }
        
        console.log("Benvenuto " + firstName + "!");

        
        let domande = [
            { domanda: "Qual è il colore del cielo?", risposta: "blu" },
            { domanda: "Quanto fa 2 + 2?", risposta: "4" },
            { domanda: "Qual è il mese corrente?", risposta: "settembre" },
            { domanda: "Qual è la capitale d'Italia?", risposta: "roma" },
            { domanda: "Qual è il frutto del melo?", risposta: "mela" },
            { domanda: "Qual è il più grande mammifero?", risposta: "balena" },
            { domanda: "Chi ha scoperto l'America?", risposta: "colombo" }
        ];

        let risposteCorrette = 0;

        
        for (let i = 0; i < domande.length; i++) {
            let userAnswer = prompt(domande[i].domanda);

            
            userAnswer = userAnswer ? userAnswer.trim().toLowerCase() : "";

            if (userAnswer === domande[i].risposta) {
                console.log("Risposta corretta!");
                risposteCorrette++;
            } else {
                console.log(Risposta sbagliata! La risposta corretta era: ${domande[i].risposta});
            }
        }

        
        let percentualeCorrette = (risposteCorrette / domande.length) * 100;

        
        console.log(Hai risposto correttamente al ${percentualeCorrette}% delle domande.);