# Pull base image.
FROM node:0.12.4

# Install Ghost
RUN \
  cd /tmp && \
  apt-get update && apt-get install -y unzip && \
  rm -rf /var/lib/apt/lists/* && \
  wget https://ghost.org/zip/ghost-latest.zip && \
  unzip ghost-latest.zip -d /ghost && \
  rm -f ghost-latest.zip && \
  cd /ghost && \
  npm install --production && \
  npm install --save ghost-s3-storage && \
  useradd ghost --home /ghost

COPY config.js /ghost/config.js
COPY content/themes/clearbit /ghost/content/themes/clearbit
COPY content/storage /ghost/content/storage

# Set environment variables.
ENV NODE_ENV production

ENV PORT 2368

# Expose ports.
EXPOSE 2368

# Define working directory.
WORKDIR /ghost

# Define default command.
CMD npm start
