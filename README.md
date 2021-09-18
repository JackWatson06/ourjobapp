# unijobapp
Front-End React Project for the UniJobApplication

## Directory Structure
/__tests__
    /unit - Tests in unit
    /integration - Tests integrating entire system.
/dist - Final built files which get served by the web server.
/src
    /js
        /atoms - The smallest level of React components we have ( i.e. Buttons, Labels, Headers).
        /lib - Any small Javascript libraries that we create internally.
        /molecules - Combination of atoms (i.e. Input Boxes, Headers w/ Text, Nav-Bar).
        /organisms - Combination of molecules. One level of abstraction higher (i.e. Forms, Sections).
        /pages - Combination of organisms. Represents the final pages of the site (i.e. Home Page, Affiliate Page, Employees Page).
        /templates - How to structure your page. The template the page sits in. (i.e. Columns, Grid, Flexbox).
    /css
    /html
/assets - Images, video, or app driven data.

## Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Versions
- NPM: 6.14.15
- Node: 14.17.6
