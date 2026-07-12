# 💻 Configuración de mi Terminal y Entorno (Dotfiles)

Este repositorio contiene mis archivos de configuración de macOS (dotfiles), incluyendo mi prompt de terminal personalizado, alias y configuración del gestor de ventanas Aerospace.

## 🚀 Instalación Rápida (En una Mac Nueva)

Para descargar y aplicar todas estas configuraciones en una computadora limpia con un solo comando, abre la terminal y ejecuta:

\`\`\`bash
git clone https://github.com/HectorManAc/Config-Ghostty.git ~/dotfiles && ~/dotfiles/install.sh
\`\`\`

---

## 📂 Archivos Gestionados

*   **\`.zshrc\`**: Configuración de Zsh con prompt en colores neón, autocompletado y sintaxis resaltada.
*   **\`.aerospace.toml\`**: Configuración para el gestor de ventanas AeroSpace.
*   **\`install.sh\`**: Script para enlazar automáticamente los archivos al directorio principal (\`~\/\`).

---

## 🛠️ Cómo agregar o actualizar configuraciones

Si realizas cambios en tu terminal o agregas nuevos archivos y deseas respaldarlos:

1.  **Si agregas un archivo nuevo** (por ejemplo, \`.gitconfig\`):
    *   Muévelo a la carpeta de dotfiles: \`mv ~/.gitconfig ~/dotfiles/\`
    *   Agrégalo al script \`install.sh\` en la lista \`files=(\".zshrc\" \".aerospace.toml\" \".gitconfig\")\` para que se enlace automáticamente en el futuro.
    *   Crea el enlace simbólico para tu Mac actual: \`ln -sf ~/dotfiles/.gitconfig ~/.gitconfig\`

2.  **Para guardar y subir tus cambios a GitHub**:
    \`\`\`bash
    cd ~/dotfiles
    git add .
    git commit -m "Actualizar mis dotfiles"
    git push
    \`\`\`
