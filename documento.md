# documento

### generación del proyecto
Se crea el nuevo proyecto usando Vite
```
npm create vite@latest . -- --template react
```
y luego
```
npm install
```

### instalación de tailwind con postcss

Se instala tailwind a través de npm y posteriormente se genera `tailwind.config.js`
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
el archivo `postcss.config.js` se genera automáticamente e indica que tailwind funcionará como un plugin de este. No es necesario modificar el código

```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

ahora si es necesario agregar la siguiente línea al archivo `tailwind.config.js`
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    ], 
```

### instalación de daisyUI
nuevamente recurrimos a npm
```
npm install -D daisyui@latest
```

se agrega el siguiente código a 

```
plugins: [
    require("daisyui")
    ], 
```