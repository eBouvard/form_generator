FROM node:12.16.1

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g --force serve yarn

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# installe les dépendances du projet
RUN yarn install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# construit l'app pour la production en la minifiant
RUN ./node_modules/.bin/vue-cli-service build

EXPOSE 5000
CMD [ "node", "server.js" ]