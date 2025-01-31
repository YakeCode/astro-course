**Instalar**

```Bash
npm install @astrojs/tailwind tailwindcss
```

En el archivo **astro.config.mjs**

```Javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});
```

Agregar Tailwind

```Bash
npx tailwindcss init
```
