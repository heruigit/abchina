function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.baidu.com"))
    {
        return "PROXY 10.1.70.162:8888";
    }
  
  return "DIRECT";
}
