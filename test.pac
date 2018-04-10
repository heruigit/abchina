function FindProxyForURL(url, host) {
  if (shExpMatch(host, "enjoy.abchina.com"))
    {
        return "PROXY 47.95.112.255:7777";
    }
  
  return "DIRECT";
}
