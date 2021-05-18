#Steps to create a PWA page describing web components

- Start with create react app
- Do react eject
- study the app structure after folder eject
        - config : all configs for running the app
            - Place to keep config files, webpack config, jest
            - place to set environment variables
            - Look into webpack.config, --> really interesting
        - scripts - 
            - dive into build.js
        - public
            - index.html
            - notice meta description,meta theme , manifest.json - mdn'd it, really interesting
        -src
            - lets start
            - for folder structure https://reactjs.org/docs/faq-structure.html gives the best advice.
            - initial structure following KISS 
            - src
             |- Components
             |- Pages
                |- "folders by article name" 
                    |- index.jsx
                    |- style.sass /style.js
                    |- test
                    // To do explore pre rendering of pages : https://create-react-app.dev/docs/pre-rendering-into-static-html-files/

             |- Services
                |- Cross cutting Utils used accross App ( like Dateformat, )

        
 