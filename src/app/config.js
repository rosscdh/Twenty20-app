angular.module("Twenty20App.config", [])

.constant("Twenty20AppConf", {
	"ENV": "development",
	"DEBUG": false,
	"DEFAULT_ITEMS_PER_PAGE": 25,
	"API_ENDPOINTS": {
		"default": "http://localhost:8009"
	}
})

;