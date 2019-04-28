help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	@cd sanity && sanity upgrade
	@cd svelteBlog && npm install

clean: ## Clean up the build folder for building
	@cd blog && rm -rf build

start: ## Start development server
	@cd svelteBlog && npm run start

deploy: clean ## Deploy builded blog on now
	# cd blog && yarn build
	# cp now.json blog/build/
	# now --target=production blog/build
