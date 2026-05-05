# 📊 Portfolio Monitor — Casimiro Félix Toyos e Hijos S.A.

Dashboard web del portfolio de inversión con autenticación multi-usuario.

---

## 🚀 Setup inicial (una sola vez)

### Paso 1 — Crear los usuarios y sus contraseñas

1. Abrí el archivo **`generate-users.html`** haciendo doble click (se abre en tu navegador).
2. Agregá cada persona que va a tener acceso (ej: `franco`, `regina`, etc.) con su contraseña.
3. Click en **📋 Copiar al portapapeles**.
4. **Guardá ese texto en un lugar seguro** (no lo vas a poder recuperar después).

### Paso 2 — Subir el código a GitHub

1. Andá a [github.com](https://github.com) y creá un repositorio nuevo:
   - Nombre sugerido: `portfolio-monitor`
   - **Privado** (importante).
   - NO marques "Add README" ni nada.
2. Cuando el repo esté creado, vas a ver un botón **"uploading an existing file"**.
3. Arrastrá TODOS los archivos de esta carpeta EXCEPTO:
   - `generate-users.html` (es solo para vos, no debe ir al server)
   - `node_modules/` (si existiera)
   - Carpeta `public/` (no la arrastres como carpeta) → arrastrá el `index.html` que está adentro y luego en GitHub creá la carpeta `public` y movelo ahí, **o** subí los archivos uno por uno respetando la estructura.
4. Commit con mensaje "Initial commit".

> 💡 **Tip:** Si te resulta complicado, podés usar [github.dev](https://github.dev) (la web IDE de GitHub) — ahí podés crear las carpetas y arrastrar archivos visualmente.

### Paso 3 — Deploy en Railway

1. Andá a [railway.app](https://railway.app) y entrá con tu cuenta.
2. Click en **"New Project"** → **"Deploy from GitHub repo"**.
3. Autorizá Railway a leer tu repo si te lo pide.
4. Seleccioná el repo `portfolio-monitor`.
5. Railway va a empezar a deployar automáticamente.
6. Cuando termine (~2 minutos), vas a la pestaña **"Variables"** y agregás:

   | Variable | Valor |
   |----------|-------|
   | `USERS` | El texto que copiaste del generador (ej: `franco:$2a$10$xyz...;regina:$2a$10$abc...`) |
   | `SESSION_SECRET` | Cualquier texto aleatorio largo (mínimo 32 caracteres). Podés usar [esto](https://www.random.org/strings/?num=1&len=32&digits=on&upperalpha=on&loweralpha=on&format=html&rnd=new) para generarlo. |
   | `NODE_ENV` | `production` |

7. Railway va a redeployar solo (~30 segundos).
8. En la pestaña **"Settings"** → **"Networking"** → **"Generate Domain"**.
9. Te van a dar una URL tipo `portfolio-monitor-production.up.railway.app`.
10. Andá a esa URL → vas a ver el login.

---

## 📱 Instalar como app en el celular

### iPhone (Safari)
1. Abrí la URL en Safari.
2. Logueate.
3. Tocá el botón **compartir** (cuadrado con flecha hacia arriba).
4. **"Agregar a inicio"**.
5. Listo: queda como app en tu pantalla de inicio.

### Android (Chrome)
1. Abrí la URL en Chrome.
2. Logueate.
3. Tocá los **3 puntos** arriba a la derecha.
4. **"Agregar a la pantalla principal"**.
5. Listo.

---

## 🔄 Cómo actualizar los datos del monitor

Cuando me pases extractos nuevos:

1. Te genero un `index.html` nuevo.
2. En GitHub: andá a `public/index.html` → click en el ícono de lápiz (editar) → borrás todo y pegás el nuevo contenido → commit.
3. Railway redeployará automáticamente en ~1 minuto.
4. Refrescás la página y ves los datos nuevos.

> 💡 Si te da paja editar manualmente: una alternativa es subir el archivo nuevo desde GitHub: **Add file → Upload files → arrastrá el `index.html` nuevo**. GitHub te pregunta si querés sobreescribir el existente.

---

## 👥 Cómo agregar/sacar usuarios después

1. Abrí `generate-users.html` de nuevo.
2. Generá la lista completa con todos los usuarios que quieras (incluidos los que ya estaban, si querés mantenerlos).
3. En Railway → Variables → editá la variable `USERS` con el nuevo valor.
4. Railway redeployará solo.

---

## 📁 Archivos del proyecto

```
portfolio-monitor/
├── server.js              ← Servidor Node.js con login
├── package.json           ← Dependencias
├── public/
│   └── index.html         ← El dashboard
├── generate-users.html    ← Generador de hashes (NO subir a GitHub)
├── .gitignore
└── README.md              ← Este archivo
```

---

## 🆘 Troubleshooting

**El login dice "Usuario o contraseña incorrectos" pero los datos son correctos**
→ La variable `USERS` en Railway no tiene el formato correcto. Tiene que ser exactamente: `usuario1:hash1;usuario2:hash2` (separados por `;` sin espacios alrededor).

**Veo error 500 al entrar**
→ Andá a Railway → tu proyecto → "Deployments" → ver logs. Probablemente la variable `USERS` no esté seteada.

**Quiero cambiar el dominio**
→ Railway permite custom domains gratis. Settings → Networking → Custom Domain.

**Costo**
→ Railway tiene $5 USD de crédito gratis por mes. Esta app consume ~$2-3 por mes, así que entra en el free tier.
