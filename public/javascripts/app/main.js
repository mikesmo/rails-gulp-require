define('app/main', [
    'app/messages',
    'print'
], function (messages, print) {
    print(messages.getHello());
});