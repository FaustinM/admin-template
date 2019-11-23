
![Le panel](https://i.imgur.com/4xxBaLr.png)

# Panel administrateur
Ce projet est un template pour tous vos projets nécessitant un panel d'administration

## Les différentes pages

 - [L'index](https://faustinm.github.io/admin-template/admin.html)
	Vous avez la page ici la page principale avec les chiffres clés de votre site affiché en haut et différents modules utiles à la gestion de celui-ci.

 - [Les utilisateurs](https://faustinm.github.io/admin-template/pages/users.html)
	Si vous avez un site avec de la gestion d'utilisateurs cette page vous permet de voir les différents utilisateurs et d'effectuer une action.

 - [La modification d'un utilisateur](https://faustinm.github.io/admin-template/pages/user.html)
	Voici la page pour modifier un seul utilisateur.
	

 - [La gestion d'un support](https://faustinm.github.io/admin-template/pages/support.html)
	Si vous voulez un système de ticket vous pouvez vous inspirez de cette page
	

## La partie JavaScript
Il y a un fichier JavaScript utilisé pour quelques éléments comme le burger de navigation sur mobile ou les menus de complétion sur les champs de texte

## Comment utiliser le compilateur EJS
Le compilateur EJS va s'occuper de recréer toutes l'arboresence ainsi que la "traduction" en HTML, pour ce qui est du css et du js laissez le à la racine, là où les fichiers HTML seront mient.

EJS n'est pas utilisé avec Express, il est utilisé seulement pour sortir des fichiers statiques !

# Installez les dépendances
`npm install`

# Lancez le script
`npm start` > Si vous n'avez pas Nodemon
`npm dev` > Dans le cas contraire

## Les dépendances

* [Bulma](https://bulma.io)
* [Font Awesome](https://fontawesome.com)
* [EJS](https://ejs.co)
* Et rien d'autre :)

## Projet utilisant ce template

* [Un projet de chat en socketIO](https://github.com/FaustinM/chat-socketIO/)
