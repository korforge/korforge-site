PORT ?= 8000

.PHONY: start

## Serve the site locally at http://localhost:$(PORT)
start:
	@echo "Korforge site running at http://localhost:$(PORT)"
	python3 -m http.server $(PORT)
