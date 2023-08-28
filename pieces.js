// const respose = await fetch("pieces-autos.json");
// const pieces = await respose.json();
// //creation des elements
// const article = pieces[0];
// const imageElement = document.createElement("img");
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerHTML = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerHTML = `Prix : ${article.prix} €`;
// const categorieElement = document.createElement("p");
// categorieElement.innerHTML = article.categorie;

// //ajout dans un parent existant
// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(nomElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);

const reponses = await fetch("pieces-autos.json");
const pieces = await reponses.json();
//je cree mes elements
/*

const articles = pieces[0];
const imageElement = document.createElement("img"); 
const nomElement = document.createElement("h2"); 
const prixElement = document.createElement("p"); 
const categorieElement = document.createElement("p"); 
const descriptionElement = document.createElement("p"); 
const disponibiliteElement = document.createElement("p");  

//je les donne des valeurs à mes elements
imageElement.src = articles.image;
nomElement.innerHTML = articles.nom;
prixElement.innerHTML = `Prix : ${articles.prix} € (${articles.prix < 35 ? "€" : "€€€"})`;
categorieElement.innerHTML = articles.categorie ?? "aucune categorie";
descriptionElement.innerHTML = articles.description ?? "Aucune description";
disponibiliteElement.innerHTML = articles.disponibilite  ? "En stock" : "Rupture de stock";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);*/
for (let i = 0; i < pieces.length; i++) {
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement('article');
    // On crée l’élément
    const imageElement = document.createElement("img");
    const nomElement = document.createElement("h2");
    const prixElement = document.createElement("p");
    const categorieElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const disponibiliteElement = document.createElement("p");


    //je les donne des valeurs à mes elements
    imageElement.src = pieces[i].image;
    nomElement.innerHTML = pieces[i].nom;
    prixElement.innerHTML = `Prix : ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    categorieElement.innerHTML = pieces[i].categorie ?? "aucune categorie";
    descriptionElement.innerHTML = pieces[i].description ?? "Aucune description";
    disponibiliteElement.innerHTML = pieces[i].disponibilite ? "En stock" : "Rupture de stock";

    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibiliteElement);
}

