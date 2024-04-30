# proyecto control de gastos

- proyecto de react con typeScript y tailwind creado con vite, utilizando el useReducer y el useContext


# TypeScript
- Cuando se usa el prop {children} puedo usar el type PropsWithChildren o crear un type definiendo typo del children como un ReactNode.

- Los type de los eventos puedo copiarlos de los mensajes que me muestra el editor de codigo y pegarlos donde defina el type.

- El signo de ! significa que le garantizamos que un valor de ese tipo de dato va a existir

- El signo de ? es un optional change que significa que es un objeto si no viene nada no genere error



# Librerias usadas
- Headlesui para crear el modal del formulario del gasto
- uuid version4 para crear los id de manera dinamica cade vez que se almacena un nuevo gasto.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
