function redirectUrl(domain, path) {
    return "https://"+ domain+ "/"+ path;
}

$(window).on('load', function () {
    if (typeof ADVERTISEMENT_ENABLE === 'undefined' || ADVERTISEMENT_ENABLE === null) {
        console.log("NO ADS!");
        return false;
    }    
    if (typeof ADVERTISEMENT_REDIRECT === 'undefined' || ADVERTISEMENT_REDIRECT === null) {    console.log("NO REDIRECT!");
        return false;
    }    
    // console.log("AD", ADVERTISEMENT_ENABLE, ADVERTISEMENT_REDIRECT);
    
    for (const [dom, domain] of Object.entries(ADVERTISEMENT_REDIRECT)) {
        console.log(`${dom} => ${domain}`);
        $(`.${dom}`).each(function() {
            $(this).attr("href", redirectUrl(domain, $(this).attr("href")));
        });
    }
});
