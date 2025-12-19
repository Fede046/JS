document.addEventListener('DOMContentLoaded', function () {
	let rubrica = []; 
	
	document.getElementById("Invia").addEventListener("click", function(){
		let rub = document.getElementById("rubrica");
		let nome = document.getElementById("nome").value.trim();
		let tel = document.getElementById("tel").value.trim();
		let email = document.getElementById("email").value.trim();
		
		// Validazione
		if ((nome !== "" && /^[A-Za-z]+$/.test(nome)) && 
		    (tel !== "" && /^[0-9]{10}$/.test(tel)) && 
		    (email !== "" && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email))) {
			
			// Controlla se nome già esistente
			let esistente = rubrica.find(contatto => contatto.nome === nome);
			if (esistente) {
				alert("Errore: contatto con questo nome già presente!");
				return;
			}
			
			// Aggiungi contatto
			rubrica.push({nome: nome, tel: tel, email: email});
			
			// Ordina alfabeticamente
			rubrica.sort((a, b) => a.nome.localeCompare(b.nome));
			
			// Ricarica la visualizzazione
			mostraRubrica();
			
			// Pulisci i campi
			document.getElementById("nome").value = "";
			document.getElementById("tel").value = "";
			document.getElementById("email").value = "";
			
		} else {
			alert("Errore: compila tutti i campi correttamente");
		}
	});
	
	// Funzione per mostrare la rubrica
	function mostraRubrica() {
		let rub = document.getElementById("rubrica");
		rub.innerHTML = ""; // Svuota
		
		rubrica.forEach((contatto, indice) => {
			let div = document.createElement("div");
			
			let valori = document.createElement("span");
			valori.textContent = `${contatto.nome} - ${contatto.tel} - ${contatto.email}`;
			
			let pulsante = document.createElement("button");
			pulsante.textContent = "Rimuovi";
			pulsante.onclick = function() {
				rubrica.splice(indice, 1);
				mostraRubrica(); // Ricarica
			};
			
			div.appendChild(valori);
			div.appendChild(pulsante);
			rub.appendChild(div);
		});
	}
});