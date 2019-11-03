---
description: 'Plateforme éditoriale'
draft: false
layout: "proposal"
mission: 'conception'
title: Proposition TAgBZH
year: 2019
slug: xvhgg
leader : matthieu
status : draft
---
<div class="text-lg font-medium text-gray-900 w-24 border-b-4 border-gray-900 mb-2">
    Commande
</div>
<p>Création d'une plateforme de marque pour le TAgBZH. </p>
<p>Au niveau local l'outil devra présenter l'action des TAg(22/29/35/56), leur ancrage territorial et les projets portés. </p>
<p>Au niveau régional la plateforme fera connaitre la marque (sur le web), ses services (idéateur, incubateur, révélateur) et sa différenciation (expertise ESS / IS) sur le territoire.</p>

<div class="text-lg font-medium text-gray-900 w-24 border-b-4 border-gray-900 mt-10 mb-2">
    Analyze
</div>

Notre compréhension du besoin de TAgBZH est la suivante : Il s'agit d'être rapide et cohérent (charte et message).

Le besoin le plus urgent de l'organisation est d'exister sur le web. 

Structures jeunes les TAgs sont en phase de croissance et construction,notamment sur le terrain numérique. Nous devrons prendre garde, dans la réponse, à proposer une approche incrémentale pour accompagner la montée en compétence du client sur ces sujets. 

Stratégiquement les solutions "lourdes" dont l'administration **à moyen/long terme** nécessite du temps et des moyens sont écartées (Drupal, Wordpress ..) pour des raisons abordées plus bas.

<div class="text-lg font-medium text-gray-900 w-40 border-b-4 border-gray-900 mt-10 mb-2">
    Notre méthode.
</div>

## Etape 0 : Etude

Nous revoyons avec vous votre commande et cahier des charges. Nous consacrons plusieurs heures à vous écouter et à vous poser des questions sur le but recherché dans la réalisation du projet que vous nous soumettez. Si nous voyons des incohérences nous les éclairons et proposons des alternatives. **C'est à ce stade que le budget et son périmètre sont définitivement validés**

## Etape 1 : Conception & Storyboard

Une fois la stratégie actée en étape 0 nous conçevons les "plans" du site en nous concentrant sur les principales interfaces (Home page, page de détail, page de liste etc ..). A ce stade nous procédons par itérations rapides pour organiser la hiérarchie de l'information. Le client valide des interfaces à l'échelle et fonctionnelles.

## Etape 2 : Réalisation des interfaces (HTML/CSS/Js)
En fonction de l'avancement de l'étape 1 nous commençons dès cette étape à développer et itérer sur l'interface finale sans passer par la réalisation des écrans sous Sketch/Figma. Le client est amené à valider des micros "sprint" rapidement. Le travail est publié chaque jour voire parfois chaque demie journée pour lui donner une vue transparente sur l'état d'avancement du projet. Le travail s'effectue avec des contenus rééls (même non validés).

## Etape 3 : 
Les fichiers sources sont prêts. Le site statique est déployé dans un environnement configuré.

<div class="text-lg font-medium text-gray-900 w-40 border-b-4 border-gray-900 mt-10 mb-2">
    Réponse technique
</div>

HBY est spécialisé dans la réalisation de sites statiques dont la simplicité présente de nombreux avantages : 

* **Ils sont rapides** : Le serveur n'a aucun "travail" à faire pour livrer les pages. On ne peut aller plus vite. 
 
* **Ils sont sécurisés** : La grande majorité des attaques se fait via des failles affectant les CMS. Ici il n'y en a pas.

* **Ils sont pérennes et stables** : Puisque c'est de l'HTML de base. Votre site sera là encore dans 10 ans puisqu'il n'y a aucun CMS à maintenir ou qui pourrait devenir obsolète.

* **Ils sont parfaits pour le SEO** : Parce que rapides et simples dans leur structure HTML.

* **Ils sont simples à déployer**  : Vous ne devez pas trouver ou payer d'hébergeur proposant une version à jour de PHP ou Python ou Nodejs, pas de base de données à installer / configurer / sauvegarder. Votre site est littéralement un dossier contenant des dossiers/fichiers humainement lisibles.

* **Vos contenus sont stockés dans des fichiers texte** : Produire des contenus réclame du temps et parfois un budget important. Avec un CMS comme Wordpress ou Drupal, une fois mis en production, ils sont stockés en base de données et difficilement récupérables. Avec notre approche vos contenus sont des fichiers textes (markdown) humainement lisibles et facilement modifiables. Ils peuvent être utilisés ailleurs.

<div class="text-lg font-medium text-gray-900  border-b-4 border-gray-900 mt-10 mb-2">
    Attention
</div>

Encore jeune cette méthode de travail manque d'outil accessibles à des personnes habituées aux interfaces de Wordpress ou Drupal.

Nous pouvons cependant former (compris dans le forfait) une personne référente pour que vous puissiez être autonomes. Cette personne devra avoir une bagage technique préalable.

