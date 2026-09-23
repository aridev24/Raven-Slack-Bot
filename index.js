require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/raven-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});


app.command("/raven-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/raven-ping - Check bot latency
/raven-joke - Get a joke
/raven-quote - Get a stoic quote`
  });
});

app.command("/raven-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response= await axios.get("https://official-joke-api.appspot.com/random_joke"    );

    const joke= `${response.data.setup}\n\n${response.data.punchline}`;

    await respond({
      text: joke,
    });
  } catch (err) {
    console.error("Joke API error:", err);
    await respond({
      text: "Failed to fetch a joke.", });
  }
});

app.command("/raven-quote", async ({ ack, respond }) => {
  await ack();

  try {
    const response= await axios.get("https://zenquotes.io/api/random");


    const quote = `${response.data[0].q}\n— ${response.data[0].a}`;

    await respond({
      text: quote,
    });
  } catch (err) {
    console.error("Quote API error:", err);
    await respond({
      text: "Failed to fetch a quote.", });
  }
});

(async () => {
  try {
    await app.start();
    console.log("bot is running!");
  } catch (error) {
    console.error("Failed to start Raven:", error);
  }
})();

