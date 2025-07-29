const div = document.createElement("div"); // creation d'une div
div.classList.add("container"); // ajouter la div avec le Id Container.
document.body.appendChild(div); //  div ajouter  dans le body comment enfant du parent body (a partir de ce moment la div le style de la div et possible d'être modifier dans le css)

const titre = document.createElement("h1");
titre.textContent = "My counter";
div.appendChild(titre); // ajouter dans la div la variable titre

// ------------------- Création du competeur et l'afficher ---------------------
let compteur = 0; // création de la variable pour récuper les incrémentation

let afficherScore = document.createElement("p"); // Créetion de l'élement pour afficher
afficherScore.textContent = compteur; // Création
div.appendChild(afficherScore); // afficher dans la div "afficherScore"

// -------------- création des bouttons   ----------------
const btn1 = document.createElement("button"); // création variable  élement button ( pas visible)
btn1.classList.add("btn1"); //  ajouter button
btn1.textContent = "+"; // Changer text du button
div.appendChild(btn1); // btn 1 l'enfant de body  pour afficher

const btn2 = document.createElement("button");
btn2.classList.add("btn2");
btn2.textContent = "-";
div.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.classList.add("reset");
btn3.textContent = "Reset";
div.appendChild(btn3);

const input = document.createElement("input");
input.classList.add("input");
input.placeholder = "Entrez une valeur max";
div.appendChild(input);

//====================   addeventListener ===================

btn1.addEventListener("click", function () {
  compteur++;
  afficherScore.textContent = compteur;
});

btn2.addEventListener("click", function () {
  compteur--;
  // ajouter une condition pour pas passé en negatif
  if (compteur < 0) {
    compteur = 0;
  }
  afficherScore.textContent = compteur;
});

btn3.addEventListener("click", function () {
  compteur = 0;
  afficherScore.textContent = compteur;
});
