function FindProxyForURL(url, host) {
    if (host.indexOf("www.bing.com") == 0) {
        return "PROXY yourproxyserver.com:8080; DIRECT";
    }
}

function beforeSend(request) {
    request.setRequestHeader("X-Forwarded-For", "4.2.2.2");
    request.setRequestHeader("X-Forwarded-For", "1.1.1.1");
}