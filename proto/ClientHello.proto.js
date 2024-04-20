/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.ClientHello = (function () {
  /**
   * Namespace ClientHello.
   * @exports ClientHello
   * @namespace
   */
  var ClientHello = {};

  /**
   * UserAgentPlatform enum.
   * @name ClientHello.UserAgentPlatform
   * @enum {number}
   * @property {number} ANDROID=0 ANDROID value
   * @property {number} IOS=1 IOS value
   * @property {number} WINDOWS_PHONE=2 WINDOWS_PHONE value
   * @property {number} BLACKBERRY=3 BLACKBERRY value
   * @property {number} BLACKBERRYX=4 BLACKBERRYX value
   * @property {number} S40=5 S40 value
   * @property {number} S60=6 S60 value
   * @property {number} PYTHON_CLIENT=7 PYTHON_CLIENT value
   * @property {number} TIZEN=8 TIZEN value
   * @property {number} ENTERPRISE=9 ENTERPRISE value
   * @property {number} SMB_ANDROID=10 SMB_ANDROID value
   * @property {number} KAIOS=11 KAIOS value
   * @property {number} SMB_IOS=12 SMB_IOS value
   * @property {number} WINDOWS=13 WINDOWS value
   * @property {number} WEB=14 WEB value
   */
  ClientHello.UserAgentPlatform = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'ANDROID')] = 0;
    values[(valuesById[1] = 'IOS')] = 1;
    values[(valuesById[2] = 'WINDOWS_PHONE')] = 2;
    values[(valuesById[3] = 'BLACKBERRY')] = 3;
    values[(valuesById[4] = 'BLACKBERRYX')] = 4;
    values[(valuesById[5] = 'S40')] = 5;
    values[(valuesById[6] = 'S60')] = 6;
    values[(valuesById[7] = 'PYTHON_CLIENT')] = 7;
    values[(valuesById[8] = 'TIZEN')] = 8;
    values[(valuesById[9] = 'ENTERPRISE')] = 9;
    values[(valuesById[10] = 'SMB_ANDROID')] = 10;
    values[(valuesById[11] = 'KAIOS')] = 11;
    values[(valuesById[12] = 'SMB_IOS')] = 12;
    values[(valuesById[13] = 'WINDOWS')] = 13;
    values[(valuesById[14] = 'WEB')] = 14;
    return values;
  })();

  /**
   * ConnectType enum.
   * @name ClientHello.ConnectType
   * @enum {number}
   * @property {number} CELLULAR_UNKNOWN=0 CELLULAR_UNKNOWN value
   * @property {number} WIFI_UNKNOWN=1 WIFI_UNKNOWN value
   * @property {number} CELLULAR_EDGE=100 CELLULAR_EDGE value
   * @property {number} CELLULAR_IDEN=101 CELLULAR_IDEN value
   * @property {number} CELLULAR_UMTS=102 CELLULAR_UMTS value
   * @property {number} CELLULAR_EVDO=103 CELLULAR_EVDO value
   * @property {number} CELLULAR_GPRS=104 CELLULAR_GPRS value
   * @property {number} CELLULAR_HSDPA=105 CELLULAR_HSDPA value
   * @property {number} CELLULAR_HSUPA=106 CELLULAR_HSUPA value
   * @property {number} CELLULAR_HSPA=107 CELLULAR_HSPA value
   * @property {number} CELLULAR_CDMA=108 CELLULAR_CDMA value
   * @property {number} CELLULAR_1XRTT=109 CELLULAR_1XRTT value
   * @property {number} CELLULAR_EHRPD=110 CELLULAR_EHRPD value
   * @property {number} CELLULAR_LTE=111 CELLULAR_LTE value
   * @property {number} CELLULAR_HSPAP=112 CELLULAR_HSPAP value
   */
  ClientHello.ConnectType = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'CELLULAR_UNKNOWN')] = 0;
    values[(valuesById[1] = 'WIFI_UNKNOWN')] = 1;
    values[(valuesById[100] = 'CELLULAR_EDGE')] = 100;
    values[(valuesById[101] = 'CELLULAR_IDEN')] = 101;
    values[(valuesById[102] = 'CELLULAR_UMTS')] = 102;
    values[(valuesById[103] = 'CELLULAR_EVDO')] = 103;
    values[(valuesById[104] = 'CELLULAR_GPRS')] = 104;
    values[(valuesById[105] = 'CELLULAR_HSDPA')] = 105;
    values[(valuesById[106] = 'CELLULAR_HSUPA')] = 106;
    values[(valuesById[107] = 'CELLULAR_HSPA')] = 107;
    values[(valuesById[108] = 'CELLULAR_CDMA')] = 108;
    values[(valuesById[109] = 'CELLULAR_1XRTT')] = 109;
    values[(valuesById[110] = 'CELLULAR_EHRPD')] = 110;
    values[(valuesById[111] = 'CELLULAR_LTE')] = 111;
    values[(valuesById[112] = 'CELLULAR_HSPAP')] = 112;
    return values;
  })();

  /**
   * PlatformType enum.
   * @name ClientHello.PlatformType
   * @enum {number}
   * @property {number} UNKNOWN=0 UNKNOWN value
   * @property {number} CHROME=1 CHROME value
   * @property {number} FIREFOX=2 FIREFOX value
   * @property {number} IE=3 IE value
   * @property {number} OPERA=4 OPERA value
   * @property {number} SAFARI=5 SAFARI value
   * @property {number} EDGE=6 EDGE value
   * @property {number} DESKTOP=7 DESKTOP value
   * @property {number} IPAD=8 IPAD value
   * @property {number} ANDROID_TABLET=9 ANDROID_TABLET value
   * @property {number} OHANA=10 OHANA value
   * @property {number} ALOHA=11 ALOHA value
   * @property {number} CATALINA=12 CATALINA value
   * @property {number} TCL_TV=13 TCL_TV value
   * @property {number} IOS_PHONE=14 IOS_PHONE value
   * @property {number} IOS_CATALYST=15 IOS_CATALYST value
   * @property {number} ANDROID_PHONE=16 ANDROID_PHONE value
   * @property {number} ANDROID_AMBIGUOUS=17 ANDROID_AMBIGUOUS value
   * @property {number} WEAR_OS=18 WEAR_OS value
   * @property {number} AR_WRIST=19 AR_WRIST value
   * @property {number} AR_DEVICE=20 AR_DEVICE value
   * @property {number} UWP=21 UWP value
   * @property {number} VR=22 VR value
   */
  ClientHello.PlatformType = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'UNKNOWN')] = 0;
    values[(valuesById[1] = 'CHROME')] = 1;
    values[(valuesById[2] = 'FIREFOX')] = 2;
    values[(valuesById[3] = 'IE')] = 3;
    values[(valuesById[4] = 'OPERA')] = 4;
    values[(valuesById[5] = 'SAFARI')] = 5;
    values[(valuesById[6] = 'EDGE')] = 6;
    values[(valuesById[7] = 'DESKTOP')] = 7;
    values[(valuesById[8] = 'IPAD')] = 8;
    values[(valuesById[9] = 'ANDROID_TABLET')] = 9;
    values[(valuesById[10] = 'OHANA')] = 10;
    values[(valuesById[11] = 'ALOHA')] = 11;
    values[(valuesById[12] = 'CATALINA')] = 12;
    values[(valuesById[13] = 'TCL_TV')] = 13;
    values[(valuesById[14] = 'IOS_PHONE')] = 14;
    values[(valuesById[15] = 'IOS_CATALYST')] = 15;
    values[(valuesById[16] = 'ANDROID_PHONE')] = 16;
    values[(valuesById[17] = 'ANDROID_AMBIGUOUS')] = 17;
    values[(valuesById[18] = 'WEAR_OS')] = 18;
    values[(valuesById[19] = 'AR_WRIST')] = 19;
    values[(valuesById[20] = 'AR_DEVICE')] = 20;
    values[(valuesById[21] = 'UWP')] = 21;
    values[(valuesById[22] = 'VR')] = 22;
    return values;
  })();

  /**
   * ConnectReason enum.
   * @name ClientHello.ConnectReason
   * @enum {number}
   * @property {number} PUSH=0 PUSH value
   * @property {number} USER_ACTIVATED=1 USER_ACTIVATED value
   * @property {number} SCHEDULED=2 SCHEDULED value
   * @property {number} ERROR_RECONNECT=3 ERROR_RECONNECT value
   * @property {number} NETWORK_SWITCH=4 NETWORK_SWITCH value
   * @property {number} PING_RECONNECT=5 PING_RECONNECT value
   */
  ClientHello.ConnectReason = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'PUSH')] = 0;
    values[(valuesById[1] = 'USER_ACTIVATED')] = 1;
    values[(valuesById[2] = 'SCHEDULED')] = 2;
    values[(valuesById[3] = 'ERROR_RECONNECT')] = 3;
    values[(valuesById[4] = 'NETWORK_SWITCH')] = 4;
    values[(valuesById[5] = 'PING_RECONNECT')] = 5;
    return values;
  })();

  /**
   * ClientFeature enum.
   * @name ClientHello.ClientFeature
   * @enum {number}
   * @property {number} NONE=0 NONE value
   */
  ClientHello.ClientFeature = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'NONE')] = 0;
    return values;
  })();

  /**
   * ReleaseChannel enum.
   * @name ClientHello.ReleaseChannel
   * @enum {number}
   * @property {number} RELEASE=0 RELEASE value
   * @property {number} BETA=1 BETA value
   * @property {number} ALPHA=2 ALPHA value
   * @property {number} DEBUG=3 DEBUG value
   */
  ClientHello.ReleaseChannel = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'RELEASE')] = 0;
    values[(valuesById[1] = 'BETA')] = 1;
    values[(valuesById[2] = 'ALPHA')] = 2;
    values[(valuesById[3] = 'DEBUG')] = 3;
    return values;
  })();

  ClientHello.AppVersion = (function () {
    /**
     * Properties of an AppVersion.
     * @memberof ClientHello
     * @interface IAppVersion
     * @property {number} primary AppVersion primary
     * @property {number} secondary AppVersion secondary
     * @property {number} tertiary AppVersion tertiary
     * @property {number|null} [quaternary] AppVersion quaternary
     */

    /**
     * Constructs a new AppVersion.
     * @memberof ClientHello
     * @classdesc Represents an AppVersion.
     * @implements IAppVersion
     * @constructor
     * @param {ClientHello.IAppVersion=} [properties] Properties to set
     */
    function AppVersion(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppVersion primary.
     * @member {number} primary
     * @memberof ClientHello.AppVersion
     * @instance
     */
    AppVersion.prototype.primary = 0;

    /**
     * AppVersion secondary.
     * @member {number} secondary
     * @memberof ClientHello.AppVersion
     * @instance
     */
    AppVersion.prototype.secondary = 0;

    /**
     * AppVersion tertiary.
     * @member {number} tertiary
     * @memberof ClientHello.AppVersion
     * @instance
     */
    AppVersion.prototype.tertiary = 0;

    /**
     * AppVersion quaternary.
     * @member {number} quaternary
     * @memberof ClientHello.AppVersion
     * @instance
     */
    AppVersion.prototype.quaternary = 0;

    /**
     * Creates a new AppVersion instance using the specified properties.
     * @function create
     * @memberof ClientHello.AppVersion
     * @static
     * @param {ClientHello.IAppVersion=} [properties] Properties to set
     * @returns {ClientHello.AppVersion} AppVersion instance
     */
    AppVersion.create = function create(properties) {
      return new AppVersion(properties);
    };

    /**
     * Encodes the specified AppVersion message. Does not implicitly {@link ClientHello.AppVersion.verify|verify} messages.
     * @function encode
     * @memberof ClientHello.AppVersion
     * @static
     * @param {ClientHello.IAppVersion} message AppVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppVersion.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.primary);
      writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.secondary);
      writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.tertiary);
      if (message.quaternary != null && Object.hasOwnProperty.call(message, 'quaternary'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.quaternary);
      return writer;
    };

    /**
     * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link ClientHello.AppVersion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientHello.AppVersion
     * @static
     * @param {ClientHello.IAppVersion} message AppVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppVersion.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppVersion message from the specified reader or buffer.
     * @function decode
     * @memberof ClientHello.AppVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientHello.AppVersion} AppVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppVersion.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ClientHello.AppVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.primary = reader.uint32();
            break;
          case 2:
            message.secondary = reader.uint32();
            break;
          case 3:
            message.tertiary = reader.uint32();
            break;
          case 4:
            message.quaternary = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('primary'))
        throw $util.ProtocolError("missing required 'primary'", { instance: message });
      if (!message.hasOwnProperty('secondary'))
        throw $util.ProtocolError("missing required 'secondary'", { instance: message });
      if (!message.hasOwnProperty('tertiary'))
        throw $util.ProtocolError("missing required 'tertiary'", { instance: message });
      return message;
    };

    /**
     * Decodes an AppVersion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientHello.AppVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientHello.AppVersion} AppVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppVersion.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppVersion message.
     * @function verify
     * @memberof ClientHello.AppVersion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppVersion.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (!$util.isInteger(message.primary)) return 'primary: integer expected';
      if (!$util.isInteger(message.secondary)) return 'secondary: integer expected';
      if (!$util.isInteger(message.tertiary)) return 'tertiary: integer expected';
      if (message.quaternary != null && message.hasOwnProperty('quaternary'))
        if (!$util.isInteger(message.quaternary)) return 'quaternary: integer expected';
      return null;
    };

    /**
     * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientHello.AppVersion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientHello.AppVersion} AppVersion
     */
    AppVersion.fromObject = function fromObject(object) {
      if (object instanceof $root.ClientHello.AppVersion) return object;
      var message = new $root.ClientHello.AppVersion();
      if (object.primary != null) message.primary = object.primary >>> 0;
      if (object.secondary != null) message.secondary = object.secondary >>> 0;
      if (object.tertiary != null) message.tertiary = object.tertiary >>> 0;
      if (object.quaternary != null) message.quaternary = object.quaternary >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientHello.AppVersion
     * @static
     * @param {ClientHello.AppVersion} message AppVersion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppVersion.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.primary = 0;
        object.secondary = 0;
        object.tertiary = 0;
        object.quaternary = 0;
      }
      if (message.primary != null && message.hasOwnProperty('primary'))
        object.primary = message.primary;
      if (message.secondary != null && message.hasOwnProperty('secondary'))
        object.secondary = message.secondary;
      if (message.tertiary != null && message.hasOwnProperty('tertiary'))
        object.tertiary = message.tertiary;
      if (message.quaternary != null && message.hasOwnProperty('quaternary'))
        object.quaternary = message.quaternary;
      return object;
    };

    /**
     * Converts this AppVersion to JSON.
     * @function toJSON
     * @memberof ClientHello.AppVersion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppVersion.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppVersion;
  })();

  ClientHello.UserAgent = (function () {
    /**
     * Properties of a UserAgent.
     * @memberof ClientHello
     * @interface IUserAgent
     * @property {ClientHello.UserAgentPlatform|null} [platform] UserAgent platform
     * @property {ClientHello.IAppVersion|null} [appVersion] UserAgent appVersion
     * @property {string|null} [mcc] UserAgent mcc
     * @property {string|null} [mnc] UserAgent mnc
     * @property {string|null} [osVersion] UserAgent osVersion
     * @property {string|null} [manufacturer] UserAgent manufacturer
     * @property {string|null} [device] UserAgent device
     * @property {string|null} [osBuildNumber] UserAgent osBuildNumber
     * @property {string|null} [phoneId] UserAgent phoneId
     * @property {ClientHello.ReleaseChannel|null} [releaseChannel] UserAgent releaseChannel
     * @property {string|null} [localeLanguageIso_639_1] UserAgent localeLanguageIso_639_1
     * @property {string|null} [localeCountryIso_3166_1Alpha_2] UserAgent localeCountryIso_3166_1Alpha_2
     * @property {string|null} [device2] UserAgent device2
     */

    /**
     * Constructs a new UserAgent.
     * @memberof ClientHello
     * @classdesc Represents a UserAgent.
     * @implements IUserAgent
     * @constructor
     * @param {ClientHello.IUserAgent=} [properties] Properties to set
     */
    function UserAgent(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserAgent platform.
     * @member {ClientHello.UserAgentPlatform} platform
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.platform = 0;

    /**
     * UserAgent appVersion.
     * @member {ClientHello.IAppVersion|null|undefined} appVersion
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.appVersion = null;

    /**
     * UserAgent mcc.
     * @member {string} mcc
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.mcc = '';

    /**
     * UserAgent mnc.
     * @member {string} mnc
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.mnc = '';

    /**
     * UserAgent osVersion.
     * @member {string} osVersion
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.osVersion = '';

    /**
     * UserAgent manufacturer.
     * @member {string} manufacturer
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.manufacturer = '';

    /**
     * UserAgent device.
     * @member {string} device
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.device = '';

    /**
     * UserAgent osBuildNumber.
     * @member {string} osBuildNumber
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.osBuildNumber = '';

    /**
     * UserAgent phoneId.
     * @member {string} phoneId
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.phoneId = '';

    /**
     * UserAgent releaseChannel.
     * @member {ClientHello.ReleaseChannel} releaseChannel
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.releaseChannel = 0;

    /**
     * UserAgent localeLanguageIso_639_1.
     * @member {string} localeLanguageIso_639_1
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.localeLanguageIso_639_1 = '';

    /**
     * UserAgent localeCountryIso_3166_1Alpha_2.
     * @member {string} localeCountryIso_3166_1Alpha_2
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.localeCountryIso_3166_1Alpha_2 = '';

    /**
     * UserAgent device2.
     * @member {string} device2
     * @memberof ClientHello.UserAgent
     * @instance
     */
    UserAgent.prototype.device2 = '';

    /**
     * Creates a new UserAgent instance using the specified properties.
     * @function create
     * @memberof ClientHello.UserAgent
     * @static
     * @param {ClientHello.IUserAgent=} [properties] Properties to set
     * @returns {ClientHello.UserAgent} UserAgent instance
     */
    UserAgent.create = function create(properties) {
      return new UserAgent(properties);
    };

    /**
     * Encodes the specified UserAgent message. Does not implicitly {@link ClientHello.UserAgent.verify|verify} messages.
     * @function encode
     * @memberof ClientHello.UserAgent
     * @static
     * @param {ClientHello.IUserAgent} message UserAgent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAgent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.platform != null && Object.hasOwnProperty.call(message, 'platform'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.platform);
      if (message.appVersion != null && Object.hasOwnProperty.call(message, 'appVersion'))
        $root.ClientHello.AppVersion.encode(
          message.appVersion,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (message.mcc != null && Object.hasOwnProperty.call(message, 'mcc'))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.mcc);
      if (message.mnc != null && Object.hasOwnProperty.call(message, 'mnc'))
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.mnc);
      if (message.osVersion != null && Object.hasOwnProperty.call(message, 'osVersion'))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.osVersion);
      if (message.manufacturer != null && Object.hasOwnProperty.call(message, 'manufacturer'))
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.manufacturer);
      if (message.device != null && Object.hasOwnProperty.call(message, 'device'))
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.device);
      if (message.osBuildNumber != null && Object.hasOwnProperty.call(message, 'osBuildNumber'))
        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.osBuildNumber);
      if (message.phoneId != null && Object.hasOwnProperty.call(message, 'phoneId'))
        writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.phoneId);
      if (message.releaseChannel != null && Object.hasOwnProperty.call(message, 'releaseChannel'))
        writer.uint32(/* id 10, wireType 0 =*/ 80).int32(message.releaseChannel);
      if (
        message.localeLanguageIso_639_1 != null &&
        Object.hasOwnProperty.call(message, 'localeLanguageIso_639_1')
      )
        writer.uint32(/* id 11, wireType 2 =*/ 90).string(message.localeLanguageIso_639_1);
      if (
        message.localeCountryIso_3166_1Alpha_2 != null &&
        Object.hasOwnProperty.call(message, 'localeCountryIso_3166_1Alpha_2')
      )
        writer.uint32(/* id 12, wireType 2 =*/ 98).string(message.localeCountryIso_3166_1Alpha_2);
      if (message.device2 != null && Object.hasOwnProperty.call(message, 'device2'))
        writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.device2);
      return writer;
    };

    /**
     * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link ClientHello.UserAgent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientHello.UserAgent
     * @static
     * @param {ClientHello.IUserAgent} message UserAgent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAgent.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserAgent message from the specified reader or buffer.
     * @function decode
     * @memberof ClientHello.UserAgent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientHello.UserAgent} UserAgent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAgent.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ClientHello.UserAgent();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.platform = reader.int32();
            break;
          case 2:
            message.appVersion = $root.ClientHello.AppVersion.decode(reader, reader.uint32());
            break;
          case 3:
            message.mcc = reader.string();
            break;
          case 4:
            message.mnc = reader.string();
            break;
          case 5:
            message.osVersion = reader.string();
            break;
          case 6:
            message.manufacturer = reader.string();
            break;
          case 7:
            message.device = reader.string();
            break;
          case 8:
            message.osBuildNumber = reader.string();
            break;
          case 9:
            message.phoneId = reader.string();
            break;
          case 10:
            message.releaseChannel = reader.int32();
            break;
          case 11:
            message.localeLanguageIso_639_1 = reader.string();
            break;
          case 12:
            message.localeCountryIso_3166_1Alpha_2 = reader.string();
            break;
          case 13:
            message.device2 = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a UserAgent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientHello.UserAgent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientHello.UserAgent} UserAgent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAgent.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserAgent message.
     * @function verify
     * @memberof ClientHello.UserAgent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserAgent.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.platform != null && message.hasOwnProperty('platform'))
        switch (message.platform) {
          default:
            return 'platform: enum value expected';
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
            break;
        }
      if (message.appVersion != null && message.hasOwnProperty('appVersion')) {
        var error = $root.ClientHello.AppVersion.verify(message.appVersion);
        if (error) return 'appVersion.' + error;
      }
      if (message.mcc != null && message.hasOwnProperty('mcc'))
        if (!$util.isString(message.mcc)) return 'mcc: string expected';
      if (message.mnc != null && message.hasOwnProperty('mnc'))
        if (!$util.isString(message.mnc)) return 'mnc: string expected';
      if (message.osVersion != null && message.hasOwnProperty('osVersion'))
        if (!$util.isString(message.osVersion)) return 'osVersion: string expected';
      if (message.manufacturer != null && message.hasOwnProperty('manufacturer'))
        if (!$util.isString(message.manufacturer)) return 'manufacturer: string expected';
      if (message.device != null && message.hasOwnProperty('device'))
        if (!$util.isString(message.device)) return 'device: string expected';
      if (message.osBuildNumber != null && message.hasOwnProperty('osBuildNumber'))
        if (!$util.isString(message.osBuildNumber)) return 'osBuildNumber: string expected';
      if (message.phoneId != null && message.hasOwnProperty('phoneId'))
        if (!$util.isString(message.phoneId)) return 'phoneId: string expected';
      if (message.releaseChannel != null && message.hasOwnProperty('releaseChannel'))
        switch (message.releaseChannel) {
          default:
            return 'releaseChannel: enum value expected';
          case 0:
          case 1:
          case 2:
          case 3:
            break;
        }
      if (
        message.localeLanguageIso_639_1 != null &&
        message.hasOwnProperty('localeLanguageIso_639_1')
      )
        if (!$util.isString(message.localeLanguageIso_639_1))
          return 'localeLanguageIso_639_1: string expected';
      if (
        message.localeCountryIso_3166_1Alpha_2 != null &&
        message.hasOwnProperty('localeCountryIso_3166_1Alpha_2')
      )
        if (!$util.isString(message.localeCountryIso_3166_1Alpha_2))
          return 'localeCountryIso_3166_1Alpha_2: string expected';
      if (message.device2 != null && message.hasOwnProperty('device2'))
        if (!$util.isString(message.device2)) return 'device2: string expected';
      return null;
    };

    /**
     * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientHello.UserAgent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientHello.UserAgent} UserAgent
     */
    UserAgent.fromObject = function fromObject(object) {
      if (object instanceof $root.ClientHello.UserAgent) return object;
      var message = new $root.ClientHello.UserAgent();
      switch (object.platform) {
        case 'ANDROID':
        case 0:
          message.platform = 0;
          break;
        case 'IOS':
        case 1:
          message.platform = 1;
          break;
        case 'WINDOWS_PHONE':
        case 2:
          message.platform = 2;
          break;
        case 'BLACKBERRY':
        case 3:
          message.platform = 3;
          break;
        case 'BLACKBERRYX':
        case 4:
          message.platform = 4;
          break;
        case 'S40':
        case 5:
          message.platform = 5;
          break;
        case 'S60':
        case 6:
          message.platform = 6;
          break;
        case 'PYTHON_CLIENT':
        case 7:
          message.platform = 7;
          break;
        case 'TIZEN':
        case 8:
          message.platform = 8;
          break;
        case 'ENTERPRISE':
        case 9:
          message.platform = 9;
          break;
        case 'SMB_ANDROID':
        case 10:
          message.platform = 10;
          break;
        case 'KAIOS':
        case 11:
          message.platform = 11;
          break;
        case 'SMB_IOS':
        case 12:
          message.platform = 12;
          break;
        case 'WINDOWS':
        case 13:
          message.platform = 13;
          break;
        case 'WEB':
        case 14:
          message.platform = 14;
          break;
      }
      if (object.appVersion != null) {
        if (typeof object.appVersion !== 'object')
          throw TypeError('.ClientHello.UserAgent.appVersion: object expected');
        message.appVersion = $root.ClientHello.AppVersion.fromObject(object.appVersion);
      }
      if (object.mcc != null) message.mcc = String(object.mcc);
      if (object.mnc != null) message.mnc = String(object.mnc);
      if (object.osVersion != null) message.osVersion = String(object.osVersion);
      if (object.manufacturer != null) message.manufacturer = String(object.manufacturer);
      if (object.device != null) message.device = String(object.device);
      if (object.osBuildNumber != null) message.osBuildNumber = String(object.osBuildNumber);
      if (object.phoneId != null) message.phoneId = String(object.phoneId);
      switch (object.releaseChannel) {
        case 'RELEASE':
        case 0:
          message.releaseChannel = 0;
          break;
        case 'BETA':
        case 1:
          message.releaseChannel = 1;
          break;
        case 'ALPHA':
        case 2:
          message.releaseChannel = 2;
          break;
        case 'DEBUG':
        case 3:
          message.releaseChannel = 3;
          break;
      }
      if (object.localeLanguageIso_639_1 != null)
        message.localeLanguageIso_639_1 = String(object.localeLanguageIso_639_1);
      if (object.localeCountryIso_3166_1Alpha_2 != null)
        message.localeCountryIso_3166_1Alpha_2 = String(object.localeCountryIso_3166_1Alpha_2);
      if (object.device2 != null) message.device2 = String(object.device2);
      return message;
    };

    /**
     * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientHello.UserAgent
     * @static
     * @param {ClientHello.UserAgent} message UserAgent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserAgent.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.platform = options.enums === String ? 'ANDROID' : 0;
        object.appVersion = null;
        object.mcc = '';
        object.mnc = '';
        object.osVersion = '';
        object.manufacturer = '';
        object.device = '';
        object.osBuildNumber = '';
        object.phoneId = '';
        object.releaseChannel = options.enums === String ? 'RELEASE' : 0;
        object.localeLanguageIso_639_1 = '';
        object.localeCountryIso_3166_1Alpha_2 = '';
        object.device2 = '';
      }
      if (message.platform != null && message.hasOwnProperty('platform'))
        object.platform =
          options.enums === String
            ? $root.ClientHello.UserAgentPlatform[message.platform]
            : message.platform;
      if (message.appVersion != null && message.hasOwnProperty('appVersion'))
        object.appVersion = $root.ClientHello.AppVersion.toObject(message.appVersion, options);
      if (message.mcc != null && message.hasOwnProperty('mcc')) object.mcc = message.mcc;
      if (message.mnc != null && message.hasOwnProperty('mnc')) object.mnc = message.mnc;
      if (message.osVersion != null && message.hasOwnProperty('osVersion'))
        object.osVersion = message.osVersion;
      if (message.manufacturer != null && message.hasOwnProperty('manufacturer'))
        object.manufacturer = message.manufacturer;
      if (message.device != null && message.hasOwnProperty('device'))
        object.device = message.device;
      if (message.osBuildNumber != null && message.hasOwnProperty('osBuildNumber'))
        object.osBuildNumber = message.osBuildNumber;
      if (message.phoneId != null && message.hasOwnProperty('phoneId'))
        object.phoneId = message.phoneId;
      if (message.releaseChannel != null && message.hasOwnProperty('releaseChannel'))
        object.releaseChannel =
          options.enums === String
            ? $root.ClientHello.ReleaseChannel[message.releaseChannel]
            : message.releaseChannel;
      if (
        message.localeLanguageIso_639_1 != null &&
        message.hasOwnProperty('localeLanguageIso_639_1')
      )
        object.localeLanguageIso_639_1 = message.localeLanguageIso_639_1;
      if (
        message.localeCountryIso_3166_1Alpha_2 != null &&
        message.hasOwnProperty('localeCountryIso_3166_1Alpha_2')
      )
        object.localeCountryIso_3166_1Alpha_2 = message.localeCountryIso_3166_1Alpha_2;
      if (message.device2 != null && message.hasOwnProperty('device2'))
        object.device2 = message.device2;
      return object;
    };

    /**
     * Converts this UserAgent to JSON.
     * @function toJSON
     * @memberof ClientHello.UserAgent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserAgent.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserAgent;
  })();

  ClientHello.C2S = (function () {
    /**
     * Properties of a C2S.
     * @memberof ClientHello
     * @interface IC2S
     * @property {number|Long|null} [username] C2S username
     * @property {boolean|null} [passive] C2S passive
     * @property {Array.<ClientHello.ClientFeature>|null} [clientFeatures] C2S clientFeatures
     * @property {ClientHello.IUserAgent|null} [useragent] C2S useragent
     * @property {ClientHello.C2S.IWebInfo|null} [webInfo] C2S webInfo
     * @property {string|null} [pushName] C2S pushName
     * @property {number|null} [sessionId] C2S sessionId
     * @property {boolean|null} [shortConnect] C2S shortConnect
     * @property {ClientHello.ConnectType|null} [connectType] C2S connectType
     * @property {ClientHello.ConnectReason|null} [connectReason] C2S connectReason
     * @property {Array.<number>|null} [shards] C2S shards
     * @property {ClientHello.C2S.IDnsSource|null} [dnsSource] C2S dnsSource
     * @property {number|null} [connectAttemptCount] C2S connectAttemptCount
     * @property {number|null} [device] C2S device
     * @property {ClientHello.C2S.ICompanionRegData|null} [regData] C2S regData
     * @property {ClientHello.C2S.Product|null} [product] C2S product
     * @property {Uint8Array|null} [fbCat] C2S fbCat
     * @property {Uint8Array|null} [fbUserAgent] C2S fbUserAgent
     * @property {number|null} [oc] C2S oc
     * @property {number|null} [lc] C2S lc
     * @property {ClientHello.C2S.IosAppExtension|null} [iosAppExtension] C2S iosAppExtension
     * @property {number|Long|null} [fbAppId] C2S fbAppId
     * @property {Uint8Array|null} [fbDeviceId] C2S fbDeviceId
     * @property {boolean|null} [pull] C2S pull
     * @property {Uint8Array|null} [paddingBytes] C2S paddingBytes
     * @property {number|null} [yearClass] C2S yearClass
     * @property {number|null} [memClass] C2S memClass
     * @property {ClientHello.C2S.IInteropData|null} [interopData] C2S interopData
     */

    /**
     * Constructs a new C2S.
     * @memberof ClientHello
     * @classdesc Represents a C2S.
     * @implements IC2S
     * @constructor
     * @param {ClientHello.IC2S=} [properties] Properties to set
     */
    function C2S(properties) {
      this.clientFeatures = [];
      this.shards = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S username.
     * @member {number|Long} username
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.username = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * C2S passive.
     * @member {boolean} passive
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.passive = false;

    /**
     * C2S clientFeatures.
     * @member {Array.<ClientHello.ClientFeature>} clientFeatures
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.clientFeatures = $util.emptyArray;

    /**
     * C2S useragent.
     * @member {ClientHello.IUserAgent|null|undefined} useragent
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.useragent = null;

    /**
     * C2S webInfo.
     * @member {ClientHello.C2S.IWebInfo|null|undefined} webInfo
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.webInfo = null;

    /**
     * C2S pushName.
     * @member {string} pushName
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.pushName = '';

    /**
     * C2S sessionId.
     * @member {number} sessionId
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.sessionId = 0;

    /**
     * C2S shortConnect.
     * @member {boolean} shortConnect
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.shortConnect = false;

    /**
     * C2S connectType.
     * @member {ClientHello.ConnectType} connectType
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.connectType = 0;

    /**
     * C2S connectReason.
     * @member {ClientHello.ConnectReason} connectReason
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.connectReason = 0;

    /**
     * C2S shards.
     * @member {Array.<number>} shards
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.shards = $util.emptyArray;

    /**
     * C2S dnsSource.
     * @member {ClientHello.C2S.IDnsSource|null|undefined} dnsSource
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.dnsSource = null;

    /**
     * C2S connectAttemptCount.
     * @member {number} connectAttemptCount
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.connectAttemptCount = 0;

    /**
     * C2S device.
     * @member {number} device
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.device = 0;

    /**
     * C2S regData.
     * @member {ClientHello.C2S.ICompanionRegData|null|undefined} regData
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.regData = null;

    /**
     * C2S product.
     * @member {ClientHello.C2S.Product} product
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.product = 0;

    /**
     * C2S fbCat.
     * @member {Uint8Array} fbCat
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.fbCat = $util.newBuffer([]);

    /**
     * C2S fbUserAgent.
     * @member {Uint8Array} fbUserAgent
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.fbUserAgent = $util.newBuffer([]);

    /**
     * C2S oc.
     * @member {number} oc
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.oc = 0;

    /**
     * C2S lc.
     * @member {number} lc
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.lc = 0;

    /**
     * C2S iosAppExtension.
     * @member {ClientHello.C2S.IosAppExtension} iosAppExtension
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.iosAppExtension = 0;

    /**
     * C2S fbAppId.
     * @member {number|Long} fbAppId
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.fbAppId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * C2S fbDeviceId.
     * @member {Uint8Array} fbDeviceId
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.fbDeviceId = $util.newBuffer([]);

    /**
     * C2S pull.
     * @member {boolean} pull
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.pull = false;

    /**
     * C2S paddingBytes.
     * @member {Uint8Array} paddingBytes
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.paddingBytes = $util.newBuffer([]);

    /**
     * C2S yearClass.
     * @member {number} yearClass
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.yearClass = 0;

    /**
     * C2S memClass.
     * @member {number} memClass
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.memClass = 0;

    /**
     * C2S interopData.
     * @member {ClientHello.C2S.IInteropData|null|undefined} interopData
     * @memberof ClientHello.C2S
     * @instance
     */
    C2S.prototype.interopData = null;

    /**
     * Creates a new C2S instance using the specified properties.
     * @function create
     * @memberof ClientHello.C2S
     * @static
     * @param {ClientHello.IC2S=} [properties] Properties to set
     * @returns {ClientHello.C2S} C2S instance
     */
    C2S.create = function create(properties) {
      return new C2S(properties);
    };

    /**
     * Encodes the specified C2S message. Does not implicitly {@link ClientHello.C2S.verify|verify} messages.
     * @function encode
     * @memberof ClientHello.C2S
     * @static
     * @param {ClientHello.IC2S} message C2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.username != null && Object.hasOwnProperty.call(message, 'username'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.username);
      if (message.passive != null && Object.hasOwnProperty.call(message, 'passive'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.passive);
      if (message.clientFeatures != null && message.clientFeatures.length)
        for (var i = 0; i < message.clientFeatures.length; ++i)
          writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.clientFeatures[i]);
      if (message.useragent != null && Object.hasOwnProperty.call(message, 'useragent'))
        $root.ClientHello.UserAgent.encode(
          message.useragent,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (message.webInfo != null && Object.hasOwnProperty.call(message, 'webInfo'))
        $root.ClientHello.C2S.WebInfo.encode(
          message.webInfo,
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
      if (message.pushName != null && Object.hasOwnProperty.call(message, 'pushName'))
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.pushName);
      if (message.sessionId != null && Object.hasOwnProperty.call(message, 'sessionId'))
        writer.uint32(/* id 9, wireType 5 =*/ 77).sfixed32(message.sessionId);
      if (message.shortConnect != null && Object.hasOwnProperty.call(message, 'shortConnect'))
        writer.uint32(/* id 10, wireType 0 =*/ 80).bool(message.shortConnect);
      if (message.connectType != null && Object.hasOwnProperty.call(message, 'connectType'))
        writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.connectType);
      if (message.connectReason != null && Object.hasOwnProperty.call(message, 'connectReason'))
        writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.connectReason);
      if (message.shards != null && message.shards.length)
        for (var i = 0; i < message.shards.length; ++i)
          writer.uint32(/* id 14, wireType 5 =*/ 117).sfixed32(message.shards[i]);
      if (message.dnsSource != null && Object.hasOwnProperty.call(message, 'dnsSource'))
        $root.ClientHello.C2S.DnsSource.encode(
          message.dnsSource,
          writer.uint32(/* id 15, wireType 2 =*/ 122).fork()
        ).ldelim();
      if (
        message.connectAttemptCount != null &&
        Object.hasOwnProperty.call(message, 'connectAttemptCount')
      )
        writer.uint32(/* id 16, wireType 0 =*/ 128).uint32(message.connectAttemptCount);
      if (message.device != null && Object.hasOwnProperty.call(message, 'device'))
        writer.uint32(/* id 18, wireType 0 =*/ 144).uint32(message.device);
      if (message.regData != null && Object.hasOwnProperty.call(message, 'regData'))
        $root.ClientHello.C2S.CompanionRegData.encode(
          message.regData,
          writer.uint32(/* id 19, wireType 2 =*/ 154).fork()
        ).ldelim();
      if (message.product != null && Object.hasOwnProperty.call(message, 'product'))
        writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.product);
      if (message.fbCat != null && Object.hasOwnProperty.call(message, 'fbCat'))
        writer.uint32(/* id 21, wireType 2 =*/ 170).bytes(message.fbCat);
      if (message.fbUserAgent != null && Object.hasOwnProperty.call(message, 'fbUserAgent'))
        writer.uint32(/* id 22, wireType 2 =*/ 178).bytes(message.fbUserAgent);
      if (message.oc != null && Object.hasOwnProperty.call(message, 'oc'))
        writer.uint32(/* id 23, wireType 0 =*/ 184).uint32(message.oc);
      if (message.lc != null && Object.hasOwnProperty.call(message, 'lc'))
        writer.uint32(/* id 24, wireType 0 =*/ 192).uint32(message.lc);
      if (message.iosAppExtension != null && Object.hasOwnProperty.call(message, 'iosAppExtension'))
        writer.uint32(/* id 30, wireType 0 =*/ 240).int32(message.iosAppExtension);
      if (message.fbAppId != null && Object.hasOwnProperty.call(message, 'fbAppId'))
        writer.uint32(/* id 31, wireType 0 =*/ 248).uint64(message.fbAppId);
      if (message.fbDeviceId != null && Object.hasOwnProperty.call(message, 'fbDeviceId'))
        writer.uint32(/* id 32, wireType 2 =*/ 258).bytes(message.fbDeviceId);
      if (message.pull != null && Object.hasOwnProperty.call(message, 'pull'))
        writer.uint32(/* id 33, wireType 0 =*/ 264).bool(message.pull);
      if (message.paddingBytes != null && Object.hasOwnProperty.call(message, 'paddingBytes'))
        writer.uint32(/* id 34, wireType 2 =*/ 274).bytes(message.paddingBytes);
      if (message.yearClass != null && Object.hasOwnProperty.call(message, 'yearClass'))
        writer.uint32(/* id 36, wireType 0 =*/ 288).uint32(message.yearClass);
      if (message.memClass != null && Object.hasOwnProperty.call(message, 'memClass'))
        writer.uint32(/* id 37, wireType 0 =*/ 296).uint32(message.memClass);
      if (message.interopData != null && Object.hasOwnProperty.call(message, 'interopData'))
        $root.ClientHello.C2S.InteropData.encode(
          message.interopData,
          writer.uint32(/* id 38, wireType 2 =*/ 306).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified C2S message, length delimited. Does not implicitly {@link ClientHello.C2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientHello.C2S
     * @static
     * @param {ClientHello.IC2S} message C2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S message from the specified reader or buffer.
     * @function decode
     * @memberof ClientHello.C2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientHello.C2S} C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ClientHello.C2S();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.username = reader.uint64();
            break;
          case 3:
            message.passive = reader.bool();
            break;
          case 4:
            if (!(message.clientFeatures && message.clientFeatures.length))
              message.clientFeatures = [];
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.clientFeatures.push(reader.int32());
            } else message.clientFeatures.push(reader.int32());
            break;
          case 5:
            message.useragent = $root.ClientHello.UserAgent.decode(reader, reader.uint32());
            break;
          case 6:
            message.webInfo = $root.ClientHello.C2S.WebInfo.decode(reader, reader.uint32());
            break;
          case 7:
            message.pushName = reader.string();
            break;
          case 9:
            message.sessionId = reader.sfixed32();
            break;
          case 10:
            message.shortConnect = reader.bool();
            break;
          case 12:
            message.connectType = reader.int32();
            break;
          case 13:
            message.connectReason = reader.int32();
            break;
          case 14:
            if (!(message.shards && message.shards.length)) message.shards = [];
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.shards.push(reader.sfixed32());
            } else message.shards.push(reader.sfixed32());
            break;
          case 15:
            message.dnsSource = $root.ClientHello.C2S.DnsSource.decode(reader, reader.uint32());
            break;
          case 16:
            message.connectAttemptCount = reader.uint32();
            break;
          case 18:
            message.device = reader.uint32();
            break;
          case 19:
            message.regData = $root.ClientHello.C2S.CompanionRegData.decode(
              reader,
              reader.uint32()
            );
            break;
          case 20:
            message.product = reader.int32();
            break;
          case 21:
            message.fbCat = reader.bytes();
            break;
          case 22:
            message.fbUserAgent = reader.bytes();
            break;
          case 23:
            message.oc = reader.uint32();
            break;
          case 24:
            message.lc = reader.uint32();
            break;
          case 30:
            message.iosAppExtension = reader.int32();
            break;
          case 31:
            message.fbAppId = reader.uint64();
            break;
          case 32:
            message.fbDeviceId = reader.bytes();
            break;
          case 33:
            message.pull = reader.bool();
            break;
          case 34:
            message.paddingBytes = reader.bytes();
            break;
          case 36:
            message.yearClass = reader.uint32();
            break;
          case 37:
            message.memClass = reader.uint32();
            break;
          case 38:
            message.interopData = $root.ClientHello.C2S.InteropData.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a C2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientHello.C2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientHello.C2S} C2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S message.
     * @function verify
     * @memberof ClientHello.C2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.username != null && message.hasOwnProperty('username'))
        if (
          !$util.isInteger(message.username) &&
          !(
            message.username &&
            $util.isInteger(message.username.low) &&
            $util.isInteger(message.username.high)
          )
        )
          return 'username: integer|Long expected';
      if (message.passive != null && message.hasOwnProperty('passive'))
        if (typeof message.passive !== 'boolean') return 'passive: boolean expected';
      if (message.clientFeatures != null && message.hasOwnProperty('clientFeatures')) {
        if (!Array.isArray(message.clientFeatures)) return 'clientFeatures: array expected';
        for (var i = 0; i < message.clientFeatures.length; ++i)
          switch (message.clientFeatures[i]) {
            default:
              return 'clientFeatures: enum value[] expected';
            case 0:
              break;
          }
      }
      if (message.useragent != null && message.hasOwnProperty('useragent')) {
        var error = $root.ClientHello.UserAgent.verify(message.useragent);
        if (error) return 'useragent.' + error;
      }
      if (message.webInfo != null && message.hasOwnProperty('webInfo')) {
        var error = $root.ClientHello.C2S.WebInfo.verify(message.webInfo);
        if (error) return 'webInfo.' + error;
      }
      if (message.pushName != null && message.hasOwnProperty('pushName'))
        if (!$util.isString(message.pushName)) return 'pushName: string expected';
      if (message.sessionId != null && message.hasOwnProperty('sessionId'))
        if (!$util.isInteger(message.sessionId)) return 'sessionId: integer expected';
      if (message.shortConnect != null && message.hasOwnProperty('shortConnect'))
        if (typeof message.shortConnect !== 'boolean') return 'shortConnect: boolean expected';
      if (message.connectType != null && message.hasOwnProperty('connectType'))
        switch (message.connectType) {
          default:
            return 'connectType: enum value expected';
          case 0:
          case 1:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
            break;
        }
      if (message.connectReason != null && message.hasOwnProperty('connectReason'))
        switch (message.connectReason) {
          default:
            return 'connectReason: enum value expected';
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
        }
      if (message.shards != null && message.hasOwnProperty('shards')) {
        if (!Array.isArray(message.shards)) return 'shards: array expected';
        for (var i = 0; i < message.shards.length; ++i)
          if (!$util.isInteger(message.shards[i])) return 'shards: integer[] expected';
      }
      if (message.dnsSource != null && message.hasOwnProperty('dnsSource')) {
        var error = $root.ClientHello.C2S.DnsSource.verify(message.dnsSource);
        if (error) return 'dnsSource.' + error;
      }
      if (message.connectAttemptCount != null && message.hasOwnProperty('connectAttemptCount'))
        if (!$util.isInteger(message.connectAttemptCount))
          return 'connectAttemptCount: integer expected';
      if (message.device != null && message.hasOwnProperty('device'))
        if (!$util.isInteger(message.device)) return 'device: integer expected';
      if (message.regData != null && message.hasOwnProperty('regData')) {
        var error = $root.ClientHello.C2S.CompanionRegData.verify(message.regData);
        if (error) return 'regData.' + error;
      }
      if (message.product != null && message.hasOwnProperty('product'))
        switch (message.product) {
          default:
            return 'product: enum value expected';
          case 0:
          case 1:
          case 2:
          case 3:
            break;
        }
      if (message.fbCat != null && message.hasOwnProperty('fbCat'))
        if (
          !(
            (message.fbCat && typeof message.fbCat.length === 'number') ||
            $util.isString(message.fbCat)
          )
        )
          return 'fbCat: buffer expected';
      if (message.fbUserAgent != null && message.hasOwnProperty('fbUserAgent'))
        if (
          !(
            (message.fbUserAgent && typeof message.fbUserAgent.length === 'number') ||
            $util.isString(message.fbUserAgent)
          )
        )
          return 'fbUserAgent: buffer expected';
      if (message.oc != null && message.hasOwnProperty('oc'))
        if (!$util.isInteger(message.oc)) return 'oc: integer expected';
      if (message.lc != null && message.hasOwnProperty('lc'))
        if (!$util.isInteger(message.lc)) return 'lc: integer expected';
      if (message.iosAppExtension != null && message.hasOwnProperty('iosAppExtension'))
        switch (message.iosAppExtension) {
          default:
            return 'iosAppExtension: enum value expected';
          case 0:
          case 1:
          case 2:
            break;
        }
      if (message.fbAppId != null && message.hasOwnProperty('fbAppId'))
        if (
          !$util.isInteger(message.fbAppId) &&
          !(
            message.fbAppId &&
            $util.isInteger(message.fbAppId.low) &&
            $util.isInteger(message.fbAppId.high)
          )
        )
          return 'fbAppId: integer|Long expected';
      if (message.fbDeviceId != null && message.hasOwnProperty('fbDeviceId'))
        if (
          !(
            (message.fbDeviceId && typeof message.fbDeviceId.length === 'number') ||
            $util.isString(message.fbDeviceId)
          )
        )
          return 'fbDeviceId: buffer expected';
      if (message.pull != null && message.hasOwnProperty('pull'))
        if (typeof message.pull !== 'boolean') return 'pull: boolean expected';
      if (message.paddingBytes != null && message.hasOwnProperty('paddingBytes'))
        if (
          !(
            (message.paddingBytes && typeof message.paddingBytes.length === 'number') ||
            $util.isString(message.paddingBytes)
          )
        )
          return 'paddingBytes: buffer expected';
      if (message.yearClass != null && message.hasOwnProperty('yearClass'))
        if (!$util.isInteger(message.yearClass)) return 'yearClass: integer expected';
      if (message.memClass != null && message.hasOwnProperty('memClass'))
        if (!$util.isInteger(message.memClass)) return 'memClass: integer expected';
      if (message.interopData != null && message.hasOwnProperty('interopData')) {
        var error = $root.ClientHello.C2S.InteropData.verify(message.interopData);
        if (error) return 'interopData.' + error;
      }
      return null;
    };

    /**
     * Creates a C2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientHello.C2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientHello.C2S} C2S
     */
    C2S.fromObject = function fromObject(object) {
      if (object instanceof $root.ClientHello.C2S) return object;
      var message = new $root.ClientHello.C2S();
      if (object.username != null)
        if ($util.Long) (message.username = $util.Long.fromValue(object.username)).unsigned = true;
        else if (typeof object.username === 'string')
          message.username = parseInt(object.username, 10);
        else if (typeof object.username === 'number') message.username = object.username;
        else if (typeof object.username === 'object')
          message.username = new $util.LongBits(
            object.username.low >>> 0,
            object.username.high >>> 0
          ).toNumber(true);
      if (object.passive != null) message.passive = Boolean(object.passive);
      if (object.clientFeatures) {
        if (!Array.isArray(object.clientFeatures))
          throw TypeError('.ClientHello.C2S.clientFeatures: array expected');
        message.clientFeatures = [];
        for (var i = 0; i < object.clientFeatures.length; ++i)
          switch (object.clientFeatures[i]) {
            default:
            case 'NONE':
            case 0:
              message.clientFeatures[i] = 0;
              break;
          }
      }
      if (object.useragent != null) {
        if (typeof object.useragent !== 'object')
          throw TypeError('.ClientHello.C2S.useragent: object expected');
        message.useragent = $root.ClientHello.UserAgent.fromObject(object.useragent);
      }
      if (object.webInfo != null) {
        if (typeof object.webInfo !== 'object')
          throw TypeError('.ClientHello.C2S.webInfo: object expected');
        message.webInfo = $root.ClientHello.C2S.WebInfo.fromObject(object.webInfo);
      }
      if (object.pushName != null) message.pushName = String(object.pushName);
      if (object.sessionId != null) message.sessionId = object.sessionId | 0;
      if (object.shortConnect != null) message.shortConnect = Boolean(object.shortConnect);
      switch (object.connectType) {
        case 'CELLULAR_UNKNOWN':
        case 0:
          message.connectType = 0;
          break;
        case 'WIFI_UNKNOWN':
        case 1:
          message.connectType = 1;
          break;
        case 'CELLULAR_EDGE':
        case 100:
          message.connectType = 100;
          break;
        case 'CELLULAR_IDEN':
        case 101:
          message.connectType = 101;
          break;
        case 'CELLULAR_UMTS':
        case 102:
          message.connectType = 102;
          break;
        case 'CELLULAR_EVDO':
        case 103:
          message.connectType = 103;
          break;
        case 'CELLULAR_GPRS':
        case 104:
          message.connectType = 104;
          break;
        case 'CELLULAR_HSDPA':
        case 105:
          message.connectType = 105;
          break;
        case 'CELLULAR_HSUPA':
        case 106:
          message.connectType = 106;
          break;
        case 'CELLULAR_HSPA':
        case 107:
          message.connectType = 107;
          break;
        case 'CELLULAR_CDMA':
        case 108:
          message.connectType = 108;
          break;
        case 'CELLULAR_1XRTT':
        case 109:
          message.connectType = 109;
          break;
        case 'CELLULAR_EHRPD':
        case 110:
          message.connectType = 110;
          break;
        case 'CELLULAR_LTE':
        case 111:
          message.connectType = 111;
          break;
        case 'CELLULAR_HSPAP':
        case 112:
          message.connectType = 112;
          break;
      }
      switch (object.connectReason) {
        case 'PUSH':
        case 0:
          message.connectReason = 0;
          break;
        case 'USER_ACTIVATED':
        case 1:
          message.connectReason = 1;
          break;
        case 'SCHEDULED':
        case 2:
          message.connectReason = 2;
          break;
        case 'ERROR_RECONNECT':
        case 3:
          message.connectReason = 3;
          break;
        case 'NETWORK_SWITCH':
        case 4:
          message.connectReason = 4;
          break;
        case 'PING_RECONNECT':
        case 5:
          message.connectReason = 5;
          break;
      }
      if (object.shards) {
        if (!Array.isArray(object.shards))
          throw TypeError('.ClientHello.C2S.shards: array expected');
        message.shards = [];
        for (var i = 0; i < object.shards.length; ++i) message.shards[i] = object.shards[i] | 0;
      }
      if (object.dnsSource != null) {
        if (typeof object.dnsSource !== 'object')
          throw TypeError('.ClientHello.C2S.dnsSource: object expected');
        message.dnsSource = $root.ClientHello.C2S.DnsSource.fromObject(object.dnsSource);
      }
      if (object.connectAttemptCount != null)
        message.connectAttemptCount = object.connectAttemptCount >>> 0;
      if (object.device != null) message.device = object.device >>> 0;
      if (object.regData != null) {
        if (typeof object.regData !== 'object')
          throw TypeError('.ClientHello.C2S.regData: object expected');
        message.regData = $root.ClientHello.C2S.CompanionRegData.fromObject(object.regData);
      }
      switch (object.product) {
        case 'WHATSAPP':
        case 0:
          message.product = 0;
          break;
        case 'MESSENGER':
        case 1:
          message.product = 1;
          break;
        case 'INTEROP':
        case 2:
          message.product = 2;
          break;
        case 'INTEROP_MSGR':
        case 3:
          message.product = 3;
          break;
      }
      if (object.fbCat != null)
        if (typeof object.fbCat === 'string')
          $util.base64.decode(
            object.fbCat,
            (message.fbCat = $util.newBuffer($util.base64.length(object.fbCat))),
            0
          );
        else if (object.fbCat.length) message.fbCat = object.fbCat;
      if (object.fbUserAgent != null)
        if (typeof object.fbUserAgent === 'string')
          $util.base64.decode(
            object.fbUserAgent,
            (message.fbUserAgent = $util.newBuffer($util.base64.length(object.fbUserAgent))),
            0
          );
        else if (object.fbUserAgent.length) message.fbUserAgent = object.fbUserAgent;
      if (object.oc != null) message.oc = object.oc >>> 0;
      if (object.lc != null) message.lc = object.lc >>> 0;
      switch (object.iosAppExtension) {
        case 'EXT_0':
        case 0:
          message.iosAppExtension = 0;
          break;
        case 'EXT_1':
        case 1:
          message.iosAppExtension = 1;
          break;
        case 'EXT_2':
        case 2:
          message.iosAppExtension = 2;
          break;
      }
      if (object.fbAppId != null)
        if ($util.Long) (message.fbAppId = $util.Long.fromValue(object.fbAppId)).unsigned = true;
        else if (typeof object.fbAppId === 'string') message.fbAppId = parseInt(object.fbAppId, 10);
        else if (typeof object.fbAppId === 'number') message.fbAppId = object.fbAppId;
        else if (typeof object.fbAppId === 'object')
          message.fbAppId = new $util.LongBits(
            object.fbAppId.low >>> 0,
            object.fbAppId.high >>> 0
          ).toNumber(true);
      if (object.fbDeviceId != null)
        if (typeof object.fbDeviceId === 'string')
          $util.base64.decode(
            object.fbDeviceId,
            (message.fbDeviceId = $util.newBuffer($util.base64.length(object.fbDeviceId))),
            0
          );
        else if (object.fbDeviceId.length) message.fbDeviceId = object.fbDeviceId;
      if (object.pull != null) message.pull = Boolean(object.pull);
      if (object.paddingBytes != null)
        if (typeof object.paddingBytes === 'string')
          $util.base64.decode(
            object.paddingBytes,
            (message.paddingBytes = $util.newBuffer($util.base64.length(object.paddingBytes))),
            0
          );
        else if (object.paddingBytes.length) message.paddingBytes = object.paddingBytes;
      if (object.yearClass != null) message.yearClass = object.yearClass >>> 0;
      if (object.memClass != null) message.memClass = object.memClass >>> 0;
      if (object.interopData != null) {
        if (typeof object.interopData !== 'object')
          throw TypeError('.ClientHello.C2S.interopData: object expected');
        message.interopData = $root.ClientHello.C2S.InteropData.fromObject(object.interopData);
      }
      return message;
    };

    /**
     * Creates a plain object from a C2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientHello.C2S
     * @static
     * @param {ClientHello.C2S} message C2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) {
        object.clientFeatures = [];
        object.shards = [];
      }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.username =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.username = options.longs === String ? '0' : 0;
        object.passive = false;
        object.useragent = null;
        object.webInfo = null;
        object.pushName = '';
        object.sessionId = 0;
        object.shortConnect = false;
        object.connectType = options.enums === String ? 'CELLULAR_UNKNOWN' : 0;
        object.connectReason = options.enums === String ? 'PUSH' : 0;
        object.dnsSource = null;
        object.connectAttemptCount = 0;
        object.device = 0;
        object.regData = null;
        object.product = options.enums === String ? 'WHATSAPP' : 0;
        if (options.bytes === String) object.fbCat = '';
        else {
          object.fbCat = [];
          if (options.bytes !== Array) object.fbCat = $util.newBuffer(object.fbCat);
        }
        if (options.bytes === String) object.fbUserAgent = '';
        else {
          object.fbUserAgent = [];
          if (options.bytes !== Array) object.fbUserAgent = $util.newBuffer(object.fbUserAgent);
        }
        object.oc = 0;
        object.lc = 0;
        object.iosAppExtension = options.enums === String ? 'EXT_0' : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.fbAppId =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fbAppId = options.longs === String ? '0' : 0;
        if (options.bytes === String) object.fbDeviceId = '';
        else {
          object.fbDeviceId = [];
          if (options.bytes !== Array) object.fbDeviceId = $util.newBuffer(object.fbDeviceId);
        }
        object.pull = false;
        if (options.bytes === String) object.paddingBytes = '';
        else {
          object.paddingBytes = [];
          if (options.bytes !== Array) object.paddingBytes = $util.newBuffer(object.paddingBytes);
        }
        object.yearClass = 0;
        object.memClass = 0;
        object.interopData = null;
      }
      if (message.username != null && message.hasOwnProperty('username'))
        if (typeof message.username === 'number')
          object.username = options.longs === String ? String(message.username) : message.username;
        else
          object.username =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.username)
              : options.longs === Number
              ? new $util.LongBits(
                  message.username.low >>> 0,
                  message.username.high >>> 0
                ).toNumber(true)
              : message.username;
      if (message.passive != null && message.hasOwnProperty('passive'))
        object.passive = message.passive;
      if (message.clientFeatures && message.clientFeatures.length) {
        object.clientFeatures = [];
        for (var j = 0; j < message.clientFeatures.length; ++j)
          object.clientFeatures[j] =
            options.enums === String
              ? $root.ClientHello.ClientFeature[message.clientFeatures[j]]
              : message.clientFeatures[j];
      }
      if (message.useragent != null && message.hasOwnProperty('useragent'))
        object.useragent = $root.ClientHello.UserAgent.toObject(message.useragent, options);
      if (message.webInfo != null && message.hasOwnProperty('webInfo'))
        object.webInfo = $root.ClientHello.C2S.WebInfo.toObject(message.webInfo, options);
      if (message.pushName != null && message.hasOwnProperty('pushName'))
        object.pushName = message.pushName;
      if (message.sessionId != null && message.hasOwnProperty('sessionId'))
        object.sessionId = message.sessionId;
      if (message.shortConnect != null && message.hasOwnProperty('shortConnect'))
        object.shortConnect = message.shortConnect;
      if (message.connectType != null && message.hasOwnProperty('connectType'))
        object.connectType =
          options.enums === String
            ? $root.ClientHello.ConnectType[message.connectType]
            : message.connectType;
      if (message.connectReason != null && message.hasOwnProperty('connectReason'))
        object.connectReason =
          options.enums === String
            ? $root.ClientHello.ConnectReason[message.connectReason]
            : message.connectReason;
      if (message.shards && message.shards.length) {
        object.shards = [];
        for (var j = 0; j < message.shards.length; ++j) object.shards[j] = message.shards[j];
      }
      if (message.dnsSource != null && message.hasOwnProperty('dnsSource'))
        object.dnsSource = $root.ClientHello.C2S.DnsSource.toObject(message.dnsSource, options);
      if (message.connectAttemptCount != null && message.hasOwnProperty('connectAttemptCount'))
        object.connectAttemptCount = message.connectAttemptCount;
      if (message.device != null && message.hasOwnProperty('device'))
        object.device = message.device;
      if (message.regData != null && message.hasOwnProperty('regData'))
        object.regData = $root.ClientHello.C2S.CompanionRegData.toObject(message.regData, options);
      if (message.product != null && message.hasOwnProperty('product'))
        object.product =
          options.enums === String
            ? $root.ClientHello.C2S.Product[message.product]
            : message.product;
      if (message.fbCat != null && message.hasOwnProperty('fbCat'))
        object.fbCat =
          options.bytes === String
            ? $util.base64.encode(message.fbCat, 0, message.fbCat.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.fbCat)
            : message.fbCat;
      if (message.fbUserAgent != null && message.hasOwnProperty('fbUserAgent'))
        object.fbUserAgent =
          options.bytes === String
            ? $util.base64.encode(message.fbUserAgent, 0, message.fbUserAgent.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.fbUserAgent)
            : message.fbUserAgent;
      if (message.oc != null && message.hasOwnProperty('oc')) object.oc = message.oc;
      if (message.lc != null && message.hasOwnProperty('lc')) object.lc = message.lc;
      if (message.iosAppExtension != null && message.hasOwnProperty('iosAppExtension'))
        object.iosAppExtension =
          options.enums === String
            ? $root.ClientHello.C2S.IosAppExtension[message.iosAppExtension]
            : message.iosAppExtension;
      if (message.fbAppId != null && message.hasOwnProperty('fbAppId'))
        if (typeof message.fbAppId === 'number')
          object.fbAppId = options.longs === String ? String(message.fbAppId) : message.fbAppId;
        else
          object.fbAppId =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fbAppId)
              : options.longs === Number
              ? new $util.LongBits(message.fbAppId.low >>> 0, message.fbAppId.high >>> 0).toNumber(
                  true
                )
              : message.fbAppId;
      if (message.fbDeviceId != null && message.hasOwnProperty('fbDeviceId'))
        object.fbDeviceId =
          options.bytes === String
            ? $util.base64.encode(message.fbDeviceId, 0, message.fbDeviceId.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.fbDeviceId)
            : message.fbDeviceId;
      if (message.pull != null && message.hasOwnProperty('pull')) object.pull = message.pull;
      if (message.paddingBytes != null && message.hasOwnProperty('paddingBytes'))
        object.paddingBytes =
          options.bytes === String
            ? $util.base64.encode(message.paddingBytes, 0, message.paddingBytes.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.paddingBytes)
            : message.paddingBytes;
      if (message.yearClass != null && message.hasOwnProperty('yearClass'))
        object.yearClass = message.yearClass;
      if (message.memClass != null && message.hasOwnProperty('memClass'))
        object.memClass = message.memClass;
      if (message.interopData != null && message.hasOwnProperty('interopData'))
        object.interopData = $root.ClientHello.C2S.InteropData.toObject(
          message.interopData,
          options
        );
      return object;
    };

    /**
     * Converts this C2S to JSON.
     * @function toJSON
     * @memberof ClientHello.C2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    C2S.DnsSource = (function () {
      /**
       * Properties of a DnsSource.
       * @memberof ClientHello.C2S
       * @interface IDnsSource
       * @property {ClientHello.C2S.DnsSource.DnsMethod|null} [dnsMethod] DnsSource dnsMethod
       * @property {boolean|null} [appCached] DnsSource appCached
       */

      /**
       * Constructs a new DnsSource.
       * @memberof ClientHello.C2S
       * @classdesc Represents a DnsSource.
       * @implements IDnsSource
       * @constructor
       * @param {ClientHello.C2S.IDnsSource=} [properties] Properties to set
       */
      function DnsSource(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * DnsSource dnsMethod.
       * @member {ClientHello.C2S.DnsSource.DnsMethod} dnsMethod
       * @memberof ClientHello.C2S.DnsSource
       * @instance
       */
      DnsSource.prototype.dnsMethod = 0;

      /**
       * DnsSource appCached.
       * @member {boolean} appCached
       * @memberof ClientHello.C2S.DnsSource
       * @instance
       */
      DnsSource.prototype.appCached = false;

      /**
       * Creates a new DnsSource instance using the specified properties.
       * @function create
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {ClientHello.C2S.IDnsSource=} [properties] Properties to set
       * @returns {ClientHello.C2S.DnsSource} DnsSource instance
       */
      DnsSource.create = function create(properties) {
        return new DnsSource(properties);
      };

      /**
       * Encodes the specified DnsSource message. Does not implicitly {@link ClientHello.C2S.DnsSource.verify|verify} messages.
       * @function encode
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {ClientHello.C2S.IDnsSource} message DnsSource message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DnsSource.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.dnsMethod != null && Object.hasOwnProperty.call(message, 'dnsMethod'))
          writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.dnsMethod);
        if (message.appCached != null && Object.hasOwnProperty.call(message, 'appCached'))
          writer.uint32(/* id 16, wireType 0 =*/ 128).bool(message.appCached);
        return writer;
      };

      /**
       * Encodes the specified DnsSource message, length delimited. Does not implicitly {@link ClientHello.C2S.DnsSource.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {ClientHello.C2S.IDnsSource} message DnsSource message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DnsSource.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DnsSource message from the specified reader or buffer.
       * @function decode
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientHello.C2S.DnsSource} DnsSource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DnsSource.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientHello.C2S.DnsSource();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 15:
              message.dnsMethod = reader.int32();
              break;
            case 16:
              message.appCached = reader.bool();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DnsSource message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientHello.C2S.DnsSource} DnsSource
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DnsSource.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DnsSource message.
       * @function verify
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DnsSource.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.dnsMethod != null && message.hasOwnProperty('dnsMethod'))
          switch (message.dnsMethod) {
            default:
              return 'dnsMethod: enum value expected';
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (message.appCached != null && message.hasOwnProperty('appCached'))
          if (typeof message.appCached !== 'boolean') return 'appCached: boolean expected';
        return null;
      };

      /**
       * Creates a DnsSource message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientHello.C2S.DnsSource} DnsSource
       */
      DnsSource.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHello.C2S.DnsSource) return object;
        var message = new $root.ClientHello.C2S.DnsSource();
        switch (object.dnsMethod) {
          case 'METHOD_0':
          case 0:
            message.dnsMethod = 0;
            break;
          case 'METHOD_1':
          case 1:
            message.dnsMethod = 1;
            break;
          case 'METHOD_2':
          case 2:
            message.dnsMethod = 2;
            break;
          case 'METHOD_3':
          case 3:
            message.dnsMethod = 3;
            break;
        }
        if (object.appCached != null) message.appCached = Boolean(object.appCached);
        return message;
      };

      /**
       * Creates a plain object from a DnsSource message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientHello.C2S.DnsSource
       * @static
       * @param {ClientHello.C2S.DnsSource} message DnsSource
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DnsSource.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.dnsMethod = options.enums === String ? 'METHOD_0' : 0;
          object.appCached = false;
        }
        if (message.dnsMethod != null && message.hasOwnProperty('dnsMethod'))
          object.dnsMethod =
            options.enums === String
              ? $root.ClientHello.C2S.DnsSource.DnsMethod[message.dnsMethod]
              : message.dnsMethod;
        if (message.appCached != null && message.hasOwnProperty('appCached'))
          object.appCached = message.appCached;
        return object;
      };

      /**
       * Converts this DnsSource to JSON.
       * @function toJSON
       * @memberof ClientHello.C2S.DnsSource
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DnsSource.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * DnsMethod enum.
       * @name ClientHello.C2S.DnsSource.DnsMethod
       * @enum {number}
       * @property {number} METHOD_0=0 METHOD_0 value
       * @property {number} METHOD_1=1 METHOD_1 value
       * @property {number} METHOD_2=2 METHOD_2 value
       * @property {number} METHOD_3=3 METHOD_3 value
       */
      DnsSource.DnsMethod = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'METHOD_0')] = 0;
        values[(valuesById[1] = 'METHOD_1')] = 1;
        values[(valuesById[2] = 'METHOD_2')] = 2;
        values[(valuesById[3] = 'METHOD_3')] = 3;
        return values;
      })();

      return DnsSource;
    })();

    /**
     * IosAppExtension enum.
     * @name ClientHello.C2S.IosAppExtension
     * @enum {number}
     * @property {number} EXT_0=0 EXT_0 value
     * @property {number} EXT_1=1 EXT_1 value
     * @property {number} EXT_2=2 EXT_2 value
     */
    C2S.IosAppExtension = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'EXT_0')] = 0;
      values[(valuesById[1] = 'EXT_1')] = 1;
      values[(valuesById[2] = 'EXT_2')] = 2;
      return values;
    })();

    /**
     * Product enum.
     * @name ClientHello.C2S.Product
     * @enum {number}
     * @property {number} WHATSAPP=0 WHATSAPP value
     * @property {number} MESSENGER=1 MESSENGER value
     * @property {number} INTEROP=2 INTEROP value
     * @property {number} INTEROP_MSGR=3 INTEROP_MSGR value
     */
    C2S.Product = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'WHATSAPP')] = 0;
      values[(valuesById[1] = 'MESSENGER')] = 1;
      values[(valuesById[2] = 'INTEROP')] = 2;
      values[(valuesById[3] = 'INTEROP_MSGR')] = 3;
      return values;
    })();

    C2S.WebInfo = (function () {
      /**
       * Properties of a WebInfo.
       * @memberof ClientHello.C2S
       * @interface IWebInfo
       * @property {string|null} [refToken] WebInfo refToken
       * @property {string|null} [version] WebInfo version
       * @property {ClientHello.C2S.WebInfo.IWebdPayload|null} [webdPayload] WebInfo webdPayload
       * @property {number|null} [webSubPlatform] WebInfo webSubPlatform
       */

      /**
       * Constructs a new WebInfo.
       * @memberof ClientHello.C2S
       * @classdesc Represents a WebInfo.
       * @implements IWebInfo
       * @constructor
       * @param {ClientHello.C2S.IWebInfo=} [properties] Properties to set
       */
      function WebInfo(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * WebInfo refToken.
       * @member {string} refToken
       * @memberof ClientHello.C2S.WebInfo
       * @instance
       */
      WebInfo.prototype.refToken = '';

      /**
       * WebInfo version.
       * @member {string} version
       * @memberof ClientHello.C2S.WebInfo
       * @instance
       */
      WebInfo.prototype.version = '';

      /**
       * WebInfo webdPayload.
       * @member {ClientHello.C2S.WebInfo.IWebdPayload|null|undefined} webdPayload
       * @memberof ClientHello.C2S.WebInfo
       * @instance
       */
      WebInfo.prototype.webdPayload = null;

      /**
       * WebInfo webSubPlatform.
       * @member {number} webSubPlatform
       * @memberof ClientHello.C2S.WebInfo
       * @instance
       */
      WebInfo.prototype.webSubPlatform = 0;

      /**
       * Creates a new WebInfo instance using the specified properties.
       * @function create
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {ClientHello.C2S.IWebInfo=} [properties] Properties to set
       * @returns {ClientHello.C2S.WebInfo} WebInfo instance
       */
      WebInfo.create = function create(properties) {
        return new WebInfo(properties);
      };

      /**
       * Encodes the specified WebInfo message. Does not implicitly {@link ClientHello.C2S.WebInfo.verify|verify} messages.
       * @function encode
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {ClientHello.C2S.IWebInfo} message WebInfo message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WebInfo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.refToken != null && Object.hasOwnProperty.call(message, 'refToken'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.refToken);
        if (message.version != null && Object.hasOwnProperty.call(message, 'version'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.version);
        if (message.webdPayload != null && Object.hasOwnProperty.call(message, 'webdPayload'))
          $root.ClientHello.C2S.WebInfo.WebdPayload.encode(
            message.webdPayload,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (message.webSubPlatform != null && Object.hasOwnProperty.call(message, 'webSubPlatform'))
          writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.webSubPlatform);
        return writer;
      };

      /**
       * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link ClientHello.C2S.WebInfo.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {ClientHello.C2S.IWebInfo} message WebInfo message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WebInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a WebInfo message from the specified reader or buffer.
       * @function decode
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientHello.C2S.WebInfo} WebInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WebInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientHello.C2S.WebInfo();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.refToken = reader.string();
              break;
            case 2:
              message.version = reader.string();
              break;
            case 3:
              message.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.decode(
                reader,
                reader.uint32()
              );
              break;
            case 4:
              message.webSubPlatform = reader.uint32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a WebInfo message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientHello.C2S.WebInfo} WebInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WebInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a WebInfo message.
       * @function verify
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      WebInfo.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.refToken != null && message.hasOwnProperty('refToken'))
          if (!$util.isString(message.refToken)) return 'refToken: string expected';
        if (message.version != null && message.hasOwnProperty('version'))
          if (!$util.isString(message.version)) return 'version: string expected';
        if (message.webdPayload != null && message.hasOwnProperty('webdPayload')) {
          var error = $root.ClientHello.C2S.WebInfo.WebdPayload.verify(message.webdPayload);
          if (error) return 'webdPayload.' + error;
        }
        if (message.webSubPlatform != null && message.hasOwnProperty('webSubPlatform'))
          if (!$util.isInteger(message.webSubPlatform)) return 'webSubPlatform: integer expected';
        return null;
      };

      /**
       * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientHello.C2S.WebInfo} WebInfo
       */
      WebInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHello.C2S.WebInfo) return object;
        var message = new $root.ClientHello.C2S.WebInfo();
        if (object.refToken != null) message.refToken = String(object.refToken);
        if (object.version != null) message.version = String(object.version);
        if (object.webdPayload != null) {
          if (typeof object.webdPayload !== 'object')
            throw TypeError('.ClientHello.C2S.WebInfo.webdPayload: object expected');
          message.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.fromObject(
            object.webdPayload
          );
        }
        if (object.webSubPlatform != null) message.webSubPlatform = object.webSubPlatform >>> 0;
        return message;
      };

      /**
       * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientHello.C2S.WebInfo
       * @static
       * @param {ClientHello.C2S.WebInfo} message WebInfo
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      WebInfo.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.refToken = '';
          object.version = '';
          object.webdPayload = null;
          object.webSubPlatform = 0;
        }
        if (message.refToken != null && message.hasOwnProperty('refToken'))
          object.refToken = message.refToken;
        if (message.version != null && message.hasOwnProperty('version'))
          object.version = message.version;
        if (message.webdPayload != null && message.hasOwnProperty('webdPayload'))
          object.webdPayload = $root.ClientHello.C2S.WebInfo.WebdPayload.toObject(
            message.webdPayload,
            options
          );
        if (message.webSubPlatform != null && message.hasOwnProperty('webSubPlatform'))
          object.webSubPlatform = message.webSubPlatform;
        return object;
      };

      /**
       * Converts this WebInfo to JSON.
       * @function toJSON
       * @memberof ClientHello.C2S.WebInfo
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      WebInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      WebInfo.WebdPayload = (function () {
        /**
         * Properties of a WebdPayload.
         * @memberof ClientHello.C2S.WebInfo
         * @interface IWebdPayload
         * @property {boolean|null} [usesParticipantInKey] WebdPayload usesParticipantInKey
         * @property {boolean|null} [supportsStarredMessages] WebdPayload supportsStarredMessages
         * @property {boolean|null} [supportsDocumentMessages] WebdPayload supportsDocumentMessages
         * @property {boolean|null} [supportsUrlMessages] WebdPayload supportsUrlMessages
         * @property {boolean|null} [supportsMediaRetry] WebdPayload supportsMediaRetry
         * @property {boolean|null} [supportsE2eImage] WebdPayload supportsE2eImage
         * @property {boolean|null} [supportsE2eVideo] WebdPayload supportsE2eVideo
         * @property {boolean|null} [supportsE2eAudio] WebdPayload supportsE2eAudio
         * @property {boolean|null} [supportsE2eDocument] WebdPayload supportsE2eDocument
         * @property {string|null} [documentTypes] WebdPayload documentTypes
         */

        /**
         * Constructs a new WebdPayload.
         * @memberof ClientHello.C2S.WebInfo
         * @classdesc Represents a WebdPayload.
         * @implements IWebdPayload
         * @constructor
         * @param {ClientHello.C2S.WebInfo.IWebdPayload=} [properties] Properties to set
         */
        function WebdPayload(properties) {
          if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebdPayload usesParticipantInKey.
         * @member {boolean} usesParticipantInKey
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.usesParticipantInKey = false;

        /**
         * WebdPayload supportsStarredMessages.
         * @member {boolean} supportsStarredMessages
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsStarredMessages = false;

        /**
         * WebdPayload supportsDocumentMessages.
         * @member {boolean} supportsDocumentMessages
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsDocumentMessages = false;

        /**
         * WebdPayload supportsUrlMessages.
         * @member {boolean} supportsUrlMessages
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsUrlMessages = false;

        /**
         * WebdPayload supportsMediaRetry.
         * @member {boolean} supportsMediaRetry
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsMediaRetry = false;

        /**
         * WebdPayload supportsE2eImage.
         * @member {boolean} supportsE2eImage
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsE2eImage = false;

        /**
         * WebdPayload supportsE2eVideo.
         * @member {boolean} supportsE2eVideo
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsE2eVideo = false;

        /**
         * WebdPayload supportsE2eAudio.
         * @member {boolean} supportsE2eAudio
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsE2eAudio = false;

        /**
         * WebdPayload supportsE2eDocument.
         * @member {boolean} supportsE2eDocument
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.supportsE2eDocument = false;

        /**
         * WebdPayload documentTypes.
         * @member {string} documentTypes
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         */
        WebdPayload.prototype.documentTypes = '';

        /**
         * Creates a new WebdPayload instance using the specified properties.
         * @function create
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {ClientHello.C2S.WebInfo.IWebdPayload=} [properties] Properties to set
         * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload instance
         */
        WebdPayload.create = function create(properties) {
          return new WebdPayload(properties);
        };

        /**
         * Encodes the specified WebdPayload message. Does not implicitly {@link ClientHello.C2S.WebInfo.WebdPayload.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {ClientHello.C2S.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebdPayload.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.usesParticipantInKey != null &&
            Object.hasOwnProperty.call(message, 'usesParticipantInKey')
          )
            writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.usesParticipantInKey);
          if (
            message.supportsStarredMessages != null &&
            Object.hasOwnProperty.call(message, 'supportsStarredMessages')
          )
            writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.supportsStarredMessages);
          if (
            message.supportsDocumentMessages != null &&
            Object.hasOwnProperty.call(message, 'supportsDocumentMessages')
          )
            writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.supportsDocumentMessages);
          if (
            message.supportsUrlMessages != null &&
            Object.hasOwnProperty.call(message, 'supportsUrlMessages')
          )
            writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.supportsUrlMessages);
          if (
            message.supportsMediaRetry != null &&
            Object.hasOwnProperty.call(message, 'supportsMediaRetry')
          )
            writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.supportsMediaRetry);
          if (
            message.supportsE2eImage != null &&
            Object.hasOwnProperty.call(message, 'supportsE2eImage')
          )
            writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.supportsE2eImage);
          if (
            message.supportsE2eVideo != null &&
            Object.hasOwnProperty.call(message, 'supportsE2eVideo')
          )
            writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.supportsE2eVideo);
          if (
            message.supportsE2eAudio != null &&
            Object.hasOwnProperty.call(message, 'supportsE2eAudio')
          )
            writer.uint32(/* id 8, wireType 0 =*/ 64).bool(message.supportsE2eAudio);
          if (
            message.supportsE2eDocument != null &&
            Object.hasOwnProperty.call(message, 'supportsE2eDocument')
          )
            writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.supportsE2eDocument);
          if (message.documentTypes != null && Object.hasOwnProperty.call(message, 'documentTypes'))
            writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.documentTypes);
          return writer;
        };

        /**
         * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link ClientHello.C2S.WebInfo.WebdPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {ClientHello.C2S.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebdPayload.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebdPayload message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebdPayload.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.ClientHello.C2S.WebInfo.WebdPayload();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.usesParticipantInKey = reader.bool();
                break;
              case 2:
                message.supportsStarredMessages = reader.bool();
                break;
              case 3:
                message.supportsDocumentMessages = reader.bool();
                break;
              case 4:
                message.supportsUrlMessages = reader.bool();
                break;
              case 5:
                message.supportsMediaRetry = reader.bool();
                break;
              case 6:
                message.supportsE2eImage = reader.bool();
                break;
              case 7:
                message.supportsE2eVideo = reader.bool();
                break;
              case 8:
                message.supportsE2eAudio = reader.bool();
                break;
              case 9:
                message.supportsE2eDocument = reader.bool();
                break;
              case 10:
                message.documentTypes = reader.string();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebdPayload.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebdPayload message.
         * @function verify
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebdPayload.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (
            message.usesParticipantInKey != null &&
            message.hasOwnProperty('usesParticipantInKey')
          )
            if (typeof message.usesParticipantInKey !== 'boolean')
              return 'usesParticipantInKey: boolean expected';
          if (
            message.supportsStarredMessages != null &&
            message.hasOwnProperty('supportsStarredMessages')
          )
            if (typeof message.supportsStarredMessages !== 'boolean')
              return 'supportsStarredMessages: boolean expected';
          if (
            message.supportsDocumentMessages != null &&
            message.hasOwnProperty('supportsDocumentMessages')
          )
            if (typeof message.supportsDocumentMessages !== 'boolean')
              return 'supportsDocumentMessages: boolean expected';
          if (message.supportsUrlMessages != null && message.hasOwnProperty('supportsUrlMessages'))
            if (typeof message.supportsUrlMessages !== 'boolean')
              return 'supportsUrlMessages: boolean expected';
          if (message.supportsMediaRetry != null && message.hasOwnProperty('supportsMediaRetry'))
            if (typeof message.supportsMediaRetry !== 'boolean')
              return 'supportsMediaRetry: boolean expected';
          if (message.supportsE2eImage != null && message.hasOwnProperty('supportsE2eImage'))
            if (typeof message.supportsE2eImage !== 'boolean')
              return 'supportsE2eImage: boolean expected';
          if (message.supportsE2eVideo != null && message.hasOwnProperty('supportsE2eVideo'))
            if (typeof message.supportsE2eVideo !== 'boolean')
              return 'supportsE2eVideo: boolean expected';
          if (message.supportsE2eAudio != null && message.hasOwnProperty('supportsE2eAudio'))
            if (typeof message.supportsE2eAudio !== 'boolean')
              return 'supportsE2eAudio: boolean expected';
          if (message.supportsE2eDocument != null && message.hasOwnProperty('supportsE2eDocument'))
            if (typeof message.supportsE2eDocument !== 'boolean')
              return 'supportsE2eDocument: boolean expected';
          if (message.documentTypes != null && message.hasOwnProperty('documentTypes'))
            if (!$util.isString(message.documentTypes)) return 'documentTypes: string expected';
          return null;
        };

        /**
         * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.C2S.WebInfo.WebdPayload} WebdPayload
         */
        WebdPayload.fromObject = function fromObject(object) {
          if (object instanceof $root.ClientHello.C2S.WebInfo.WebdPayload) return object;
          var message = new $root.ClientHello.C2S.WebInfo.WebdPayload();
          if (object.usesParticipantInKey != null)
            message.usesParticipantInKey = Boolean(object.usesParticipantInKey);
          if (object.supportsStarredMessages != null)
            message.supportsStarredMessages = Boolean(object.supportsStarredMessages);
          if (object.supportsDocumentMessages != null)
            message.supportsDocumentMessages = Boolean(object.supportsDocumentMessages);
          if (object.supportsUrlMessages != null)
            message.supportsUrlMessages = Boolean(object.supportsUrlMessages);
          if (object.supportsMediaRetry != null)
            message.supportsMediaRetry = Boolean(object.supportsMediaRetry);
          if (object.supportsE2eImage != null)
            message.supportsE2eImage = Boolean(object.supportsE2eImage);
          if (object.supportsE2eVideo != null)
            message.supportsE2eVideo = Boolean(object.supportsE2eVideo);
          if (object.supportsE2eAudio != null)
            message.supportsE2eAudio = Boolean(object.supportsE2eAudio);
          if (object.supportsE2eDocument != null)
            message.supportsE2eDocument = Boolean(object.supportsE2eDocument);
          if (object.documentTypes != null) message.documentTypes = String(object.documentTypes);
          return message;
        };

        /**
         * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @static
         * @param {ClientHello.C2S.WebInfo.WebdPayload} message WebdPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebdPayload.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.usesParticipantInKey = false;
            object.supportsStarredMessages = false;
            object.supportsDocumentMessages = false;
            object.supportsUrlMessages = false;
            object.supportsMediaRetry = false;
            object.supportsE2eImage = false;
            object.supportsE2eVideo = false;
            object.supportsE2eAudio = false;
            object.supportsE2eDocument = false;
            object.documentTypes = '';
          }
          if (
            message.usesParticipantInKey != null &&
            message.hasOwnProperty('usesParticipantInKey')
          )
            object.usesParticipantInKey = message.usesParticipantInKey;
          if (
            message.supportsStarredMessages != null &&
            message.hasOwnProperty('supportsStarredMessages')
          )
            object.supportsStarredMessages = message.supportsStarredMessages;
          if (
            message.supportsDocumentMessages != null &&
            message.hasOwnProperty('supportsDocumentMessages')
          )
            object.supportsDocumentMessages = message.supportsDocumentMessages;
          if (message.supportsUrlMessages != null && message.hasOwnProperty('supportsUrlMessages'))
            object.supportsUrlMessages = message.supportsUrlMessages;
          if (message.supportsMediaRetry != null && message.hasOwnProperty('supportsMediaRetry'))
            object.supportsMediaRetry = message.supportsMediaRetry;
          if (message.supportsE2eImage != null && message.hasOwnProperty('supportsE2eImage'))
            object.supportsE2eImage = message.supportsE2eImage;
          if (message.supportsE2eVideo != null && message.hasOwnProperty('supportsE2eVideo'))
            object.supportsE2eVideo = message.supportsE2eVideo;
          if (message.supportsE2eAudio != null && message.hasOwnProperty('supportsE2eAudio'))
            object.supportsE2eAudio = message.supportsE2eAudio;
          if (message.supportsE2eDocument != null && message.hasOwnProperty('supportsE2eDocument'))
            object.supportsE2eDocument = message.supportsE2eDocument;
          if (message.documentTypes != null && message.hasOwnProperty('documentTypes'))
            object.documentTypes = message.documentTypes;
          return object;
        };

        /**
         * Converts this WebdPayload to JSON.
         * @function toJSON
         * @memberof ClientHello.C2S.WebInfo.WebdPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebdPayload.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WebdPayload;
      })();

      return WebInfo;
    })();

    C2S.DeviceProps = (function () {
      /**
       * Properties of a DeviceProps.
       * @memberof ClientHello.C2S
       * @interface IDeviceProps
       * @property {string|null} [os] DeviceProps os
       * @property {ClientHello.C2S.DeviceProps.IAppVersion|null} [version] DeviceProps version
       * @property {ClientHello.PlatformType|null} [platformType] DeviceProps platformType
       * @property {boolean|null} [requireFullSync] DeviceProps requireFullSync
       * @property {ClientHello.C2S.DeviceProps.IHistorySyncConfig|null} [historySyncConfig] DeviceProps historySyncConfig
       */

      /**
       * Constructs a new DeviceProps.
       * @memberof ClientHello.C2S
       * @classdesc Represents a DeviceProps.
       * @implements IDeviceProps
       * @constructor
       * @param {ClientHello.C2S.IDeviceProps=} [properties] Properties to set
       */
      function DeviceProps(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * DeviceProps os.
       * @member {string} os
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       */
      DeviceProps.prototype.os = '';

      /**
       * DeviceProps version.
       * @member {ClientHello.C2S.DeviceProps.IAppVersion|null|undefined} version
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       */
      DeviceProps.prototype.version = null;

      /**
       * DeviceProps platformType.
       * @member {ClientHello.PlatformType} platformType
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       */
      DeviceProps.prototype.platformType = 0;

      /**
       * DeviceProps requireFullSync.
       * @member {boolean} requireFullSync
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       */
      DeviceProps.prototype.requireFullSync = false;

      /**
       * DeviceProps historySyncConfig.
       * @member {ClientHello.C2S.DeviceProps.IHistorySyncConfig|null|undefined} historySyncConfig
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       */
      DeviceProps.prototype.historySyncConfig = null;

      /**
       * Creates a new DeviceProps instance using the specified properties.
       * @function create
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {ClientHello.C2S.IDeviceProps=} [properties] Properties to set
       * @returns {ClientHello.C2S.DeviceProps} DeviceProps instance
       */
      DeviceProps.create = function create(properties) {
        return new DeviceProps(properties);
      };

      /**
       * Encodes the specified DeviceProps message. Does not implicitly {@link ClientHello.C2S.DeviceProps.verify|verify} messages.
       * @function encode
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {ClientHello.C2S.IDeviceProps} message DeviceProps message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeviceProps.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.os != null && Object.hasOwnProperty.call(message, 'os'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.os);
        if (message.version != null && Object.hasOwnProperty.call(message, 'version'))
          $root.ClientHello.C2S.DeviceProps.AppVersion.encode(
            message.version,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
        if (message.platformType != null && Object.hasOwnProperty.call(message, 'platformType'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.platformType);
        if (
          message.requireFullSync != null &&
          Object.hasOwnProperty.call(message, 'requireFullSync')
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.requireFullSync);
        if (
          message.historySyncConfig != null &&
          Object.hasOwnProperty.call(message, 'historySyncConfig')
        )
          $root.ClientHello.C2S.DeviceProps.HistorySyncConfig.encode(
            message.historySyncConfig,
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified DeviceProps message, length delimited. Does not implicitly {@link ClientHello.C2S.DeviceProps.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {ClientHello.C2S.IDeviceProps} message DeviceProps message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeviceProps.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DeviceProps message from the specified reader or buffer.
       * @function decode
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientHello.C2S.DeviceProps} DeviceProps
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeviceProps.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientHello.C2S.DeviceProps();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.os = reader.string();
              break;
            case 2:
              message.version = $root.ClientHello.C2S.DeviceProps.AppVersion.decode(
                reader,
                reader.uint32()
              );
              break;
            case 3:
              message.platformType = reader.int32();
              break;
            case 4:
              message.requireFullSync = reader.bool();
              break;
            case 5:
              message.historySyncConfig =
                $root.ClientHello.C2S.DeviceProps.HistorySyncConfig.decode(reader, reader.uint32());
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DeviceProps message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientHello.C2S.DeviceProps} DeviceProps
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeviceProps.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DeviceProps message.
       * @function verify
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DeviceProps.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.os != null && message.hasOwnProperty('os'))
          if (!$util.isString(message.os)) return 'os: string expected';
        if (message.version != null && message.hasOwnProperty('version')) {
          var error = $root.ClientHello.C2S.DeviceProps.AppVersion.verify(message.version);
          if (error) return 'version.' + error;
        }
        if (message.platformType != null && message.hasOwnProperty('platformType'))
          switch (message.platformType) {
            default:
              return 'platformType: enum value expected';
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
              break;
          }
        if (message.requireFullSync != null && message.hasOwnProperty('requireFullSync'))
          if (typeof message.requireFullSync !== 'boolean')
            return 'requireFullSync: boolean expected';
        if (message.historySyncConfig != null && message.hasOwnProperty('historySyncConfig')) {
          var error = $root.ClientHello.C2S.DeviceProps.HistorySyncConfig.verify(
            message.historySyncConfig
          );
          if (error) return 'historySyncConfig.' + error;
        }
        return null;
      };

      /**
       * Creates a DeviceProps message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientHello.C2S.DeviceProps} DeviceProps
       */
      DeviceProps.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHello.C2S.DeviceProps) return object;
        var message = new $root.ClientHello.C2S.DeviceProps();
        if (object.os != null) message.os = String(object.os);
        if (object.version != null) {
          if (typeof object.version !== 'object')
            throw TypeError('.ClientHello.C2S.DeviceProps.version: object expected');
          message.version = $root.ClientHello.C2S.DeviceProps.AppVersion.fromObject(object.version);
        }
        switch (object.platformType) {
          case 'UNKNOWN':
          case 0:
            message.platformType = 0;
            break;
          case 'CHROME':
          case 1:
            message.platformType = 1;
            break;
          case 'FIREFOX':
          case 2:
            message.platformType = 2;
            break;
          case 'IE':
          case 3:
            message.platformType = 3;
            break;
          case 'OPERA':
          case 4:
            message.platformType = 4;
            break;
          case 'SAFARI':
          case 5:
            message.platformType = 5;
            break;
          case 'EDGE':
          case 6:
            message.platformType = 6;
            break;
          case 'DESKTOP':
          case 7:
            message.platformType = 7;
            break;
          case 'IPAD':
          case 8:
            message.platformType = 8;
            break;
          case 'ANDROID_TABLET':
          case 9:
            message.platformType = 9;
            break;
          case 'OHANA':
          case 10:
            message.platformType = 10;
            break;
          case 'ALOHA':
          case 11:
            message.platformType = 11;
            break;
          case 'CATALINA':
          case 12:
            message.platformType = 12;
            break;
          case 'TCL_TV':
          case 13:
            message.platformType = 13;
            break;
          case 'IOS_PHONE':
          case 14:
            message.platformType = 14;
            break;
          case 'IOS_CATALYST':
          case 15:
            message.platformType = 15;
            break;
          case 'ANDROID_PHONE':
          case 16:
            message.platformType = 16;
            break;
          case 'ANDROID_AMBIGUOUS':
          case 17:
            message.platformType = 17;
            break;
          case 'WEAR_OS':
          case 18:
            message.platformType = 18;
            break;
          case 'AR_WRIST':
          case 19:
            message.platformType = 19;
            break;
          case 'AR_DEVICE':
          case 20:
            message.platformType = 20;
            break;
          case 'UWP':
          case 21:
            message.platformType = 21;
            break;
          case 'VR':
          case 22:
            message.platformType = 22;
            break;
        }
        if (object.requireFullSync != null)
          message.requireFullSync = Boolean(object.requireFullSync);
        if (object.historySyncConfig != null) {
          if (typeof object.historySyncConfig !== 'object')
            throw TypeError('.ClientHello.C2S.DeviceProps.historySyncConfig: object expected');
          message.historySyncConfig =
            $root.ClientHello.C2S.DeviceProps.HistorySyncConfig.fromObject(
              object.historySyncConfig
            );
        }
        return message;
      };

      /**
       * Creates a plain object from a DeviceProps message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientHello.C2S.DeviceProps
       * @static
       * @param {ClientHello.C2S.DeviceProps} message DeviceProps
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DeviceProps.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.os = '';
          object.version = null;
          object.platformType = options.enums === String ? 'UNKNOWN' : 0;
          object.requireFullSync = false;
          object.historySyncConfig = null;
        }
        if (message.os != null && message.hasOwnProperty('os')) object.os = message.os;
        if (message.version != null && message.hasOwnProperty('version'))
          object.version = $root.ClientHello.C2S.DeviceProps.AppVersion.toObject(
            message.version,
            options
          );
        if (message.platformType != null && message.hasOwnProperty('platformType'))
          object.platformType =
            options.enums === String
              ? $root.ClientHello.PlatformType[message.platformType]
              : message.platformType;
        if (message.requireFullSync != null && message.hasOwnProperty('requireFullSync'))
          object.requireFullSync = message.requireFullSync;
        if (message.historySyncConfig != null && message.hasOwnProperty('historySyncConfig'))
          object.historySyncConfig = $root.ClientHello.C2S.DeviceProps.HistorySyncConfig.toObject(
            message.historySyncConfig,
            options
          );
        return object;
      };

      /**
       * Converts this DeviceProps to JSON.
       * @function toJSON
       * @memberof ClientHello.C2S.DeviceProps
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DeviceProps.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      DeviceProps.HistorySyncConfig = (function () {
        /**
         * Properties of a HistorySyncConfig.
         * @memberof ClientHello.C2S.DeviceProps
         * @interface IHistorySyncConfig
         * @property {number|null} [fullSyncDaysLimit] HistorySyncConfig fullSyncDaysLimit
         * @property {number|null} [fullSyncSizeMbLimit] HistorySyncConfig fullSyncSizeMbLimit
         * @property {number|null} [storageQuotaMb] HistorySyncConfig storageQuotaMb
         * @property {boolean|null} [inlineInitialPayloadInE2EeMsg] HistorySyncConfig inlineInitialPayloadInE2EeMsg
         * @property {number|null} [recentSyncDaysLimit] HistorySyncConfig recentSyncDaysLimit
         * @property {boolean|null} [supportCallLogHistory] HistorySyncConfig supportCallLogHistory
         * @property {boolean|null} [supportBotUserAgentChatHistory] HistorySyncConfig supportBotUserAgentChatHistory
         * @property {boolean|null} [supportCagReactionsAndPolls] HistorySyncConfig supportCagReactionsAndPolls
         * @property {boolean|null} [supportBizHostedMsg] HistorySyncConfig supportBizHostedMsg
         * @property {boolean|null} [supportRecentSyncChunkMessageCountTuning] HistorySyncConfig supportRecentSyncChunkMessageCountTuning
         */

        /**
         * Constructs a new HistorySyncConfig.
         * @memberof ClientHello.C2S.DeviceProps
         * @classdesc Represents a HistorySyncConfig.
         * @implements IHistorySyncConfig
         * @constructor
         * @param {ClientHello.C2S.DeviceProps.IHistorySyncConfig=} [properties] Properties to set
         */
        function HistorySyncConfig(properties) {
          if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistorySyncConfig fullSyncDaysLimit.
         * @member {number} fullSyncDaysLimit
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.fullSyncDaysLimit = 0;

        /**
         * HistorySyncConfig fullSyncSizeMbLimit.
         * @member {number} fullSyncSizeMbLimit
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.fullSyncSizeMbLimit = 0;

        /**
         * HistorySyncConfig storageQuotaMb.
         * @member {number} storageQuotaMb
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.storageQuotaMb = 0;

        /**
         * HistorySyncConfig inlineInitialPayloadInE2EeMsg.
         * @member {boolean} inlineInitialPayloadInE2EeMsg
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.inlineInitialPayloadInE2EeMsg = false;

        /**
         * HistorySyncConfig recentSyncDaysLimit.
         * @member {number} recentSyncDaysLimit
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.recentSyncDaysLimit = 0;

        /**
         * HistorySyncConfig supportCallLogHistory.
         * @member {boolean} supportCallLogHistory
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.supportCallLogHistory = false;

        /**
         * HistorySyncConfig supportBotUserAgentChatHistory.
         * @member {boolean} supportBotUserAgentChatHistory
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.supportBotUserAgentChatHistory = false;

        /**
         * HistorySyncConfig supportCagReactionsAndPolls.
         * @member {boolean} supportCagReactionsAndPolls
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.supportCagReactionsAndPolls = false;

        /**
         * HistorySyncConfig supportBizHostedMsg.
         * @member {boolean} supportBizHostedMsg
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.supportBizHostedMsg = false;

        /**
         * HistorySyncConfig supportRecentSyncChunkMessageCountTuning.
         * @member {boolean} supportRecentSyncChunkMessageCountTuning
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         */
        HistorySyncConfig.prototype.supportRecentSyncChunkMessageCountTuning = false;

        /**
         * Creates a new HistorySyncConfig instance using the specified properties.
         * @function create
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {ClientHello.C2S.DeviceProps.IHistorySyncConfig=} [properties] Properties to set
         * @returns {ClientHello.C2S.DeviceProps.HistorySyncConfig} HistorySyncConfig instance
         */
        HistorySyncConfig.create = function create(properties) {
          return new HistorySyncConfig(properties);
        };

        /**
         * Encodes the specified HistorySyncConfig message. Does not implicitly {@link ClientHello.C2S.DeviceProps.HistorySyncConfig.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {ClientHello.C2S.DeviceProps.IHistorySyncConfig} message HistorySyncConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorySyncConfig.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.fullSyncDaysLimit != null &&
            Object.hasOwnProperty.call(message, 'fullSyncDaysLimit')
          )
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.fullSyncDaysLimit);
          if (
            message.fullSyncSizeMbLimit != null &&
            Object.hasOwnProperty.call(message, 'fullSyncSizeMbLimit')
          )
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.fullSyncSizeMbLimit);
          if (
            message.storageQuotaMb != null &&
            Object.hasOwnProperty.call(message, 'storageQuotaMb')
          )
            writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.storageQuotaMb);
          if (
            message.inlineInitialPayloadInE2EeMsg != null &&
            Object.hasOwnProperty.call(message, 'inlineInitialPayloadInE2EeMsg')
          )
            writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.inlineInitialPayloadInE2EeMsg);
          if (
            message.recentSyncDaysLimit != null &&
            Object.hasOwnProperty.call(message, 'recentSyncDaysLimit')
          )
            writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.recentSyncDaysLimit);
          if (
            message.supportCallLogHistory != null &&
            Object.hasOwnProperty.call(message, 'supportCallLogHistory')
          )
            writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.supportCallLogHistory);
          if (
            message.supportBotUserAgentChatHistory != null &&
            Object.hasOwnProperty.call(message, 'supportBotUserAgentChatHistory')
          )
            writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.supportBotUserAgentChatHistory);
          if (
            message.supportCagReactionsAndPolls != null &&
            Object.hasOwnProperty.call(message, 'supportCagReactionsAndPolls')
          )
            writer.uint32(/* id 8, wireType 0 =*/ 64).bool(message.supportCagReactionsAndPolls);
          if (
            message.supportBizHostedMsg != null &&
            Object.hasOwnProperty.call(message, 'supportBizHostedMsg')
          )
            writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.supportBizHostedMsg);
          if (
            message.supportRecentSyncChunkMessageCountTuning != null &&
            Object.hasOwnProperty.call(message, 'supportRecentSyncChunkMessageCountTuning')
          )
            writer
              .uint32(/* id 10, wireType 0 =*/ 80)
              .bool(message.supportRecentSyncChunkMessageCountTuning);
          return writer;
        };

        /**
         * Encodes the specified HistorySyncConfig message, length delimited. Does not implicitly {@link ClientHello.C2S.DeviceProps.HistorySyncConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {ClientHello.C2S.DeviceProps.IHistorySyncConfig} message HistorySyncConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistorySyncConfig.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HistorySyncConfig message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.C2S.DeviceProps.HistorySyncConfig} HistorySyncConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorySyncConfig.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.ClientHello.C2S.DeviceProps.HistorySyncConfig();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.fullSyncDaysLimit = reader.uint32();
                break;
              case 2:
                message.fullSyncSizeMbLimit = reader.uint32();
                break;
              case 3:
                message.storageQuotaMb = reader.uint32();
                break;
              case 4:
                message.inlineInitialPayloadInE2EeMsg = reader.bool();
                break;
              case 5:
                message.recentSyncDaysLimit = reader.uint32();
                break;
              case 6:
                message.supportCallLogHistory = reader.bool();
                break;
              case 7:
                message.supportBotUserAgentChatHistory = reader.bool();
                break;
              case 8:
                message.supportCagReactionsAndPolls = reader.bool();
                break;
              case 9:
                message.supportBizHostedMsg = reader.bool();
                break;
              case 10:
                message.supportRecentSyncChunkMessageCountTuning = reader.bool();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a HistorySyncConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.C2S.DeviceProps.HistorySyncConfig} HistorySyncConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistorySyncConfig.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HistorySyncConfig message.
         * @function verify
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistorySyncConfig.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.fullSyncDaysLimit != null && message.hasOwnProperty('fullSyncDaysLimit'))
            if (!$util.isInteger(message.fullSyncDaysLimit))
              return 'fullSyncDaysLimit: integer expected';
          if (message.fullSyncSizeMbLimit != null && message.hasOwnProperty('fullSyncSizeMbLimit'))
            if (!$util.isInteger(message.fullSyncSizeMbLimit))
              return 'fullSyncSizeMbLimit: integer expected';
          if (message.storageQuotaMb != null && message.hasOwnProperty('storageQuotaMb'))
            if (!$util.isInteger(message.storageQuotaMb)) return 'storageQuotaMb: integer expected';
          if (
            message.inlineInitialPayloadInE2EeMsg != null &&
            message.hasOwnProperty('inlineInitialPayloadInE2EeMsg')
          )
            if (typeof message.inlineInitialPayloadInE2EeMsg !== 'boolean')
              return 'inlineInitialPayloadInE2EeMsg: boolean expected';
          if (message.recentSyncDaysLimit != null && message.hasOwnProperty('recentSyncDaysLimit'))
            if (!$util.isInteger(message.recentSyncDaysLimit))
              return 'recentSyncDaysLimit: integer expected';
          if (
            message.supportCallLogHistory != null &&
            message.hasOwnProperty('supportCallLogHistory')
          )
            if (typeof message.supportCallLogHistory !== 'boolean')
              return 'supportCallLogHistory: boolean expected';
          if (
            message.supportBotUserAgentChatHistory != null &&
            message.hasOwnProperty('supportBotUserAgentChatHistory')
          )
            if (typeof message.supportBotUserAgentChatHistory !== 'boolean')
              return 'supportBotUserAgentChatHistory: boolean expected';
          if (
            message.supportCagReactionsAndPolls != null &&
            message.hasOwnProperty('supportCagReactionsAndPolls')
          )
            if (typeof message.supportCagReactionsAndPolls !== 'boolean')
              return 'supportCagReactionsAndPolls: boolean expected';
          if (message.supportBizHostedMsg != null && message.hasOwnProperty('supportBizHostedMsg'))
            if (typeof message.supportBizHostedMsg !== 'boolean')
              return 'supportBizHostedMsg: boolean expected';
          if (
            message.supportRecentSyncChunkMessageCountTuning != null &&
            message.hasOwnProperty('supportRecentSyncChunkMessageCountTuning')
          )
            if (typeof message.supportRecentSyncChunkMessageCountTuning !== 'boolean')
              return 'supportRecentSyncChunkMessageCountTuning: boolean expected';
          return null;
        };

        /**
         * Creates a HistorySyncConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.C2S.DeviceProps.HistorySyncConfig} HistorySyncConfig
         */
        HistorySyncConfig.fromObject = function fromObject(object) {
          if (object instanceof $root.ClientHello.C2S.DeviceProps.HistorySyncConfig) return object;
          var message = new $root.ClientHello.C2S.DeviceProps.HistorySyncConfig();
          if (object.fullSyncDaysLimit != null)
            message.fullSyncDaysLimit = object.fullSyncDaysLimit >>> 0;
          if (object.fullSyncSizeMbLimit != null)
            message.fullSyncSizeMbLimit = object.fullSyncSizeMbLimit >>> 0;
          if (object.storageQuotaMb != null) message.storageQuotaMb = object.storageQuotaMb >>> 0;
          if (object.inlineInitialPayloadInE2EeMsg != null)
            message.inlineInitialPayloadInE2EeMsg = Boolean(object.inlineInitialPayloadInE2EeMsg);
          if (object.recentSyncDaysLimit != null)
            message.recentSyncDaysLimit = object.recentSyncDaysLimit >>> 0;
          if (object.supportCallLogHistory != null)
            message.supportCallLogHistory = Boolean(object.supportCallLogHistory);
          if (object.supportBotUserAgentChatHistory != null)
            message.supportBotUserAgentChatHistory = Boolean(object.supportBotUserAgentChatHistory);
          if (object.supportCagReactionsAndPolls != null)
            message.supportCagReactionsAndPolls = Boolean(object.supportCagReactionsAndPolls);
          if (object.supportBizHostedMsg != null)
            message.supportBizHostedMsg = Boolean(object.supportBizHostedMsg);
          if (object.supportRecentSyncChunkMessageCountTuning != null)
            message.supportRecentSyncChunkMessageCountTuning = Boolean(
              object.supportRecentSyncChunkMessageCountTuning
            );
          return message;
        };

        /**
         * Creates a plain object from a HistorySyncConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @static
         * @param {ClientHello.C2S.DeviceProps.HistorySyncConfig} message HistorySyncConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistorySyncConfig.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.fullSyncDaysLimit = 0;
            object.fullSyncSizeMbLimit = 0;
            object.storageQuotaMb = 0;
            object.inlineInitialPayloadInE2EeMsg = false;
            object.recentSyncDaysLimit = 0;
            object.supportCallLogHistory = false;
            object.supportBotUserAgentChatHistory = false;
            object.supportCagReactionsAndPolls = false;
            object.supportBizHostedMsg = false;
            object.supportRecentSyncChunkMessageCountTuning = false;
          }
          if (message.fullSyncDaysLimit != null && message.hasOwnProperty('fullSyncDaysLimit'))
            object.fullSyncDaysLimit = message.fullSyncDaysLimit;
          if (message.fullSyncSizeMbLimit != null && message.hasOwnProperty('fullSyncSizeMbLimit'))
            object.fullSyncSizeMbLimit = message.fullSyncSizeMbLimit;
          if (message.storageQuotaMb != null && message.hasOwnProperty('storageQuotaMb'))
            object.storageQuotaMb = message.storageQuotaMb;
          if (
            message.inlineInitialPayloadInE2EeMsg != null &&
            message.hasOwnProperty('inlineInitialPayloadInE2EeMsg')
          )
            object.inlineInitialPayloadInE2EeMsg = message.inlineInitialPayloadInE2EeMsg;
          if (message.recentSyncDaysLimit != null && message.hasOwnProperty('recentSyncDaysLimit'))
            object.recentSyncDaysLimit = message.recentSyncDaysLimit;
          if (
            message.supportCallLogHistory != null &&
            message.hasOwnProperty('supportCallLogHistory')
          )
            object.supportCallLogHistory = message.supportCallLogHistory;
          if (
            message.supportBotUserAgentChatHistory != null &&
            message.hasOwnProperty('supportBotUserAgentChatHistory')
          )
            object.supportBotUserAgentChatHistory = message.supportBotUserAgentChatHistory;
          if (
            message.supportCagReactionsAndPolls != null &&
            message.hasOwnProperty('supportCagReactionsAndPolls')
          )
            object.supportCagReactionsAndPolls = message.supportCagReactionsAndPolls;
          if (message.supportBizHostedMsg != null && message.hasOwnProperty('supportBizHostedMsg'))
            object.supportBizHostedMsg = message.supportBizHostedMsg;
          if (
            message.supportRecentSyncChunkMessageCountTuning != null &&
            message.hasOwnProperty('supportRecentSyncChunkMessageCountTuning')
          )
            object.supportRecentSyncChunkMessageCountTuning =
              message.supportRecentSyncChunkMessageCountTuning;
          return object;
        };

        /**
         * Converts this HistorySyncConfig to JSON.
         * @function toJSON
         * @memberof ClientHello.C2S.DeviceProps.HistorySyncConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistorySyncConfig.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HistorySyncConfig;
      })();

      DeviceProps.AppVersion = (function () {
        /**
         * Properties of an AppVersion.
         * @memberof ClientHello.C2S.DeviceProps
         * @interface IAppVersion
         * @property {number|null} [primary] AppVersion primary
         * @property {number|null} [secondary] AppVersion secondary
         * @property {number|null} [tertiary] AppVersion tertiary
         * @property {number|null} [quaternary] AppVersion quaternary
         * @property {number|null} [quinary] AppVersion quinary
         */

        /**
         * Constructs a new AppVersion.
         * @memberof ClientHello.C2S.DeviceProps
         * @classdesc Represents an AppVersion.
         * @implements IAppVersion
         * @constructor
         * @param {ClientHello.C2S.DeviceProps.IAppVersion=} [properties] Properties to set
         */
        function AppVersion(properties) {
          if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppVersion primary.
         * @member {number} primary
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         */
        AppVersion.prototype.primary = 0;

        /**
         * AppVersion secondary.
         * @member {number} secondary
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         */
        AppVersion.prototype.secondary = 0;

        /**
         * AppVersion tertiary.
         * @member {number} tertiary
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         */
        AppVersion.prototype.tertiary = 0;

        /**
         * AppVersion quaternary.
         * @member {number} quaternary
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         */
        AppVersion.prototype.quaternary = 0;

        /**
         * AppVersion quinary.
         * @member {number} quinary
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         */
        AppVersion.prototype.quinary = 0;

        /**
         * Creates a new AppVersion instance using the specified properties.
         * @function create
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {ClientHello.C2S.DeviceProps.IAppVersion=} [properties] Properties to set
         * @returns {ClientHello.C2S.DeviceProps.AppVersion} AppVersion instance
         */
        AppVersion.create = function create(properties) {
          return new AppVersion(properties);
        };

        /**
         * Encodes the specified AppVersion message. Does not implicitly {@link ClientHello.C2S.DeviceProps.AppVersion.verify|verify} messages.
         * @function encode
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {ClientHello.C2S.DeviceProps.IAppVersion} message AppVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersion.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.primary != null && Object.hasOwnProperty.call(message, 'primary'))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.primary);
          if (message.secondary != null && Object.hasOwnProperty.call(message, 'secondary'))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.secondary);
          if (message.tertiary != null && Object.hasOwnProperty.call(message, 'tertiary'))
            writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.tertiary);
          if (message.quaternary != null && Object.hasOwnProperty.call(message, 'quaternary'))
            writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.quaternary);
          if (message.quinary != null && Object.hasOwnProperty.call(message, 'quinary'))
            writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.quinary);
          return writer;
        };

        /**
         * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link ClientHello.C2S.DeviceProps.AppVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {ClientHello.C2S.DeviceProps.IAppVersion} message AppVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersion.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppVersion message from the specified reader or buffer.
         * @function decode
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientHello.C2S.DeviceProps.AppVersion} AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersion.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.ClientHello.C2S.DeviceProps.AppVersion();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.primary = reader.uint32();
                break;
              case 2:
                message.secondary = reader.uint32();
                break;
              case 3:
                message.tertiary = reader.uint32();
                break;
              case 4:
                message.quaternary = reader.uint32();
                break;
              case 5:
                message.quinary = reader.uint32();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes an AppVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientHello.C2S.DeviceProps.AppVersion} AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersion.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppVersion message.
         * @function verify
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppVersion.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.primary != null && message.hasOwnProperty('primary'))
            if (!$util.isInteger(message.primary)) return 'primary: integer expected';
          if (message.secondary != null && message.hasOwnProperty('secondary'))
            if (!$util.isInteger(message.secondary)) return 'secondary: integer expected';
          if (message.tertiary != null && message.hasOwnProperty('tertiary'))
            if (!$util.isInteger(message.tertiary)) return 'tertiary: integer expected';
          if (message.quaternary != null && message.hasOwnProperty('quaternary'))
            if (!$util.isInteger(message.quaternary)) return 'quaternary: integer expected';
          if (message.quinary != null && message.hasOwnProperty('quinary'))
            if (!$util.isInteger(message.quinary)) return 'quinary: integer expected';
          return null;
        };

        /**
         * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientHello.C2S.DeviceProps.AppVersion} AppVersion
         */
        AppVersion.fromObject = function fromObject(object) {
          if (object instanceof $root.ClientHello.C2S.DeviceProps.AppVersion) return object;
          var message = new $root.ClientHello.C2S.DeviceProps.AppVersion();
          if (object.primary != null) message.primary = object.primary >>> 0;
          if (object.secondary != null) message.secondary = object.secondary >>> 0;
          if (object.tertiary != null) message.tertiary = object.tertiary >>> 0;
          if (object.quaternary != null) message.quaternary = object.quaternary >>> 0;
          if (object.quinary != null) message.quinary = object.quinary >>> 0;
          return message;
        };

        /**
         * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @static
         * @param {ClientHello.C2S.DeviceProps.AppVersion} message AppVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppVersion.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.primary = 0;
            object.secondary = 0;
            object.tertiary = 0;
            object.quaternary = 0;
            object.quinary = 0;
          }
          if (message.primary != null && message.hasOwnProperty('primary'))
            object.primary = message.primary;
          if (message.secondary != null && message.hasOwnProperty('secondary'))
            object.secondary = message.secondary;
          if (message.tertiary != null && message.hasOwnProperty('tertiary'))
            object.tertiary = message.tertiary;
          if (message.quaternary != null && message.hasOwnProperty('quaternary'))
            object.quaternary = message.quaternary;
          if (message.quinary != null && message.hasOwnProperty('quinary'))
            object.quinary = message.quinary;
          return object;
        };

        /**
         * Converts this AppVersion to JSON.
         * @function toJSON
         * @memberof ClientHello.C2S.DeviceProps.AppVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppVersion.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppVersion;
      })();

      return DeviceProps;
    })();

    C2S.CompanionRegData = (function () {
      /**
       * Properties of a CompanionRegData.
       * @memberof ClientHello.C2S
       * @interface ICompanionRegData
       * @property {Uint8Array|null} [eRegid] CompanionRegData eRegid
       * @property {Uint8Array|null} [eKeytype] CompanionRegData eKeytype
       * @property {Uint8Array|null} [eIdent] CompanionRegData eIdent
       * @property {Uint8Array|null} [eSkeyId] CompanionRegData eSkeyId
       * @property {Uint8Array|null} [eSkeyVal] CompanionRegData eSkeyVal
       * @property {Uint8Array|null} [eSkeySig] CompanionRegData eSkeySig
       * @property {Uint8Array|null} [buildHash] CompanionRegData buildHash
       * @property {ClientHello.C2S.IDeviceProps|null} [deviceProps] CompanionRegData deviceProps
       */

      /**
       * Constructs a new CompanionRegData.
       * @memberof ClientHello.C2S
       * @classdesc Represents a CompanionRegData.
       * @implements ICompanionRegData
       * @constructor
       * @param {ClientHello.C2S.ICompanionRegData=} [properties] Properties to set
       */
      function CompanionRegData(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * CompanionRegData eRegid.
       * @member {Uint8Array} eRegid
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eRegid = $util.newBuffer([]);

      /**
       * CompanionRegData eKeytype.
       * @member {Uint8Array} eKeytype
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eKeytype = $util.newBuffer([]);

      /**
       * CompanionRegData eIdent.
       * @member {Uint8Array} eIdent
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eIdent = $util.newBuffer([]);

      /**
       * CompanionRegData eSkeyId.
       * @member {Uint8Array} eSkeyId
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eSkeyId = $util.newBuffer([]);

      /**
       * CompanionRegData eSkeyVal.
       * @member {Uint8Array} eSkeyVal
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eSkeyVal = $util.newBuffer([]);

      /**
       * CompanionRegData eSkeySig.
       * @member {Uint8Array} eSkeySig
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.eSkeySig = $util.newBuffer([]);

      /**
       * CompanionRegData buildHash.
       * @member {Uint8Array} buildHash
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.buildHash = $util.newBuffer([]);

      /**
       * CompanionRegData deviceProps.
       * @member {ClientHello.C2S.IDeviceProps|null|undefined} deviceProps
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       */
      CompanionRegData.prototype.deviceProps = null;

      /**
       * Creates a new CompanionRegData instance using the specified properties.
       * @function create
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {ClientHello.C2S.ICompanionRegData=} [properties] Properties to set
       * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData instance
       */
      CompanionRegData.create = function create(properties) {
        return new CompanionRegData(properties);
      };

      /**
       * Encodes the specified CompanionRegData message. Does not implicitly {@link ClientHello.C2S.CompanionRegData.verify|verify} messages.
       * @function encode
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {ClientHello.C2S.ICompanionRegData} message CompanionRegData message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CompanionRegData.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.eRegid != null && Object.hasOwnProperty.call(message, 'eRegid'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eRegid);
        if (message.eKeytype != null && Object.hasOwnProperty.call(message, 'eKeytype'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.eKeytype);
        if (message.eIdent != null && Object.hasOwnProperty.call(message, 'eIdent'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.eIdent);
        if (message.eSkeyId != null && Object.hasOwnProperty.call(message, 'eSkeyId'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).bytes(message.eSkeyId);
        if (message.eSkeyVal != null && Object.hasOwnProperty.call(message, 'eSkeyVal'))
          writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.eSkeyVal);
        if (message.eSkeySig != null && Object.hasOwnProperty.call(message, 'eSkeySig'))
          writer.uint32(/* id 6, wireType 2 =*/ 50).bytes(message.eSkeySig);
        if (message.buildHash != null && Object.hasOwnProperty.call(message, 'buildHash'))
          writer.uint32(/* id 7, wireType 2 =*/ 58).bytes(message.buildHash);
        if (message.deviceProps != null && Object.hasOwnProperty.call(message, 'deviceProps'))
          $root.ClientHello.C2S.DeviceProps.encode(
            message.deviceProps,
            writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified CompanionRegData message, length delimited. Does not implicitly {@link ClientHello.C2S.CompanionRegData.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {ClientHello.C2S.ICompanionRegData} message CompanionRegData message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CompanionRegData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CompanionRegData message from the specified reader or buffer.
       * @function decode
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CompanionRegData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientHello.C2S.CompanionRegData();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.eRegid = reader.bytes();
              break;
            case 2:
              message.eKeytype = reader.bytes();
              break;
            case 3:
              message.eIdent = reader.bytes();
              break;
            case 4:
              message.eSkeyId = reader.bytes();
              break;
            case 5:
              message.eSkeyVal = reader.bytes();
              break;
            case 6:
              message.eSkeySig = reader.bytes();
              break;
            case 7:
              message.buildHash = reader.bytes();
              break;
            case 8:
              message.deviceProps = $root.ClientHello.C2S.DeviceProps.decode(
                reader,
                reader.uint32()
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CompanionRegData message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CompanionRegData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CompanionRegData message.
       * @function verify
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CompanionRegData.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.eRegid != null && message.hasOwnProperty('eRegid'))
          if (
            !(
              (message.eRegid && typeof message.eRegid.length === 'number') ||
              $util.isString(message.eRegid)
            )
          )
            return 'eRegid: buffer expected';
        if (message.eKeytype != null && message.hasOwnProperty('eKeytype'))
          if (
            !(
              (message.eKeytype && typeof message.eKeytype.length === 'number') ||
              $util.isString(message.eKeytype)
            )
          )
            return 'eKeytype: buffer expected';
        if (message.eIdent != null && message.hasOwnProperty('eIdent'))
          if (
            !(
              (message.eIdent && typeof message.eIdent.length === 'number') ||
              $util.isString(message.eIdent)
            )
          )
            return 'eIdent: buffer expected';
        if (message.eSkeyId != null && message.hasOwnProperty('eSkeyId'))
          if (
            !(
              (message.eSkeyId && typeof message.eSkeyId.length === 'number') ||
              $util.isString(message.eSkeyId)
            )
          )
            return 'eSkeyId: buffer expected';
        if (message.eSkeyVal != null && message.hasOwnProperty('eSkeyVal'))
          if (
            !(
              (message.eSkeyVal && typeof message.eSkeyVal.length === 'number') ||
              $util.isString(message.eSkeyVal)
            )
          )
            return 'eSkeyVal: buffer expected';
        if (message.eSkeySig != null && message.hasOwnProperty('eSkeySig'))
          if (
            !(
              (message.eSkeySig && typeof message.eSkeySig.length === 'number') ||
              $util.isString(message.eSkeySig)
            )
          )
            return 'eSkeySig: buffer expected';
        if (message.buildHash != null && message.hasOwnProperty('buildHash'))
          if (
            !(
              (message.buildHash && typeof message.buildHash.length === 'number') ||
              $util.isString(message.buildHash)
            )
          )
            return 'buildHash: buffer expected';
        if (message.deviceProps != null && message.hasOwnProperty('deviceProps')) {
          var error = $root.ClientHello.C2S.DeviceProps.verify(message.deviceProps);
          if (error) return 'deviceProps.' + error;
        }
        return null;
      };

      /**
       * Creates a CompanionRegData message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientHello.C2S.CompanionRegData} CompanionRegData
       */
      CompanionRegData.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHello.C2S.CompanionRegData) return object;
        var message = new $root.ClientHello.C2S.CompanionRegData();
        if (object.eRegid != null)
          if (typeof object.eRegid === 'string')
            $util.base64.decode(
              object.eRegid,
              (message.eRegid = $util.newBuffer($util.base64.length(object.eRegid))),
              0
            );
          else if (object.eRegid.length) message.eRegid = object.eRegid;
        if (object.eKeytype != null)
          if (typeof object.eKeytype === 'string')
            $util.base64.decode(
              object.eKeytype,
              (message.eKeytype = $util.newBuffer($util.base64.length(object.eKeytype))),
              0
            );
          else if (object.eKeytype.length) message.eKeytype = object.eKeytype;
        if (object.eIdent != null)
          if (typeof object.eIdent === 'string')
            $util.base64.decode(
              object.eIdent,
              (message.eIdent = $util.newBuffer($util.base64.length(object.eIdent))),
              0
            );
          else if (object.eIdent.length) message.eIdent = object.eIdent;
        if (object.eSkeyId != null)
          if (typeof object.eSkeyId === 'string')
            $util.base64.decode(
              object.eSkeyId,
              (message.eSkeyId = $util.newBuffer($util.base64.length(object.eSkeyId))),
              0
            );
          else if (object.eSkeyId.length) message.eSkeyId = object.eSkeyId;
        if (object.eSkeyVal != null)
          if (typeof object.eSkeyVal === 'string')
            $util.base64.decode(
              object.eSkeyVal,
              (message.eSkeyVal = $util.newBuffer($util.base64.length(object.eSkeyVal))),
              0
            );
          else if (object.eSkeyVal.length) message.eSkeyVal = object.eSkeyVal;
        if (object.eSkeySig != null)
          if (typeof object.eSkeySig === 'string')
            $util.base64.decode(
              object.eSkeySig,
              (message.eSkeySig = $util.newBuffer($util.base64.length(object.eSkeySig))),
              0
            );
          else if (object.eSkeySig.length) message.eSkeySig = object.eSkeySig;
        if (object.buildHash != null)
          if (typeof object.buildHash === 'string')
            $util.base64.decode(
              object.buildHash,
              (message.buildHash = $util.newBuffer($util.base64.length(object.buildHash))),
              0
            );
          else if (object.buildHash.length) message.buildHash = object.buildHash;
        if (object.deviceProps != null) {
          if (typeof object.deviceProps !== 'object')
            throw TypeError('.ClientHello.C2S.CompanionRegData.deviceProps: object expected');
          message.deviceProps = $root.ClientHello.C2S.DeviceProps.fromObject(object.deviceProps);
        }
        return message;
      };

      /**
       * Creates a plain object from a CompanionRegData message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientHello.C2S.CompanionRegData
       * @static
       * @param {ClientHello.C2S.CompanionRegData} message CompanionRegData
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CompanionRegData.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.eRegid = '';
          else {
            object.eRegid = [];
            if (options.bytes !== Array) object.eRegid = $util.newBuffer(object.eRegid);
          }
          if (options.bytes === String) object.eKeytype = '';
          else {
            object.eKeytype = [];
            if (options.bytes !== Array) object.eKeytype = $util.newBuffer(object.eKeytype);
          }
          if (options.bytes === String) object.eIdent = '';
          else {
            object.eIdent = [];
            if (options.bytes !== Array) object.eIdent = $util.newBuffer(object.eIdent);
          }
          if (options.bytes === String) object.eSkeyId = '';
          else {
            object.eSkeyId = [];
            if (options.bytes !== Array) object.eSkeyId = $util.newBuffer(object.eSkeyId);
          }
          if (options.bytes === String) object.eSkeyVal = '';
          else {
            object.eSkeyVal = [];
            if (options.bytes !== Array) object.eSkeyVal = $util.newBuffer(object.eSkeyVal);
          }
          if (options.bytes === String) object.eSkeySig = '';
          else {
            object.eSkeySig = [];
            if (options.bytes !== Array) object.eSkeySig = $util.newBuffer(object.eSkeySig);
          }
          if (options.bytes === String) object.buildHash = '';
          else {
            object.buildHash = [];
            if (options.bytes !== Array) object.buildHash = $util.newBuffer(object.buildHash);
          }
          object.deviceProps = null;
        }
        if (message.eRegid != null && message.hasOwnProperty('eRegid'))
          object.eRegid =
            options.bytes === String
              ? $util.base64.encode(message.eRegid, 0, message.eRegid.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eRegid)
              : message.eRegid;
        if (message.eKeytype != null && message.hasOwnProperty('eKeytype'))
          object.eKeytype =
            options.bytes === String
              ? $util.base64.encode(message.eKeytype, 0, message.eKeytype.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eKeytype)
              : message.eKeytype;
        if (message.eIdent != null && message.hasOwnProperty('eIdent'))
          object.eIdent =
            options.bytes === String
              ? $util.base64.encode(message.eIdent, 0, message.eIdent.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eIdent)
              : message.eIdent;
        if (message.eSkeyId != null && message.hasOwnProperty('eSkeyId'))
          object.eSkeyId =
            options.bytes === String
              ? $util.base64.encode(message.eSkeyId, 0, message.eSkeyId.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eSkeyId)
              : message.eSkeyId;
        if (message.eSkeyVal != null && message.hasOwnProperty('eSkeyVal'))
          object.eSkeyVal =
            options.bytes === String
              ? $util.base64.encode(message.eSkeyVal, 0, message.eSkeyVal.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eSkeyVal)
              : message.eSkeyVal;
        if (message.eSkeySig != null && message.hasOwnProperty('eSkeySig'))
          object.eSkeySig =
            options.bytes === String
              ? $util.base64.encode(message.eSkeySig, 0, message.eSkeySig.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.eSkeySig)
              : message.eSkeySig;
        if (message.buildHash != null && message.hasOwnProperty('buildHash'))
          object.buildHash =
            options.bytes === String
              ? $util.base64.encode(message.buildHash, 0, message.buildHash.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.buildHash)
              : message.buildHash;
        if (message.deviceProps != null && message.hasOwnProperty('deviceProps'))
          object.deviceProps = $root.ClientHello.C2S.DeviceProps.toObject(
            message.deviceProps,
            options
          );
        return object;
      };

      /**
       * Converts this CompanionRegData to JSON.
       * @function toJSON
       * @memberof ClientHello.C2S.CompanionRegData
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CompanionRegData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return CompanionRegData;
    })();

    C2S.InteropData = (function () {
      /**
       * Properties of an InteropData.
       * @memberof ClientHello.C2S
       * @interface IInteropData
       * @property {number|Long|null} [accountId] InteropData accountId
       * @property {Uint8Array|null} [token] InteropData token
       */

      /**
       * Constructs a new InteropData.
       * @memberof ClientHello.C2S
       * @classdesc Represents an InteropData.
       * @implements IInteropData
       * @constructor
       * @param {ClientHello.C2S.IInteropData=} [properties] Properties to set
       */
      function InteropData(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * InteropData accountId.
       * @member {number|Long} accountId
       * @memberof ClientHello.C2S.InteropData
       * @instance
       */
      InteropData.prototype.accountId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

      /**
       * InteropData token.
       * @member {Uint8Array} token
       * @memberof ClientHello.C2S.InteropData
       * @instance
       */
      InteropData.prototype.token = $util.newBuffer([]);

      /**
       * Creates a new InteropData instance using the specified properties.
       * @function create
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {ClientHello.C2S.IInteropData=} [properties] Properties to set
       * @returns {ClientHello.C2S.InteropData} InteropData instance
       */
      InteropData.create = function create(properties) {
        return new InteropData(properties);
      };

      /**
       * Encodes the specified InteropData message. Does not implicitly {@link ClientHello.C2S.InteropData.verify|verify} messages.
       * @function encode
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {ClientHello.C2S.IInteropData} message InteropData message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      InteropData.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.accountId != null && Object.hasOwnProperty.call(message, 'accountId'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.accountId);
        if (message.token != null && Object.hasOwnProperty.call(message, 'token'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.token);
        return writer;
      };

      /**
       * Encodes the specified InteropData message, length delimited. Does not implicitly {@link ClientHello.C2S.InteropData.verify|verify} messages.
       * @function encodeDelimited
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {ClientHello.C2S.IInteropData} message InteropData message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      InteropData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an InteropData message from the specified reader or buffer.
       * @function decode
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {ClientHello.C2S.InteropData} InteropData
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      InteropData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.ClientHello.C2S.InteropData();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.accountId = reader.uint64();
              break;
            case 2:
              message.token = reader.bytes();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an InteropData message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {ClientHello.C2S.InteropData} InteropData
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      InteropData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an InteropData message.
       * @function verify
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      InteropData.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.accountId != null && message.hasOwnProperty('accountId'))
          if (
            !$util.isInteger(message.accountId) &&
            !(
              message.accountId &&
              $util.isInteger(message.accountId.low) &&
              $util.isInteger(message.accountId.high)
            )
          )
            return 'accountId: integer|Long expected';
        if (message.token != null && message.hasOwnProperty('token'))
          if (
            !(
              (message.token && typeof message.token.length === 'number') ||
              $util.isString(message.token)
            )
          )
            return 'token: buffer expected';
        return null;
      };

      /**
       * Creates an InteropData message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {ClientHello.C2S.InteropData} InteropData
       */
      InteropData.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHello.C2S.InteropData) return object;
        var message = new $root.ClientHello.C2S.InteropData();
        if (object.accountId != null)
          if ($util.Long)
            (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = true;
          else if (typeof object.accountId === 'string')
            message.accountId = parseInt(object.accountId, 10);
          else if (typeof object.accountId === 'number') message.accountId = object.accountId;
          else if (typeof object.accountId === 'object')
            message.accountId = new $util.LongBits(
              object.accountId.low >>> 0,
              object.accountId.high >>> 0
            ).toNumber(true);
        if (object.token != null)
          if (typeof object.token === 'string')
            $util.base64.decode(
              object.token,
              (message.token = $util.newBuffer($util.base64.length(object.token))),
              0
            );
          else if (object.token.length) message.token = object.token;
        return message;
      };

      /**
       * Creates a plain object from an InteropData message. Also converts values to other types if specified.
       * @function toObject
       * @memberof ClientHello.C2S.InteropData
       * @static
       * @param {ClientHello.C2S.InteropData} message InteropData
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      InteropData.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if ($util.Long) {
            var long = new $util.Long(0, 0, true);
            object.accountId =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.accountId = options.longs === String ? '0' : 0;
          if (options.bytes === String) object.token = '';
          else {
            object.token = [];
            if (options.bytes !== Array) object.token = $util.newBuffer(object.token);
          }
        }
        if (message.accountId != null && message.hasOwnProperty('accountId'))
          if (typeof message.accountId === 'number')
            object.accountId =
              options.longs === String ? String(message.accountId) : message.accountId;
          else
            object.accountId =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.accountId)
                : options.longs === Number
                ? new $util.LongBits(
                    message.accountId.low >>> 0,
                    message.accountId.high >>> 0
                  ).toNumber(true)
                : message.accountId;
        if (message.token != null && message.hasOwnProperty('token'))
          object.token =
            options.bytes === String
              ? $util.base64.encode(message.token, 0, message.token.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.token)
              : message.token;
        return object;
      };

      /**
       * Converts this InteropData to JSON.
       * @function toJSON
       * @memberof ClientHello.C2S.InteropData
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      InteropData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return InteropData;
    })();

    return C2S;
  })();

  return ClientHello;
})();

module.exports = $root;
