const respose = await fetch("pieces-autos.json");
const pieces = await respose.json();
//creation des elements
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerHTML = article.nom;
const prixElement = document.createElement("p");
prixElement.innerHTML = `Prix : ${article.prix} €`;
const categorieElement = document.createElement("p");
categorieElement.innerHTML = article.categorie;

//ajout dans un parent existant
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

