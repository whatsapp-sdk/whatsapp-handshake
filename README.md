Whatsapp handshake 登陆握手模块

示例:

```javascript

const WhatsappHandShake = require('whatsapp-handshake');

// 要传递的数据
const config = {
  username: '8613888888888',
  passive: false,
  ...
};

// 握手协议版本号 6.3
const major = 6;
const minor = 3;

const handShake = new WhatsappHandShake({
  config,
  header: Buffer.concat([Buffer.from('WA'), Buffer.from([major, minor])]),
  serverStaticPublic: '9HDGlgTVMuQnjkHNN1pokZHDE6ih6EDsE4NEpB+MxWQ=',
  clientStaticKeyPair: 'GB9VtsPQmE6PKGIm3X/luBhObyI5cU1xA3a6UWDHRkvZstp0E2jx7Amxt9g/Ocw+uRh3Ns3X6ik7baFBKKrIGQ==',
  logger: console,
  socket: socket,
});
await handShake.perform(); // 握手成功

// 获取握手成功后服务端推送的数据
const chunks = await handShake.readWithDecrypt();
console.log('chunks', chunks);

// 储存服务端公钥
const serverPulicKey = handShake.rs;
```

参数：

config: 握手时传递的数据对象
header: 握手头
serverStaticPublic: 服务端公钥，可为空。为空时使用 startHandShakeXX，不为空时使用 startHandshakeIK
clientStaticKeyPair: 客户端公私钥，base64 编码，前 32 字节为私钥，后 32 字节为公钥。
logger: 日志对象，可不传，默认使用 console
socket: socket 对象，必传。用于传输数据

接口：

- perform() 异步函数，开始进行握手。返回数组加密对象，[sendCipher, recvCipher]，分别用于发送时加密、接收数据解密。
- rs 服务端公钥，buffer。握手成功后可使用此字段。
- sendWithEncrypt(message) 加密发送数据。用于握手成功后。
- readWithDecrypt() 获取解密后接收到的数据。用于握手成功后。可循环调用。

```javascript
const loopEvents = async()=>{
  const data = await handShake.readWithDecrypt();
  event.emit('data', data);
  return loopEvents();
};
```
