angular.module("Twenty20App.config", [])

.constant("Twenty20AppConf", {
	"ENV": "development",
	"DEBUG": false,
	"DEFAULT_ITEMS_PER_PAGE": 25,
	"API_ENDPOINTS": {
		"default": "https://24904f.ngrok.com"
	}
})

;