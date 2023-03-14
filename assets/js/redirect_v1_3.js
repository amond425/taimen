function redirectUrl(domain, path) {
    return "https://"+ domain+ "/"+ path;
}

function redirectLoad(blocked) {
    if (blocked) {
        console.log("[RD Disabled]");
    } else {        
        console.log("[RD]");
        if (typeof ADVERTISEMENT_REDIRECT === 'undefined' || ADVERTISEMENT_REDIRECT === null) {
            console.log("[RD No Option]");
            return false;
        }
        for (const [dom, domain] of Object.entries(ADVERTISEMENT_REDIRECT)) {
            console.log(`${dom} => ${domain}`);
            $(`.${dom}`).each(function() {
                $(this).attr("href", redirectUrl(domain, $(this).attr("href")));
            });
        }
    }
}

$(document).ready(function() {
    $.getScript( "https://www.ubg235.com/js/redirect.js?ws=ubg235.github.io" )
        .done(function( script, textStatus ) {            
            redirectLoad(false);
        })
        .fail(function( jqxhr, settings, exception ) {
            redirectLoad(true);
        });
});
