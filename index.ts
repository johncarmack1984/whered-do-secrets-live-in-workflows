console.log(`REPOSITORY_SECRET: ${process.env.REPOSITORY_SECRET}\n`);
console.log(`REPOSITORY_VARIABLE: ${process.env.REPOSITORY_VARIABLE}\n`);
console.log(`ENVIRONMENT_SECRET: ${process.env.ENVIRONMENT_SECRET}\n`);
console.log(`ENVIRONMENT_VARIABLE: ${process.env.ENVIRONMENT_VARIABLE}\n`);

Bun.serve({
  async fetch(req) {
    return new Response(`
        Hello via Bun!\n
        This is a line break!\n
        REPOSITORY_SECRET: ${process.env.REPOSITORY_SECRET}\n
        REPOSITORY_VARIABLE: ${process.env.REPOSITORY_VARIABLE}\n
        ENVIRONMENT_SECRET: ${process.env.ENVIRONMENT_SECRET}\n
        ENVIRONMENT_VARIABLE: ${process.env.ENVIRONMENT_VARIABLE}\n
    `);
  },
});
