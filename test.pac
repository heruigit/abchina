function FindProxyForURL(url, host) {
      if(shExpMatch(url, "https://enjoy.abchina.com/yh-web/rights/*")){
          return "PROXY 47.95.112.255:7777";
      }
      if(shExpMatch(url, "https://enjoy.abchina.com/yh-web/customer/*")){
          return "PROXY 47.95.112.255:7777";
      }
  return "DIRECT";
}
