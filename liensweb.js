/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web





// Création éléments
function creerLienElt(lien) {
    let divLien = document.createElement("div");
    divLien.classList = "lien";




    // création éléments (lien)
    let aElt = document.createElement("a");
    aElt.href = lien.url;
    aElt.target = "blank";
    aElt.textContent = lien.titre;
    aElt.style.textDecoration = "none";
    aElt.style.color = "#428bca";
    aElt.style.fontWeight = "bold";
    aElt.style.fontSize = "1.8 em";

   
    let spanUElt = document.createElement ("span");
    spanUElt.textContent = " " + lien.url;
    spanUElt.style.marginLeft = "6px";

    let spanAElt = document.createElement ("span");
    spanAElt.textContent = "Ajouter par " + lien.auteur;
    spanAElt.style.marginTop = "0px";




    // Insertion éléments
    divLien.appendChild(aElt);
    divLien.appendChild(spanUElt).appendChild(document.createElement ("br"));
    divLien.appendChild(spanAElt);


    return divLien;
    
     }
     
     let divContenu = document.getElementById ("contenu");
     // Affichage du contenu de chaque éléments du tableau dans le DOM
        listeLiens.forEach (function (lien)  { 
            let lienElt = creerLienElt(lien);
            divContenu.appendChild(lienElt);


        });

    