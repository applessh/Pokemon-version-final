function modifStatut(element, message) {
	element.innerHTML = message;
}
 
function valide(valeur) {
	return valeur.innerHTML == 0;
}
 
function icone(bouton, joueur) {
	bouton.innerHTML = joueur;
}
 
function gagnant(ex, poke, tour) {
	if (ex[0].innerHTML == poke[tour] &&
		ex[1].innerHTML == poke[tour] &&
		ex[2].innerHTML == poke[tour])
	return true;
 
	if (ex[3].innerHTML == poke[tour] &&
		ex[4].innerHTML == poke[tour] &&
		ex[5].innerHTML == poke[tour])
	return true;
 
	if (ex[6].innerHTML == poke[tour] &&
		ex[7].innerHTML == poke[tour] &&
		ex[8].innerHTML == poke[tour])
	return true;
 
	if (ex[0].innerHTML == poke[tour] &&
		ex[3].innerHTML == poke[tour] &&
		ex[6].innerHTML == poke[tour])
	return true;
 
	if (ex[1].innerHTML == poke[tour] &&
		ex[4].innerHTML == poke[tour] && 
		ex[7].innerHTML == poke[tour])
	return true;
 
	if (ex[2].innerHTML == poke[tour] &&
		ex[5].innerHTML == poke[tour] &&
		ex[8].innerHTML == poke[tour])
	return true;
 
	if (ex[0].innerHTML == poke[tour] &&
		ex[4].innerHTML == poke[tour] &&
		ex[8].innerHTML == poke[tour])
	return true;
 
	if (ex[2].innerHTML == poke[tour] &&
		ex[4].innerHTML == poke[tour] &&
		ex[6].innerHTML == poke[tour])
	return true;
}
 
function egale(ex, poke, tour) {
	for (var i = 0, len = ex.length; i < len; i++) {
		if (ex[i].innerHTML == 0)
		return false
	}
	return true
}
 
function morpion() {
	var tour = Math.floor((Math.random())),
	fin = false,
	afficheur = document.querySelector("#jeuStatus"),
        ex = document.querySelectorAll("#jeu button");
        modifStatut(afficheur, "Le jeu peut démarrer.<br/>Joueur " + poke[tour] + " ("+ pokenom[tour] +"), &#224; vous de jouer...");
       
	for (var i = 0, len = ex.length; i < len; i++) {
		ex[i].addEventListener("click", function() {
			if (fin)
				return;
 
			if (valide(this)) {
				icone(this, poke[tour]);
				if (gagnant(ex, poke, tour)) {
					modifStatut(afficheur, "Le pokémon " + poke[tour] + " ("+ pokenom[tour] +") a gagné !<br /><a href=\"js.html\">Rejouer ?</a>");
					fin = true;
				} else if (egale(ex, poke, tour)) {
					modifStatut(afficheur, "Match Nul !<br /><a href=\"js.html\">Rejouer ?</a>");
					fin = true;
				} else {
					tour++;
					tour = tour % 2;
					modifStatut(afficheur, "Joueur " + poke[tour] + " ("+ pokenom[tour] +"), c'est &#224; votre tour !");
				}
			} else {             
			modifStatut(afficheur, "Quelqu'un a déjà joué ici !");
			}
		});
	}
}
 
function verifpoke() {
	if (this.innerHTML.split(">")[1] != pokenom[currentSelection - 1]) {
		pokenom[currentSelection] = this.innerHTML.split(">")[1];
		poke[currentSelection] = this.innerHTML.split(">")[0] + ">";
		alert("Joueur " + (currentSelection + 1) + ", vous avez choisi " + pokenom[currentSelection]);
		currentSelection++;
		modifStatut(document.querySelector("#jeuStatus"), "Joueur 2, choisi ton pokémon");

		if (currentSelection > 1) {
			demarrer = true;
			document.querySelector("#jeu").style.display = "";
			document.querySelector("#selectionpoke").style.display = "none";
			morpion();
        }
	}
}
 
function selectionpoke() {
	var afficheur = document.querySelector("#jeuStatus"),
		choixpok = document.querySelectorAll("#selectionpoke button"),
		jpgpoke = ['<img src="img/Racaillou.jpg">', '<img src="img/Pikachu.jpg">', '<img src="img/Mew.jpg">', '<img src="img/Tiplouf.jpg">', '<img src="img/Rattatac.jpg">', '<img src="img/Salameche.jpg">'],
		pseudopoke = ['Racaillou', 'Pikachu', 'Mew', 'Tiplouf', 'Rattatac', 'Salameche'];

	document.querySelector("#jeu").style.display = "none";
	modifStatut(afficheur, "Joueur " + (currentSelection + 1) + ", choisi ton pokémon");
	
	for (var i = 0, len = choixpok.length; i < len; i++) {
		choixpok[i].innerHTML = jpgpoke[i] + pseudopoke[i];
		choixpok[i].addEventListener("click", verifpoke);
	}
}
 
var currentSelection = 0,
	poke = ['', ''],
	pokenom = ['', ''];
 
selectionpoke();