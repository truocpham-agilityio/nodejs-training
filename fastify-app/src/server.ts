import fastify from "fastify";

const PORT = process.env.PORT || 3000;

const app = fastify();

app.get("/", async (request, reply) => {
  return { message: "Hello world!" };
});

const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`server listening on port ${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
