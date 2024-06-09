# μReact

**μReact** es una versión simplificada de la biblioteca [React](https://react.dev/) de Meta, recreada solo con fines educativos. Este proyecto tiene como objetivo proporcionar una comprensión más profunda de los conceptos fundamentales de React y su funcionamiento interno y justificación. 

No requiere un entorno node.js, ya que es una biblioteca lista para usar directamente en el navegador.

## Características

- **Router sin configuración**: Soporte para parámetros en las rutas sin necesidad de configuración adicional. La estructura de la carpeta */pages* define el enrutamiento.
- **Hooks**:
  - `useState`
  - `useReducer`
  - `useEffect`
  - `useContext`
- **Context API**: Soporte para `createContext` y `useContext`.
- **lit-html**: Utiliza [lit-html](https://lit.dev/docs/v2/libraries/standalone-templates/) como única dependencia en lugar de JSX.
- **Componentes**: Permite la creación de interfaces de usuario utilizando componentes.
