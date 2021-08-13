
FROM node:cardon-alpine

RUN MKDIR /my_app 

COPY package.json  /my_app
COPY -R src/ /my_app

RUN npm install
  RUN npm i express # -- Facilita el codigo de servidr
  RUN npm i ejs # -- motor de plantillas 
  RUN npm i morgan # muestra en consola los log de las peticiones de los usuarios <?> Este no se si iria 
  RUN npm i scrollreveal # --Efecto para que aparezca el contenido animadamente https://www.npmjs.com/package/scrollreveal

WORKDIR /my_app

EXPOSE 3001 # -- Exporta el puerto 3001
CMD node src # <?> Esto no me suena 



