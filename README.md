
![alt text](<Raven banner 6.png>)


## What Raven is

To be honest raven is a bird. Yea it is but this one is a slack bot. You little claver Slack bot. I am giving it a real raven personality, which is always curios about this. But currenty Its not having much commands beacuse its just a start so currently he just replys to these commands you can see below:


## Main features

1. /raven-ping - Check bot latency
2. /raven-joke - Get a joke
3. /raven-quote - Get a quote
4. /raven-fact - Get a fact
5. /rave-fox - Get a fox

I added the fox command because its cute and funny, and also because of the story of the crow and the fox, I know raven is not a crow its just for fun.

## Technologies used 

I made this using just pure ``` JavaScript ``` and ``` Slack api ``` .
Editor: ``` VScode ``` 

## How to Run/Test It

### Requirements

Before running Raven, install:

* **Node.js** (LTS recommended)
* **Git**
* A **Slack workspace**
* A **Slack App** with Socket Mode enabled
* Raven's required Slack tokens

### 1. Clone the repository

```bash
git clone https://github.com/aridev24/Raven-Slack-Bot.git
cd Raven-Slack-Bot
```

### 2. Install dependencies

```bash
npm install
```

This installs all Node.js packages required by Raven.

### 3. Create the `.env` file

Create a file named `.env` in the project folder:

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
```

Add your actual Slack tokens.

### 4. Start Raven

```bash
node index.js
```

If everything is configured correctly, you should see:

```text
bot is running!
```

### 5. Test Raven in Slack

Use the available slash commands:

```text
/raven-ping
/raven-joke
```

If Raven responds, the bot is running correctly.





