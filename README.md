Introduction : 


FR/
Ce projet d'application répond à la vérification des compétences par l'agence GoWeb.

En constatant que la fakeStore API ne permettait pas l'update des données en base de données.
J'ai établi un contexte d'états centralisé grâce à la context API de React. Cela permet de simuler un comportement plus proche 
d'une réelle expérience utilisateur.

Le context est initialisé et typé dans le fichier "/context/context.ts". 
Le Provider et les états se trouvent au sein du fichier "pages/_app.tsx"

Certaines fonctionalités ont été ajoutées par interprétation de la maquette imposée et dans une démarche UX : 
- Filtre des produits par catégories
- Mise en évidence du produit dont le prix a été actualisé.


Le design est responsive sur mobile.


EN/
This sofware project answers the checking of the skills by GoWeb agency.
By noticing that fakeStore API does not update the Data.
I settled a context of states thanks to the API context of React.JS.
It enables to simulate the behaviour of a real user experience.

The context is set in the "/context/context.ts" folder.
The states and the context Provider are in "pages/_app.tsx" folder.

Some additional features have been added by an analysis of the mockup : 
- Products filter by categories
- highlighting updated products

The design is mobile responsive.


Technologies utilisées : NextJS TypeScript Styled-Components

Online preview : https://go-web-test-y6xs.vercel.app/

Github private repository on demand : https://github.com/MaxFmr/goWebTest

Ask an access to : maxime.kerlidou@gmail.com


Get started :

$ npm install

$ npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
