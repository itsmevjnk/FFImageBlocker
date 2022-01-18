function redirect(requestDetails) {
    return {
        redirectUrl: requestDetails.url
    }
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {
        urls: ["<all_urls>"],
        types: ["image", "imageset", "media"]
    },
    ["blocking"]
);