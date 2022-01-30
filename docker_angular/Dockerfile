FROM node:alpine

RUN apk update \
  && apk add --update alpine-sdk python3 git \
  && yarn global add @angular/cli@$ANGULAR_CLI_VERSION \
  && ng config --global cli.packageManager yarn \
  && apk del alpine-sdk python3 \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd
  
EXPOSE 4200