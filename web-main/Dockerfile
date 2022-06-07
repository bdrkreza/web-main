FROM node:16-alpine3.11
LABEL maintainer="Faruk Ahamad Imon"

# RUN addgroup -S bhalogari && adduser -S -DH -G bhalogari bhalogari
# RUN mkdir -p /usr/app && chown bhalogari:bhalogari /usr/app

# USER bhalogari
WORKDIR /usr/app

# COPY --chown=bhalogari:bhalogari package*.json ./
COPY package*.json ./
RUN npm install 
COPY . .
# COPY --chown=bhalogari:bhalogari . .

EXPOSE 3000

CMD [ "npm", "start" ]
