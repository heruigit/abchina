function FindProxyForURL(url, host) {
  if (shExpMatch(host, "enjoy.abchina.com"))
    {
      if(shExpMatch(url, "https://enjoy.abchina.com/yh-web/rights/rightsdetails")){
          return "PROXY 47.95.112.255:7777";
      }else
      if(shExpMatch(url, "https://enjoy.abchina.com/yh-web/customer/info/")){
          return "PROXY 47.95.112.255:7777";
      }else 
      if(shExpMatch(url, "https://enjoy.abchina.com/yh-web/customer/choose")){
          return "PROXY 47.95.112.255:7777";
      }else{
        return "DIRECT";
      }
    }
  
  return "DIRECT";
}
