help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	@cd sanity && sanity upgrade
	@cd blog && yarn install

clean: ## Clean up the build folder for building
	@cd front && rm -rf build

start: ## Start development server
	@cd front && npm run start

deploy:
	cd blog && yarn build
	cd blog/build && now
