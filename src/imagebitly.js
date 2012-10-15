

// function get_short_url(long_url, login, api_key, func)
// {
//     $.getJSON(
//         "http://api.bitly.com/v3/shorten?callback=?", 
//         { 
//             "format": "json",
//             "apiKey": api_key,
//             "login": login,
//             "longUrl": long_url
//         },
//         function(response)
//         {
//             func(response.data.url);
//         }
//     );
// }

function get_short_url(long_url, login, api_key, func)
{
    $.getJSON(
        "https://api-ssl.bitly.com/v3/shorten?callback=?", 
        { 
            "format": "json",
            "apiKey": api_key,
            "login": login,
            "longUrl": long_url
        },
        function(response)
        {
            func(response.data.url);
        }
    );
}


function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

function clickHandler(e) {
    var url = e.pageUrl;
    console.log(encodeURI(e.srcUrl));
    if (e.mediaType === "image") {
        get_short_url(encodeURI(e.srcUrl), "bensonperry", 'R_378867f54388667a1f5fc55ebc4dd7e1' , function(short_url) 
        {
            copyTextToClipboard(short_url);
        });
        "imageurl=" + encodeURI(e.srcUrl) + "&";
    }
};

chrome.contextMenus.create({
    "title": "Copy bitly link",
    "contexts": ["image"],
    "onclick" : clickHandler
  });




// api_key = R_378867f54388667a1f5fc55ebc4dd7e1 

// login = bensonperry
// var login = "LOGIN_HERE";
// var api_key = "API_KEY_HERE";
// var long_url = "http://www.kozlenko.info";




