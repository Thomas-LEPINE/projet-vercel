# initiation-vercel

[![LinkedIn - Thomas Lépine][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <img src="https://github.com/Thomas-LEPINE/Best-README-Template/blob/master/images/logo.png" alt="Logo" width="80" height="80">

  <h3 align="center">README</h3>
</p>

<!-- TABLE OF CONTENTS -->
## Sommaire

* [À propos](#à-propos)
* [Questions](#questions)
* [Contact](#contact)


## À propos

Projet réalisé dans le cadre d'un cours de 5eme année d'école d'ingénieur à Polytech Angers. Objectif : se familiariser avec Vercel
* [Sujet](https://www.notion.so/TD-d-ployer-une-application-sans-code-76b85ffbb35942caa67476dfa60c5de5)
* [Vercel](https://vercel.com/)
* [NodeJS](https://nodejs.org/en/download/)
Installation Vercel : `npm i -g vercel`

* [Doc_Versel](https://vercel.com/docs/cli)


## Questions

### 4

`npm vercel -v` : 6.14.6

### 5

* Installation d'Angular : `npm i -g @angular/cli`
* Génération du projet : `vercel init` + choix angular ici

### 6

* Depuis le dossier angular/ : `vercel deploy`
* Accès : `https://angular-one-sigma.vercel.app/`

### 7

`vercel ls`

### 8

`vercel logs https://angular-one-sigma.vercel.app/`

### 9

`vercel inspect https://angular-one-sigma.vercel.app/`

### 10

Une variable d'environnement est une valeur dynamique, chargée en mémoire, pouvant être utilisée par plusieurs processus fonctionnant simultanément. Sur la plupart des systèmes d'exploitation, les emplacement de certaines librairies, voire des principaux exécutables du système peuvent avoir un emplacement différent selon l'installation. Source : [CommentCaMarche](https://www.commentcamarche.net/contents/1093-variables-d-environnement)

### 11

`vercel env add plain VAR_ENV1 production`

### 12

`vercel env ls`

### 13

Les varibles secrètes sont des variables cryptées et fournissent un moyen sûr de stocker et de partager des informations sensibles entre les déploiements. Elles sont utilisée pour gérer les secrets utilisés dans les variables d'environnement sous un compte.

### 15

`vercel secrets add topsecret 'secret'`

### 16
* [Doc](https://vercel.com/docs/environment-variables#environments)
* 16.1: On a `Production`, `Preview`, `Development`.
* 16.2 :
  * `Production` : Une fois sélectionnée, la variable d'environnement sera appliquée à notre prochain déploiement de production (mise en production de l'appli)
  * `Preview` : Variables appliquées lors du prochain déploiement (Démo)
  * `Development` : Utilisé lorsque le projet est executé en local. (Test en local)

### 18

Lorsque l'on travaille en équipe pour développer une application, il est préférable de diviser l'application finale en 'fonctionnalités' qui seront développées par les membres de l'équipe sur une branche ne local. Une fois la focntionnalité terminée, il faut réaliser un pull request afin que celle-ci soit mergé sur la branche principale. C'est cette même branche principale qui est deploy et visible en ligne.

### 19

L'action permet de deploy en preview, cela met en preview

### 20

L'action du merge deploy en production


<!-- CONTACT -->
## Contact

Thomas Lépine - tlepine@etud.univ-angers.fr

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/thomas-l%C3%A9pine/