# 💻 Configuración de mi Terminal y Entorno (Dotfiles)

Este repositorio contiene mis archivos de configuración de macOS (dotfiles), incluyendo mi prompt de terminal personalizado, alias, configuración del gestor de ventanas Aerospace y tema de navegación para el navegador.

## 🚀 Instalación Rápida (En una Mac Nueva)

Para descargar y aplicar todas estas configuraciones en una computadora limpia con un solo comando, abre la terminal y ejecuta:

\`\`\`bash
git clone https://github.com/HectorManAc/Config-Ghostty.git ~/dotfiles && ~/dotfiles/install.sh
\`\`\`

---

## 📂 Archivos Gestionados

*   **\`.zshrc\`**: Configuración de Zsh con prompt en colores neón, autocompletado y sintaxis resaltada.
*   **\`.aerospace.toml\`**: Configuración para el gestor de ventanas AeroSpace.
*   **\`surfingkeys.js\`**: Configuración de Surfingkeys (extensión de Chrome/Firefox) con un tema Cyberpunk Neon para las etiquetas y buscador.
*   **\`install.sh\`**: Script para enlazar automáticamente los archivos al directorio principal (\`~\/\`).

---

## 🌎 Configuración de Surfingkeys en Chrome

Para aplicar la configuración de Surfingkeys en tu navegador:

1.  Ve a las extensiones de Chrome (\`chrome://extensions\`).
2.  Busca **Surfingkeys**, haz clic en **Detalles** y activa la opción **Permitir acceso a las URL de archivo** (esto permite a la extensión leer tu archivo local).
3.  Abre la configuración de Surfingkeys (presiona \`Ctrl + i\` o abre sus opciones).
4.  En la casilla **Load settings from**, ingresa la ruta local de tu archivo (reemplaza \`TU_USUARIO\` con tu usuario de Mac):
    \`\`\`text
    file:///Users/TU_USUARIO/.surfingkeys.js
    \`\`\`
    *(O si lo prefieres, simplemente copia el contenido de \`surfingkeys.js\` y pégalo directamente en la caja de texto de la extensión)*.

---

## 🛠️ Cómo agregar o actualizar configuraciones

Si realizas cambios en tu terminal o agregas nuevos archivos y deseas respaldarlos:

1.  **Si agregas un archivo nuevo** (por ejemplo, \`.gitconfig\`):
    *   Muévelo a la carpeta de dotfiles: \`mv ~/.gitconfig ~/dotfiles/\`
    *   Agrégalo al script \`install.sh\` en la lista de enlaces para que se configure en el futuro.
    *   Crea el enlace simbólico para tu Mac actual: \`ln -sf ~/dotfiles/.gitconfig ~/.gitconfig\`

2.  **Para guardar y subir tus cambios a GitHub**:
    \`\`\`bash
    cd ~/dotfiles
    git add .
    git commit -m "Actualizar mis dotfiles"
    git push
    \`\`\`
