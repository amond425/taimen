// Google tag (gtag.js)
$(window).on('load', function() {    
    var f=document.getElementsByTagName("script")[0];
    j=document.createElement("script");
    j.async="";  
    j.src= "https://www.googletagmanager.com/gtag/js?id=G-E7D3EVY6HR";
    f.parentNode.insertBefore(j,f);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E7D3EVY6HR');
});
