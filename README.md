*Este proyecto es de desarrollo comunitario y carece de caracter oficial, por lo que se recomienda que sea usado unicamente a modo de consulta y acudir a fuentes oficiales*

[Página de visualización ](https://jebusdoodles.github.io/mx-covid19/) 

## Formato de datos
La base de datos se encuentra en src > database en dos archivos json uno con el estado nacional y otro con la información por estados.

Nacional (db-nacional.json): 
------

| Nombre      | Descripción       | Description          | Formato     | Ejemplo    |
|-------------|-------------------|----------------------|-------------|------------|
| fecha       | Fecha de corte    | Date                 | unix format | 1584122400 |
| iso         | Abreviatura       | Country abbreviation | iso 3166-2  | MEX        |
| nombre      | Nombre            | Name                 | texto       | México     |
| confirmados | Casos confirmados | Confirm              | numerico    | 0          |
| sospechosos | Casos sospechosos | Suspect              | numerico    | 0          |
| decesos     | Muertes           | Death                | numerico    | 0          |

Estados (db-estados.json):
------ 

| Nombre      | Descripción       | Description          | Formato     | Ejemplo        |
|-------------|-------------------|----------------------|-------------|----------------|
| fecha       | Fecha de corte    | Date                 | unix format | 1584122400     |
| iso*        | Abreviatura       | Country abbreviation | especifico  | MEX-AGS        |
| nombre      | Nombre            | Name                 | texto       | Aguascalientes |
| lat         | latitud           | Latitude             | decimal     | 21.8823395     |
| long        | longitud          | Longitude            | decimal     | -102.2825928   |
| confirmados | Casos confirmados | Confirm              | numerico    | 0              |
| sospechosos | Casos sospechosos | Suspect              | numerico    | 0              |
| decesos     | Muertes           | Death                | numerico    | 0              |

(*) En el caso de la abreviatura por estados antes se usaba iso 3166-2 pero este no funcionaba a ala hora de dibujar el mapa por lo que las abreviaturas por estado ahora se especifican en el documento sampleestados.json

# Fuente de información y extracción
La información es extraida de [Secretaría de salud](https://www.gob.mx/salud/documentos/nuevo-coronavirus-2019-ncov-comunicado-tecnico-diario) y transcrita a las bibliotecas json como se ha referido antes.

## Forma de extracción
En la carpeta /extractinfo esta almacenado el script de python 3 que usa la biblioteca [tabula](https://github.com/chezou/tabula-py) para extraer la información del pdf a csv. Después el archivo es depurado para llenar manualmente los archivos json, que se encuentran en la carpeta /database.

# Todo List (Cosas por hacer)
(19 / Marzo / 2020)
- [x] Actualizar mapa svg con estados confirmados (25 / Marzo / 2020)
- [x] Ordenar lista de estados por numero de casos confirmados (19 / Marzo / 2020)
- [x] Responsive Móvil
- [ ] Habilitar páginas con información de prevención y de fuentes oficiales
- [ ] Habilitar controles historiograficos 

# Preguntas frecuentes
-¿Es información de una fuente oficial?

Sí, estoy usando la información compartida desde [Secretaría de salud](https://www.gob.mx/salud/documentos/nuevo-coronavirus-2019-ncov-comunicado-tecnico-diario), que suben a diario después de la conferencia oficial.

-¿Por qué tardas en subir casos confirmados/sospechosos/decesos?

La información es ratificada con la fuente oficial antes mencionada, aunque medio y hasta oficialmente se halla confirmado nuevos numeros, actualizare tan pronto esten los nuevos datos desde la Secretaria de Salud.

-¿Por qué no muestras más datos y graficas?

Maténlo simple, no descarto que en los proximos dias agregue más información pero el espiritu de esta página sera mantener la información sancilla y legible para la mayoria de usuarios. 

-¿Cuenta con API/REST?

No, la información es almacenada de forma local en archivos json. 

-¿En que esta desarrollado?

La página esta desarrollada en [React](https://es.reactjs.org/) para el consumo de datos y la visualización de datos con [D3](https://d3js.org/), mapas con [React Single Map](https://www.react-simple-maps.io/) y empaquetada con Create React App y publicada en github pages. La información es extraida de pdf usando un script en Python3.

# Información de contacto 

Pueden contactarse conmigo para información adicional, sugerencias o comentarios a mi correo personal jesus.cortes.code@gmail.com o en mi cuenta de [twitter](https://twitter.com/JebusDoodles)

# Otros sitios de intéres

-[Página oficial de la Secretaria de Salud](https://coronavirus.gob.mx/)
-Proyecto [Frenan la curva MX](hhttps://mx.frenalacurva.net/)
-[Visualizador](http://covidatos.mx/) hecho por Eli Parra


# Recursos externos 
-Mapa geojson por [Ali G](https://gist.github.com/ponentesincausa/46d1d9a94ca04a56f93d)

# Licencia

"Este proyecto cuenta con licencia conforme a los términos de la licencia [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/legalcode)"

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
