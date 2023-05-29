FROM node:18.12.0

WORKDIR /app

COPY package.json postcss.config.js svelte.config.js tailwind.config.js tsconfig.json vite.config.ts ./

RUN npm -y install

COPY . .

EXPOSE 5173 4173

ENV HOST=0.0.0.0

CMD [ "npm", "run", "dev" ]