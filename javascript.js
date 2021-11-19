setInterval(() => {
    var today = moment();
    $("#1a").text(today.format("[Welcome! Today is] MMM Do, YYYY hh:mm:ss"));
    
}, 1000);