FROM node:latest as final


# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

# Copy package.json to /app folder and install deps there
COPY --chown=1001 package.json /app
RUN npm install

# Adjust permissions
RUN chown -R 1001:1001 "/.npm"
RUN chown -R 1001:1001 /app

# Configure entrypoint
CMD [ "npm run test" ]
