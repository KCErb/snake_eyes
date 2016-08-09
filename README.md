# snake_eyes

## Overview
A simple starter bot. It does one thing: generate a random list of names of our team members for use during scrum.

## Usage

### Run locally
	npm install
	SLACK_TOKEN=<YOUR_SLACK_TOKEN> npm start

Things are looking good if the console prints something like:

    ** API CALL: https://slack.com/api/rtm.start
    ** BOT ID:  witty  ...attempting to connect to RTM!
    ** API CALL: https://slack.com/api/chat.postMessage

### Run locally in Docker
	docker build -t starter-node .`
	docker run --rm -it -e SLACK_TOKEN=<YOUR SLACK API TOKEN> starter-node

## Acknowledgements

* This code uses the [botkit](https://github.com/howdyai/botkit) npm module by the fine folks at Howdy.ai.
* The credit goes to [Beep Boop](https://beepboophq.com). They provided the template and the hosting. Those guys rock!

## License

See the [LICENSE](LICENSE.md) file (MIT).
