-- client.lua

-- Comando para abrir la interfaz
RegisterCommand('mostrarui', function()
    SetNuiFocus(true, true) -- Activa el enfoque del NUI para poder interactuar con él
    SendNUIMessage({
        action = 'openUI'
    })
end, false)

-- Función para manejar el cierre de la UI desde el frontend
RegisterNUICallback('cerrarUI', function(data, cb)
    SetNuiFocus(false, false) -- Desactiva el enfoque del NUI
    cb('ok') -- Responde al frontend con un estado de "ok"
end)
