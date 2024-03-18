const HandShake = require('../HandShake');
const Socket = require('socket-async');

const assert = require('assert');

describe('Handshake', async () => {
  // start shandshake
  const version = '2.24.4.75';
  const appVersion = version.split('.');
  const account = {
    platform: 0,
    mcc: '000',
    mnc: '000',
    osVersion: '10.3.3',
    manufacturer: 'BlackBerry',
    deviceName: 'BlackBerry Passport',
    fdid: '00000000-0000-0000-0000-000000000000',
    lg: 'en',
    lc: 'US',
    pushName: '',
    platform: 0,
    clientStaticKeyPair:
      'GB9VtsPQmE6PKGIm3X/luBhObyI5cU1xA3a6UWDHRkvZstp0E2jx7Amxt9g/Ocw+uRh3Ns3X6ik7baFBKKrIGQ==',
    serverStaticPublic: '9HDGlgTVMuQnjkHNN1pokZHDE6ih6EDsE4NEpB+MxWQ=',
  };

  const config = {
    username: '8613888888888',
    passive: false,
    useragent: {
      platform: account.platform,
      appVersion: {
        primary: appVersion[0],
        secondary: appVersion[1],
        tertiary: appVersion[2],
        quaternary: appVersion[3],
      },
      mcc: account.mcc || '000',
      mnc: account.mnc || '000',
      osVersion: account.osVersion,
      manufacturer: account.manufacturer,
      device: account.deviceName,
      osBuildNumber: account.osVersion,
      phoneId: account.fdid || '',
      localeLanguageIso_639_1: account.lg || 'en',
      localeCountryIso_3166_1Alpha_2: account.lc || 'US',
      device2: 'unknown',
    },
    pushName: account.pushName,
    sessionId: Math.floor(Math.random() * 2 ** 32) + 1,
    shortConnect: false,
    connectType: 1,
  };
  if (account.platform === 10) {
    config.tag23 = 1;
    config.tag24 = 5;
  }

  let socket = new Socket();
  const socketOptions = {
    host: 'g.whatsapp.net',
    port: 443,
    timeout: 10000,
    proxy: {
      host: '127.0.0.1',
      port: 1086,
    },
  };

  await socket.connectAsync(socketOptions);

  const major = 6;
  const minor = 3;
  let handshake = new HandShake({
    config,
    header: Buffer.concat([Buffer.from('WA'), Buffer.from([major, minor])]),
    serverStaticPublic: '',
    clientStaticKeyPair: account.clientStaticKeyPair,
    logger: console,
    socket: socket,
  });

  await handshake.perform({});

  console.log('获取到服务端公钥', Buffer.from(handshake.rs).toString('base64'));

  let chunks = await handshake.readWithDecrypt();
  console.log('握手成功后返回数据:', chunks, chunks.toString());
  assert(!!chunks.length, 'chunks.length > 0');

  socket.destroy();

  socket = new Socket();

  await socket.connectAsync(socketOptions);

  console.log('传入服务端公钥，使用 startHandshakeIK');
  handshake = new HandShake({
    config,
    header: Buffer.concat([Buffer.from('WA'), Buffer.from([major, minor])]),
    serverStaticPublic: account.serverStaticPublic,
    clientStaticKeyPair: account.clientStaticKeyPair,
    logger: console,
    socket: socket,
  });
  await handshake.perform({});
  chunks = await handshake.readWithDecrypt();
  console.log('握手成功后返回数据:', chunks, chunks.toString());
  assert(!!chunks.length, 'chunks.length > 0');
  socket.destroy();
});
