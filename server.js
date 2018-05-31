const setupApp = require('./src/app');
const config = require('./src/config/keys');

setupApp()
  .then(app => app.listen(config.appPort, () => console.log(`app running on port ${config.appPort}`)))
  .catch(err => {
    console.error(err)
    process.exit(1)
  });
