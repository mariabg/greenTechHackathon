'use strict';
const Alexa = require("alexa-sdk");
alert("hey you..");

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'GetNewFactIntent': function () {
        this.emit('SayFact');
    },
    'SayFact': function () {
        this.response.speak('I am still not very clever!');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'This is the Hello World Sample Skill. ';
        const reprompt = 'Say hello, to hear me speak.';

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later!');
        this.emit(':responseReady');
    }
};
