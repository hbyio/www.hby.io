LAN-IP := $(shell ipconfig getifaddr en0) # Get local network router IP


dev: 
	hugo server --navigateToChanged --bind 0.0.0.0 --baseURL http://${LAN-IP}

