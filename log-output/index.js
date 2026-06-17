const { randomUUID } = require("crypto");

const string = randomUUID();

const log = () => {
  console.log(`${new Date().toISOString()}-${string}`);

  setTimeout(log, 5000);
};

log();
