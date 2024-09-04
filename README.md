# Frise Numérique
![13 et 14](https://github.com/7clem/friseNumerique/blob/master/13-14.png)

## Objectif
Offrir aux élèves une frise numérique de classe enrichie des caractéristiques permettant de distinguer des particularités entre les nombres.

## Description
Une frise comportant 
* chaque nombre de 0 à 100 est présenté sur une carte au format 100 x 138.5 mm.
* l'écriture en chiffres des nombres,
* l'écriture en lettres des nombres,
* une représentation analogique décimale inspirée des cubes et barres de numération.
* les nombres composés (non premiers) sont représentés par des ensembles de symboles carrés rangés en lignes et en colonnes complètes, le nombre de lignes et de colonnes est affiché.
* les nombres premiers qui sont représentés par des ensembles de ronds rangés en lignes dont la dernière est incomplète,
* les nombres triangulaires sont formés par la somme des nombres entiers de 1 à n. Ils sont indiqués par un ensemble de ronds arrangés en triangle, en médaillon dans le coin supérieur gauche.
* les nombres carrés forment un rectangle aux bords de longueur égale, un carré, ce qu'on voit bien.

## Présentation
 * 13 planches au format A3, 
 * des traits de coupe pour couper au massicot 2 bandes de 42 cm couvrant 2 x 4 nombre pour réaliser une frise à afficher en classe.
 * des traits de coupe permettent de réaliser des cartes à imprimer sur du bristol.

# [Frise complète en PDF] (https://github.com/7clem/friseNumerique/blob/master/friseNumérique.pdf)

## Suggestion de séance
* Matériel : un grand nombre de petites pièces identiques comme on trouve dans les matériels de numération, des cubes, idéalement ou des jetons.
* Attribuer ou faire choisir un nombre unique de la frise (ou une carte) à chaque élève.
* Distribuer ou mettre à disposition un nombre suffisant de cubes à chaque élève.
* Les faire compter en rangeant par paquets de 10.
* Avec les cubes, reproduire les arrangements présentés sur la frise ou la carte.
* Essayer (ce n'est pas toujours possible) d'arranger autrement les cubes pour constituer des colonnes ou des lignes régulières et différents de l'arrangement initial.
* Chaque élève note ses observations puis change de nombre et reproduit ses expériences plusieurs fois en fonction du temps disponible. 
* Restitution à la classe :
  * Tous les nombres sont ils pareils de ce point de vue ?
  * Est-ce que les carrés peuvent devenir des rectangles ?
  * Est-ce que des triangles peuvent devenir des rectangles ?
  * Pour quels nombres peut-on faire des empilements à plusieurs étages ?
* Le professeur peut, à la suite de cet échange présenter le vocabulaire mathématique :
  * un diviseur, un facteur, un produit, un nombre carré, premier, triangulaire
  * Pour élargir, la suite des nombres entiers est une seule des suites du site https://oeis.org/A000217 le site 
  
 ### Par exemple 24 : 
 * = 20 + 4
 * = 5 * 4 + 4
 * = 6 * 4
 * = (2 * 3) * 4  // ici plusieurs empilements en 3D sont possibles 
 * = 8 * 3
 * = 4 * 6
Les tables de multiplications pourront être utilisées comme ressource pour vérifier si on trouve bien le produit où on l'attend.

 

 ## Modification du fichier SVG brut
 Ouvrez le fichier [index.html](http://htmlpreview.github.io/?https://github.com/7clem/friseNumerique/blob/master/index.html)
 (testé avec Chrome)

* Une fois l'image affichée, une copie au format SVG est téléchargée dans votre dossier téléchargement.
* Ce fichier n'est pas utilisable directement (pour l'instant), quelques ajustements sont nécessaires.
* Avec Inkscape 1.3 (Logiciel de référence du format SVG, gratuit et disponible à [https://inkscape.org](https://inkscape.org)
* Le fichier frise.svg doit être ouvert et modifié : 
  * Avec l' "outil Pages" de Inkscape changer la hauteur de la première page et la fixer à 297.  (bug à corriger)
  * à la main, mettre à l'échelle et déplacer, voire tourner les groupes de pièces carrées, à partir de 51, pour lesquels la mise à l'échèle ne fonctionne pas.
  * des attributs de classe sont appliqués à chaque type d'objet et leur style peut être modifié de façon groupée avec l'éditeur de style de inkscape. Pour changer l'apparence des éléments avec les feuilles de style CSS.
    
[l'utilisation de ce code est soumis à cette licence](LICENCE)

## Vos corrections ou idées sont bienvenues.
7clement à gout guelle miel point comme.
