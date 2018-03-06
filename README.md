# sinau-koa

### Preparation
- Run `npm install` to install all modules.

### Development
- Run `npm run dev` to run server locally using `./config/dev.ts` configuration.

### Production
- Run `npm run build` to build the distribution code using `./config/prod.ts` configuration. Generated files will be in `./dist` directory with main file `server.js`.
- Do not forget, to run the production code you have to set all environment variables you need before start it.
  For example, if you're in **Windows** environment, to run your production code instantly you can go to `./dist` folder and run `set PORT=8080 && npm start`.