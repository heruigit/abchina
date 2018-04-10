function FindProxyForURL(url, host) {
  if (shExpMatch(host, "www.baidu.com"))
    {
        return "PROXY 47.95.112.255:7777";
    }
  
  return "DIRECT";
}
