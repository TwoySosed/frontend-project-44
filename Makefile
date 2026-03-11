install:
	npm ci
node:
	bin/brain-games.js
publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
make lint:
	npx eslint