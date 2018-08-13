rm -rf ./node_modules && \
docker run --rm --name debuildi -v "$PWD":/usr/src/app -w /usr/src/app node:8-alpine /bin/sh -c 'npm install' && \
docker run -d --rm --name deboogie -p 3000:4004 -v "$PWD":/usr/src/app -w /usr/src/app node:8-alpine node index.js