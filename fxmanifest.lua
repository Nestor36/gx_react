fx_version 'cerulean'
game 'gta5'

ui_page 'dist/index.html'  -- Ruta del archivo HTML principal generado por Vite

files {
    'dist/index.html',      -- HTML generado
    'dist/assets/*.js',     -- Archivos JavaScript
    'dist/assets/*.css'     -- Archivos CSS
}

client_script 'client.lua'
server_script 'server.lua'
