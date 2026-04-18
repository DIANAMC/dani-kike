# Fran & Kike — Wedding Site

A wedding invitation website built with React, Vite, TypeScript and Tailwind CSS.

## 🚀 Cómo publicar el proyecto en GitHub Pages

### 1. Habilitar GitHub Pages en el repositorio

1. Ve a **Settings** → **Pages** en tu repositorio de GitHub.
2. En **Source**, selecciona **GitHub Actions**.
3. Guarda los cambios.

### 2. Hacer push a la rama `main`

Cada vez que hagas `git push` a `main`, el workflow `.github/workflows/deploy.yml` se ejecutará automáticamente y publicará el sitio en:

```
https://dianamc.github.io/dani-kike/
```

> El build usa `VITE_BASE_URL=/dani-kike/` para que los assets funcionen en la URL asignada de GitHub Pages. Si luego apuntas a un dominio personalizado (por ejemplo `franykike.com`), cambia `VITE_BASE_URL` a `/` en los workflows antes de desplegar y asegúrate de tener el DNS y el CNAME configurados.

### 3. Desarrollo local

```bash
npm install
npm run dev
```

### 4. Build manual

```bash
npm run build
npm run preview
```
