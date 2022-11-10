FROM node:latest as final

# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test
COPY --chown=1001 package.json .

RUN npm install && mv node_modules ..
RUN chown -R 1001:1001 "/.npm"
RUN chown -R 1001:1001 /app

RUN echo '#!/bin/sh\n\
rm -Rf node_modules || echo "Already deleted"\n\
cp -r ../node_modules .\n\
npm run test\n\
\n' > /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/bin/bash" ]
CMD [ "/entrypoint.sh" ]
