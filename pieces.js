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
disponibiliteElement.innerHTML = ` ${articles.disponibilite == true ? "En stock" : "Rupture de stock"}`;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);

