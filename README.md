# backend-node PostgreSQL
## API - Node - ORM

###### Esta API se desarrolló en Node framework con peticiones al motor de base de datos postgresql

**Las peticiones GET obtienen un arreglo en formato JSON con la siguiente estructura:**

Tabla post  

- id(int): identificador único del post
- name(text): nombre del post
- descripcion(text): descripción del post


```
[
    {
    "id": 104,
    "name": "post 001",
    "url_image": "descripcion post 001",

    },
]
```

## ENDPOINTS 

## GET Listar posts 
Las peticiones GET a /posts se obtiene un arreglo de todos los posts  


## DELETE Eliminar post
Las peticiones POST a /post/{id} se elimina el post segun el id enviado

**parámetros**
* id: id del post 


## POST Crear post 
Las peticiones POST a /post se inserta post 

```

    {

    "name": "post 007",
    "descripcion": "descripcion post 007",

    }

```


### Prerequisitos 

Motor de la base de datos postgres en localhost corriendo en el puerto 5432 
una base de datos con el nombre 'posts_db' 


Para ejucutar la app utilizar los siguienets comandos:

```
npm install 

npx prisma migrate dev --name inicio

npx prisma generate 

npm run dev 


```


