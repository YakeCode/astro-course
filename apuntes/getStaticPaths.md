# getStaticPaths

getStaticPaths es una función especial de Astro que genera rutas estáticas

```javascript
import { getCollection, render } from "astro:content";

export async function getStaticPaths() {
  const books = await getCollection("books");
  return books.map((book) => ({
    params: { id: book.slug },
    props: { book },
  }));
}

const { Content } = await render(book);

/*se trae el contenido interno o el md de cada elemento de la colección*/
```

getCollection('books') obtiene todos los archivos de la colección 'books' (deberían estar en src/content/books)
