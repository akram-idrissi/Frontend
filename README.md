# Nutritechagro-Test-Frontend

## Demo
[Lien vers demo video]([https://youtu.be/vt5fpE0bzSY](https://drive.google.com/file/d/10ltYzJggMlnOlc7Qsigor0HsvKwPWKPs/view?usp=sharing))



## Description

Ce projet constitue le frontend d'une application e-commerce qui fait parti du test de Nutritechagro, développé avec Next.js et Tailwind CSS. Ce projet offre une interface utilisateur intuitive en mettant l'accent sur l'expérience utilisateur.

## Pourquoi Next.js et Tailwind CSS ?

### **Next.js**
1. **Facilité d'intégration** :
   - Routes basées sur le système de fichiers, simplifiant la configuration.
   - Possibilité d'intégrer des API backend directement dans le projet via des dossiers `/api`.

2. **Écosystème robuste** :
   - Support natif pour TypeScript et CSS Modules.
   - Documentation complète et communauté active.

3. **Déploiement simplifié** :
   - Compatible avec des plateformes de déploiement modernes comme Vercel, ce qui permet un hébergement rapide et performant.


### **Tailwind CSS**
1. **Rapidité de développement** :
   - Classes utilitaires prêtes à l'emploi pour styliser rapidement les composants.
   - Réduction significative du besoin de fichiers CSS personnalisés.

2. **Cohérence visuelle** :
   - Garde une uniformité dans les styles grâce à des classes standardisées.
   - Facilité de gestion des thèmes via le fichier `tailwind.config.js`.
     
3. **Performance et maintenance** :
   - Génération automatique de CSS minimaliste, supprimant les classes inutilisées en production avec PurgeCSS.
   - Réduit les fichiers CSS volumineux souvent difficiles à maintenir.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/akram-idrissi/Nutritechagro-Test-Frontend.git
   cd Nutritechagro-Test-Frontend
   ```
2. Creez un fichier ```.env.local``` et ajoutez cette ligne ```NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000```

3. Executez ces commandes :
   ```bash
    npm install
    npm run dev
    ```

4. Ouvrez le navigateur et allez sur [http://localhost:3000](http://localhost:3000).


## Endpoints
- Page d'accueil: [http://localhost:3000](http://localhost:3000)
- Page de connexion: [http://localhost:3000/signin](http://localhost:3000)
- Page d'inscription: [http://localhost:3000/signup](http://localhost:3000)
- Page de rénitialisation de mot de passe (logique n'est pas implementé): [http://localhost:3000/reset-password](http://localhost:3000)
- Page d'un produit: [http://localhost:3000/products/id](http://localhost:3000)
- Page d'une categorie (les filtres ne sont pas implementé): [http://localhost:3000/categories/name](http://localhost:3000)
