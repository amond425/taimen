function loadGoogleAdsense() {    
    if (typeof ADSENSE_ENABLED === 'undefined' || ADSENSE_ENABLED === null) {
        console.log("[ADSENSE Disabled]");
        return false;
    }
    console.log("[ADSENSE Severed]");
    // Google Adsense
    var f=document.getElementsByTagName("script")[0];
    j=document.createElement("script");
    j.async= true;
    j.crossorigin= "anonymous";
    j.src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2751856053825499";
    f.parentNode.insertBefore(j,f);    
}

$(document).ready(function() {
    $.getScript( "https://www.ubg235.com/js/adsense.js?ws=ubg235.github.io" )
        .done(function( script, textStatus ) {
            loadGoogleAdsense();
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log("[ADSENSE Blocked]");
        });
});
