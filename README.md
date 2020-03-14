*Este proyecto es Open Source, Libre y mantenido por la comunidad y carece de caracter oficial, por lo que se recomienda siempre citar a las fuentes oficiales*

## Formato de datos
La base de datos se encuentra en src > database en dos archivos json uno con el estado nacional y otro con la información por estados.

Nacional (db-nacional.json): 

| Nombre      | Descripción       | Description          | Formato     | Ejemplo    |
|-------------|-------------------|----------------------|-------------|------------|
| fecha       | Fecha de corte    | Date                 | unix format | 1584122400 |
| iso         | Abreviatura       | Country abbreviation | iso 3166-2  | MEX        |
| nombre      | Nombre            | Name                 | texto       | México     |
| confirmados | Casos confirmados | Confirm              | numerico    | 0          |
| sospechosos | Casos sospechosos | Suspect              | numerico    | 0          |
| decesos     | Muertes           | Death                | numerico    | 0          |

Estados (db-estados.json): 

| Nombre      | Descripción       | Description          | Formato     | Ejemplo        |
|-------------|-------------------|----------------------|-------------|----------------|
| fecha       | Fecha de corte    | Date                 | unix format | 1584122400     |
| iso         | Abreviatura       | Country abbreviation | iso 3166-2  | AGU            |
| nombre      | Nombre            | Name                 | texto       | Aguascalientes |
| lat         | latitud           | Latitude             | decimal     | 21.8823395     |
| long        | longitud          | Longitude            | decimal     | -102.2825928   |
| confirmados | Casos confirmados | Confirm              | numerico    | 0              |
| sospechosos | Casos sospechosos | Suspect              | numerico    | 0              |
| decesos     | Muertes           | Death                | numerico    | 0              |

## Aditional information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# mx-covid19

ISO 3166-2
