
FROM node:carbon-alpine

RUN mkdir /my_app 

COPY package.json  /my_app
COPY src/ /my_app/src/
RUN ls -la /my_app/src #<?>NO se que hace 
RUN cd /my_app


RUN npm install
  RUN npm i express # -- Facilita el codigo de servidr
  RUN npm i ejs # -- motor de plantillas 
  RUN npm i morgan # muestra en consola los log de las peticiones de los usuarios <?> Este no se si iria 
  # -- Este no se si es util 
  RUN npm i scrollreveal # --Efecto para que aparezca el contenido animadamente https://www.npmjs.com/package/scrollreveal

WORKDIR /my_app

EXPOSE 3001
CMD node src # <?> Esto no me suena 

