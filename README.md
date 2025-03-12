para ejecutar el back: 
```bash
npx json-server --watch db.json --port 3000
```
para ejecutar el front:
```bash
npm install
```

```bash
npm run dev
```


para ejecutar el back en la v2, dentro de backend:
```bash
npm install json-server@0.16.3
```
y luego 
```bash
npm run servidor
```
y luego se accede a la pagina con normalidad


En esta versión, usa json‑server‑auth para crear de forma rápida una API con autenticación JWT. Pue‑
des usar el JSON anterior pero añadiendo la colección “users”.
Crea un fichero “routes.json” para proteger todas las rutas, de forma que los usuarios no autenticados
no puedan acceder a la API.
Utiliza la librería de componentes Material UI para implementar las nuevas páginas.
Utiliza axios para simplificar las peticiones HTTP realizadas con fetch en la versión anterior.
En esta versión debes usar rutas con react‑router‑dom.
• Crea un contexto para almacenar el estado de autenticación.--hecho
• Implementa una página para poder iniciar sesión (/login).
• Implementa una página para registrar usuarios (/register).
• Protege las rutas que ya tienes implementadas para que solo se pueda acceder si el usuario se
ha autenticado.
• Si el usuario intenta acceder a cualquier ruta protegida sin iniciar sesión, redirecciona a /login.