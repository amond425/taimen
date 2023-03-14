function loadGoogleAnalytics(blocked) {
    if (blocked) {
        console.log("[AD Disabled]");
    } else {
        document.title= "[AD] "+ document.title;
        console.log("[AD]");
    }
    
    // Google tag (gtag.js)
    var f=document.getElementsByTagName("script")[0];
    j=document.createElement("script");
    j.async="";  
    j.src= "https://www.googletagmanager.com/gtag/js?id=G-E7D3EVY6HR";
    f.parentNode.insertBefore(j,f);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E7D3EVY6HR');
}

$(document).ready(function() {
    $.getScript( "https://www.ubg235.com/js/analytics.js?ws=ubg235.github.io" )
        .done(function( script, textStatus ) {            
            loadGoogleAnalytics(false);
        })
        .fail(function( jqxhr, settings, exception ) {
            loadGoogleAnalytics(true);
        });
});
