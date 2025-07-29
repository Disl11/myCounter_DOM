 Module : M5 JavaScript 
TP :Manipulation du DOM 
Compteur interactif en JavaScript pur 
Objectif : créer dynamiquement tout le contenu via JavaScript et manipuler le DOM. 
Contraintes : - Ne rien écrire dans le fichier HTML (pas de balises input, button, etc.). - Aucun CSS dans le code JavaScript. - Tout doit être réalisé via JS : création des éléments, écouteurs d'événements, mise à 
    jour du DOM. 
Fonctionnalités attendues : 
 1.Crée et ajouter dynamiquement un container parent dans le body qui contient tous les  
 élément => document.body.appendChild(myElement) 
 2. Afficher un compteur initialisé à 0 dans un élément (h2 ou similaire). 
 3. Créer un bouton “Incrémenter +” qui augmente la valeur du compteur à chaque clic. 
 4. Créer un bouton “Décrémenter –” qui diminue le compteur mais ne descend jamais     
     en dessous de zéro. 
 5. Créer un bouton “Reset” qui remet le compteur à zéro et réinitialise la limite (voir ci- 
     dessous). 
Bonus :  
 6. Ajouter un champ input permettant de fixer une **valeur maximale facultative** : - Si l’utilisateur saisit une valeur, le compteur ne peut pas la dépasser. - Afficher en clair la limite actuelle, par exemple via un paragraphe. 
 7. La limite maximale doit se mettre à jour dès que l’utilisateur modifie l’input 
    (événement input). 
 8. Reset doit remettre le compteur à zéro, vider l’input, et afficher “∞” comme limite. 
Rappel : - Utilisez `document.createElement` pour créer les éléments. - Affectez des écouteurs via `addEventListener`. - Lisez la valeur d’un input via `input.value`. - Mettez à jour l’affichage en modifiant `.textContent` des éléments.
