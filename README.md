# UniJobApp
Welcome to the UniJobApp repository! This repository contains the frontend code for the UniJobApp.
UniJobApp stands for Universal Job Application and solves the discovery problem faced by employers
looking for new candidates. The application offers features such as affiliate links to drive
candidate signup and forms for both parties to find what they are looking for.

## Technical Details
The project uses _Next.JS_ and _React_ to provide an interactive single-page application. We style 
the application using CSS modules. You will notice that in the *styles* and the *components* 
directory we follow the atomic design principles pioneered by Brad Frost: 
[Atomic Design](https://atomicdesign.bradfrost.com/)

This project only contains the front-end code. To run this project you must also have
the backend API running which can be found [here]().

## Pictures / Videos


## Development Guide
In this section, I will outline how to begin development on the UniJobApp front-end. It will cover
installing the development build and how to start touching code. 

### Starting the Application
1. Gather all the necessary software from the *Dependencies* section.
2. Clone this repository locally.
3. Install the _UniJobApp API_ found [here]().
4. Run `nvm use` to install the relevant version of node for this project.
5. Copy the *.env.example* to *.env.local*.
6. Install _npm_ dependencies using the command `npm run install`.
    - _Note_: Git changed the git port to restricted meaning you need to forward all calls from
    git:// to https://. This Github issue discusses this in more detail: 
    [Github Unable to Connect](https://github.com/npm/npm/issues/6285#issuecomment-56640354).
    Use the following command to be able to run npm install: 
    `git config --global url.https://github.com/.insteadOf git://github.com/`
7. Run `npm run dev` to start the development application.
    - You can now open the app on your browser at http://localhost:3000

### Architecture
The project follows the [Atomic Design](https://atomicdesign.bradfrost.com/) architecture. At a high 
level components are broken up into five sections: atoms, molecules, organisms, templates, and pages. 
Each category suits different levels of abstraction. Fundamentally they break up each page by layers
which allow reuse of components for small projects.

### Making Changes
To start making changes add a new page in the *pages* directory. Any additional components you have
should be put in the *components* directory, and any styles you have should be put in the *styles*
directory. 

Once you are done making the changes for a feature then run the Eslint command 
(`npm run lint`) to confirm your code follows the _next/core-web-vitals_ linting rules.

### Running Site on HTTPS
Some features, like the sharing of links, require the next server to run using SSL. To run the
server with SSL support we can use a local SSL proxy. We can use the _local-ssl-proxy_ _npm_ library
to create this proxy. Run through the following steps to setup HTTPS.
1. Create a new certificate in the _config_ directory. The following command will create a
certificate which will expire in 10 years.
```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 --nodes
```
2. Start up the _Next.js_ server on port whatever port you want to use. Set the _NEXT\_PORT_ to
configure the port that Next.js uses.
```
npm run dev
```
3. Run the following command to start the HTTPS proxy.
```
npx local-ssl-proxy \
  --key ./config/{key_name}.pem \
  --cert ./config/{cert_name}.pem \
  --source 8080 \
  --target {NEXT_PORT}
```
4. Run a similar proxy mechanism for the backend since otherwise you will get a mixed-content error
on the website. You can either enable insecure content or start the proxy.

## Dependencies
1.) [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)

## Commands
Use the relevant version of node:
```
nvm use
```

Starting the development server:
```
npm run dev
```

Building the production application:
```
npm run build
```

Restarting the Next.JS server on production:
```
pm2 restart nextjs
```

Running the ESLint:
```
npm run lint
```

## Learn More
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Atomic Design](https://atomicdesign.bradfrost.com/) - we base our architecture on this design.
- [CSS Modules](https://github.com/css-modules/css-modules) - how we style UniJobApp.

## Versions
- _Next.JS_ - v11.1.2
- _React_ - v17.0.2

## Missing Features
- [ ] End-to-end tests which cover common use cases.
- [ ] Continuous deployment to the server.
