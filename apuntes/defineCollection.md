# defineCollection en Astro

## ¿Qué es una colección?

Una colección en Astro es una forma organizada de gestionar contenido relacionado, similar a una biblioteca donde cada estantería contiene libros de temáticas similares. Estas colecciones pueden contener:

- Posts de blog
- Páginas de productos
- Documentación
- Perfiles de equipo

## Estructura básica

Para crear una colección necesitas:

1. Una estructura de carpetas:
   src/
   content/
   blog/ # Carpeta de la colección
   post-1.md
   post-2.md
   config.ts # Configuración de la colección

2. Definir el esquema:
   import { defineCollection, z } from 'astro:content';

   const blogCollection = defineCollection({
   schema: z.object({
   titulo: z.string(),
   fecha: z.date(),
   autor: z.string()
   })
   });

   export const collections = {
   'blog': blogCollection
   };

## Diferencias entre Colecciones y JSON

### 1. Estructura y Organización

**JSON:**

```Javascript
{
"posts": [
{
"titulo": "Post 1",
"contenido": "Este es el contenido...",
"fecha": "2024-01-31"
},
{
"titulo": "Post 2",
"contenido": "Más contenido...",
"fecha": "2024-02-01"
}
]
}
```

**Colecciones:**

```astro

// post-1.md
---
titulo: "Post 1"
fecha: 2024-01-31
---

    Este es el contenido...

    // post-2.md
    ---
    titulo: "Post 2"
    fecha: 2024-02-01
    ---

    Más contenido...

```

### 2. Ventajas y Desventajas

#### JSON

**Ventajas:**

- Fácil de manipular con JavaScript
- Bueno para datos simples
- Compatible con TypeScript para validación

**Desventajas:**

- Todo en un solo archivo
- Difícil de manejar contenido largo
- No soporta formato enriquecido naturalmente

#### Colecciones

**Ventajas:**

- Organización por archivos separados
- Soporte nativo para Markdown
- Validación integrada
- Mejor para contenido largo

**Desventajas:**

- Requiere aprender la sintaxis de Astro
- Más complejo para datos muy simples

## Ejemplos Prácticos

### 1. Blog Post

    ---
    titulo: "Mi Primer Post"
    fecha: 2024-01-31
    autor: "Juan Pérez"
    etiquetas: ["astro", "web"]
    imagen: "/images/post.jpg"
    ---

    # Contenido del Post

    Aquí puedes escribir **markdown** con:
    - Listas
    - Enlaces
    - Y más

### 2. Producto de Tienda

    ---
    nombre: "Camiseta Astro"
    precio: 29.99
    stock: 100
    categorias: ["ropa", "merchandising"]
    colores: ["negro", "blanco"]
    ---

    ## Descripción del Producto

    Esta camiseta está hecha con 100% algodón...

## Uso en Componentes

    import { getCollection } from 'astro:content';

    // Obtener todos los posts
    const posts = await getCollection('blog');

    <div>
      {posts.map(post => (
        <article>
          <h2>{post.data.titulo}</h2>
          <p>Autor: {post.data.autor}</p>
        </article>
      ))}
    </div>

## ¿Cuándo usar cada uno?

### Usar JSON cuando:

- Necesitas datos simples y estructurados
- No requieres contenido con formato
- Trabajas principalmente con datos que serán manipulados por JavaScript

### Usar Colecciones cuando:

- Necesitas manejar contenido largo
- Quieres usar Markdown
- Necesitas una estructura organizada por archivos
- Trabajas con contenido que requiere formato enriquecido