Nous pouvons également réfléchir ensemble à un abonnement comprenant maintenance et mise en ligne des contenus pour vous dégager complètement de ces problématiques. Votre équipe disposera d'un point d'entrée unique chez nous (via l'application https://pilot.pm que nous éditons) pour soumettre ses demandes de mise en ligne.

<div class="text-lg font-medium text-gray-900  border-b-4 border-gray-900 mt-10 mb-2">
    Pourquoi avons nous choisi cette approche au lieu de Wordpress/Drupal/Typo3 ?
</div>

De notre expérience les CMS, à moyen terme, n'offrent pas l'autonomie promise au client. Un CMS est complexe à maintenir et mettre à jour. Les bases de données utilisées (MySQL, PgSQL) sont prévues pour gérer des milions de contenus ce qui est disproportionné pour des sites modestes proposant 50 pages. Les générateurs de sites statiques sont plus adaptés.

<div class="text-lg font-medium text-gray-900  border-b-4 border-gray-900 mt-10 mb-2">
    Outils (recommandés)
</div>

Nous opérons avec des générateurs de sites comme Hugo, Gridsome ou Nuxtjs. Nous préconisons l'hébergement chez Netlify.

## Gestion de contenu
Les contenus peuvent être gérés de différentes façons (forestry.io, DATOCMS, manuellement, ...) - à confirmer avec le client.


## Générateur de site statique
<a href="https://gohugo.io" class="button bg-gray-200 rounded hover:bg-blue-200">
    <img src="/brands/hugo.svg" class="w-32" alt="" />
</a>

## Hébergement
<a href="https://netlify.com" class="button bg-gray-200 rounded hover:bg-blue-200">
    <img src="/brands/netlify.svg" class="w-32" alt="" />
</a>

<div class="text-lg font-medium text-gray-900 w-40 border-b-4 border-gray-900 mt-10">
    Devis provisoire
</div>
<div class="p-1 bg-yellow-200 text-gray-900 rounded-sm text-xs mb-5 mt-5">
    Tarif journalier de 500€HT/jour - Chaque étape intégre les aller/retours clients (3max./étape) jusqu'à validation finale
</div>

<div class="p-1 bg-yellow-200 text-gray-900 rounded-sm text-xs mb-5 mt-5">
    Tout le travail réalisé est stocké sur Github ou Gitlab et librement accessible au client. A tout moment ce dernier peut récupérer les sources de ce qui est fait.
</div>


<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200">
    <div class="Object flex-grow">
        <div class="Name">Site statique de lancement</div>
        <div class="Explain text-xs text-gray-600">Réalisation et présentation d'un prototype fonctionnel (le site statique demandé dans votre CdC) pour vous aider à décider de la pertinence de notre approche. Aucun engagement de votre part.</div>
    </div>
    <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">2 jours</div>
        <div class="TotalHT w-20 text-right">Offert</div>
    </div>
</div>
<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200">
    <div class="Object flex-grow">
        <div class="Name">Etape 0 : Etude</div>
        <div class="Explain text-xs text-gray-600">Nous discutons et analysons votre cahier des charges, vos objectifs et validons ensemble la stratégie. Nous validons définitivement le devis</div>
    </div>
    <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">1 jour</div>
        <div class="TotalHT w-20 text-right">500€HT</div>
    </div>
</div>
<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200">
    <div class="Object flex-grow">
        <div class="Name">Etape 1 : Conception</div>
        <div class="Explain text-xs text-gray-600">Plan global du site, fonctionnel (avec Figma). Nous détaillons chaque page pour desktop et mobile. Le client valide écrans et interactions.</div>
    </div>
    <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">3 jours</div>
        <div class="TotalHT w-20 text-right">1500€HT</div>
    </div>
</div>
<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200">
    <div class="Object flex-grow">
        <div class="Name">Etape 2 : Réalisation</div>
        <div class="Explain text-xs text-gray-600">En fonction des décisions prises en étape 1 nous réalisons immédiatement le développement du site. Le client valide les éléments fréquemment (chaque jour). La charte est intégrée directement. Si les interfaces sont trop complexes nous passons d'abord par une étape sous Sketch pour validation. On compte en moyenne 2 jours par page suivant le complexité. Chaque page est conçue pour desktop et mobile. La priorité est donnée au développement mobile.</div>
    </div>
    <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">10 jours</div>
        <div class="TotalHT w-20 text-right">5000€HT</div>
    </div>
</div>
<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200">
    <div class="Object flex-grow">
        <div class="Name">Etape 3 : Déploiement</div>
        <div class="Explain text-xs text-gray-600">Le site statique est généré sur la base des élements développés en Etape 2 puis déployé. Le prix dépend des souhaits d'hébergement du client.</div>
    </div>
    <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">? jour</div>
        <div class="TotalHT w-20 text-right">?€HT</div>
    </div>
</div>

<div class="flex flex-col mb-2 md:mb-0 md:flex-row justify-between p-2 bg-gray-200 mt-5">
    <div class="Object flex-grow">
        <div class="Name">Abonnement mensuel (résiliable à tout moment)</div>
        <div class="Explain text-xs text-gray-600">Comprenant hébergement et 1/2 journée par mois pour des mises en ligne, modifications diverses, conseils ..</div>
    </div>
     <div class="flex justify-between flex-shrink-0">
        <div class="Qte w-auto mr-4">0,5 jour</div>
        <div class="TotalHT w-20 text-right">300€HT</div>
    </div>
</div>



<div class="text-lg font-medium text-gray-900  border-b-4 border-gray-900 mt-10">
    Documents prospect
</div>
{{< file "cctagbzh.pdf" "Cahier des charges">}}
{{< file "charte.pdf" "Charte graphique">}}
