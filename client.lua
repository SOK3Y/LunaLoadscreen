local Ran = false

CreateThread(function()
	while not Ran and not NetworkIsPlayerActive(PlayerId()) do
		Wait(500)
	end

	SendLoadingScreenMessage(json.encode({stop = true}))
	Ran = true
end)

RegisterNUICallback('hidels', function(data, cb)
	Citizen.Wait(500)
	TriggerEvent('esx:loadingScreenOff')
	ShutdownLoadingScreen()
	ShutdownLoadingScreenNui()
end)