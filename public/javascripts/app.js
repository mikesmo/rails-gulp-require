requirejs.config({
    baseUrl: '/javascripts/lib',
    paths: { app: '/javascripts/app' }
});
requirejs(['app/main']);
define('app', ['app/main'], function () {
    return;
});