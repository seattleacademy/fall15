var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
    deviceReadyDeferred.resolve();
});

$(document).on("mobileinit", function() {
    jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
    navigator.compass.getCurrentHeading(success, failure);
}

function success(heading) {
    document.getElementById('heading').innerHTML = heading.magneticHeading;
}

function failure(error) {
    alert("Compass Error: " + error.code)
}
