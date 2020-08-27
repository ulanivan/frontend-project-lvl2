install:
	npm install
link:
	sudo npm link
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm run test
test-coverage:
	npm test -- --coverage --coverageProvider=v8