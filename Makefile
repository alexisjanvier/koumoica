deploy:
	cd blog && yarn build
	cd blog/build && now
