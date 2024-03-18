/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader;
var $Writer = $protobuf.Writer;
var $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.default || ($protobuf.roots.default = {});

$root.HandshakeMessage = (function() {
  /**
   * Namespace HandshakeMessage.
   * @exports HandshakeMessage
   * @namespace
   */
  var HandshakeMessage = {};

  HandshakeMessage.ClientHello = (function() {
    /**
     * Properties of a ClientHello.
     * @memberof HandshakeMessage
     * @interface IClientHello
     * @property {Uint8Array|null} [ephemeral] ClientHello ephemeral
     * @property {Uint8Array|null} ["static"] ClientHello static
     * @property {Uint8Array|null} [payload] ClientHello payload
     */

    /**
     * Constructs a new ClientHello.
     * @memberof HandshakeMessage
     * @classdesc Represents a ClientHello.
     * @implements IClientHello
     * @constructor
     * @param {HandshakeMessage.IClientHello=} [properties] Properties to set
     */
    function ClientHello(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientHello ephemeral.
     * @member {Uint8Array} ephemeral
     * @memberof HandshakeMessage.ClientHello
     * @instance
     */
    ClientHello.prototype.ephemeral = $util.newBuffer([]);

    /**
     * ClientHello static.
     * @member {Uint8Array} static
     * @memberof HandshakeMessage.ClientHello
     * @instance
     */
    ClientHello.prototype.static = $util.newBuffer([]);

    /**
     * ClientHello payload.
     * @member {Uint8Array} payload
     * @memberof HandshakeMessage.ClientHello
     * @instance
     */
    ClientHello.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new ClientHello instance using the specified properties.
     * @function create
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {HandshakeMessage.IClientHello=} [properties] Properties to set
     * @returns {HandshakeMessage.ClientHello} ClientHello instance
     */
    ClientHello.create = function create(properties) {
      return new ClientHello(properties);
    };

    /**
     * Encodes the specified ClientHello message. Does not implicitly {@link HandshakeMessage.ClientHello.verify|verify} messages.
     * @function encode
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientHello.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.ephemeral != null && Object.hasOwnProperty.call(message, 'ephemeral'))
        writer.uint32(/* id 1, wireType 2 = */ 10).bytes(message.ephemeral);
      if (message.static != null && Object.hasOwnProperty.call(message, 'static'))
        writer.uint32(/* id 2, wireType 2 = */ 18).bytes(message.static);
      if (message.payload != null && Object.hasOwnProperty.call(message, 'payload'))
        writer.uint32(/* id 3, wireType 2 = */ 26).bytes(message.payload);
      return writer;
    };

    /**
     * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link HandshakeMessage.ClientHello.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientHello.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientHello message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandshakeMessage.ClientHello} ClientHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientHello.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = new $root.HandshakeMessage.ClientHello();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ephemeral = reader.bytes();
            break;
          case 2:
            message.static = reader.bytes();
            break;
          case 3:
            message.payload = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ClientHello message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandshakeMessage.ClientHello} ClientHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientHello.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientHello message.
     * @function verify
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientHello.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.ephemeral != null && message.hasOwnProperty('ephemeral'))
        if (
          !(
            (message.ephemeral && typeof message.ephemeral.length === 'number') ||
            $util.isString(message.ephemeral)
          )
        )
          return 'ephemeral: buffer expected';
      if (message.static != null && message.hasOwnProperty('static'))
        if (
          !(
            (message.static && typeof message.static.length === 'number') ||
            $util.isString(message.static)
          )
        )
          return 'static: buffer expected';
      if (message.payload != null && message.hasOwnProperty('payload'))
        if (
          !(
            (message.payload && typeof message.payload.length === 'number') ||
            $util.isString(message.payload)
          )
        )
          return 'payload: buffer expected';
      return null;
    };

    /**
     * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandshakeMessage.ClientHello} ClientHello
     */
    ClientHello.fromObject = function fromObject(object) {
      if (object instanceof $root.HandshakeMessage.ClientHello) return object;
      var message = new $root.HandshakeMessage.ClientHello();
      if (object.ephemeral != null)
        if (typeof object.ephemeral === 'string')
          $util.base64.decode(
            object.ephemeral,
            (message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral))),
            0
          );
        else if (object.ephemeral.length) message.ephemeral = object.ephemeral;
      if (object.static != null)
        if (typeof object.static === 'string')
          $util.base64.decode(
            object.static,
            (message.static = $util.newBuffer($util.base64.length(object.static))),
            0
          );
        else if (object.static.length) message.static = object.static;
      if (object.payload != null)
        if (typeof object.payload === 'string')
          $util.base64.decode(
            object.payload,
            (message.payload = $util.newBuffer($util.base64.length(object.payload))),
            0
          );
        else if (object.payload.length) message.payload = object.payload;
      return message;
    };

    /**
     * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandshakeMessage.ClientHello
     * @static
     * @param {HandshakeMessage.ClientHello} message ClientHello
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientHello.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) object.ephemeral = '';
        else {
          object.ephemeral = [];
          if (options.bytes !== Array) object.ephemeral = $util.newBuffer(object.ephemeral);
        }
        if (options.bytes === String) object.static = '';
        else {
          object.static = [];
          if (options.bytes !== Array) object.static = $util.newBuffer(object.static);
        }
        if (options.bytes === String) object.payload = '';
        else {
          object.payload = [];
          if (options.bytes !== Array) object.payload = $util.newBuffer(object.payload);
        }
      }
      if (message.ephemeral != null && message.hasOwnProperty('ephemeral'))
        object.ephemeral =
          options.bytes === String
            ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.ephemeral)
            : message.ephemeral;
      if (message.static != null && message.hasOwnProperty('static'))
        object.static =
          options.bytes === String
            ? $util.base64.encode(message.static, 0, message.static.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.static)
            : message.static;
      if (message.payload != null && message.hasOwnProperty('payload'))
        object.payload =
          options.bytes === String
            ? $util.base64.encode(message.payload, 0, message.payload.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.payload)
            : message.payload;
      return object;
    };

    /**
     * Converts this ClientHello to JSON.
     * @function toJSON
     * @memberof HandshakeMessage.ClientHello
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientHello.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientHello;
  })();

  HandshakeMessage.ServerHello = (function() {
    /**
     * Properties of a ServerHello.
     * @memberof HandshakeMessage
     * @interface IServerHello
     * @property {Uint8Array|null} [ephemeral] ServerHello ephemeral
     * @property {Uint8Array|null} ["static"] ServerHello static
     * @property {Uint8Array|null} [payload] ServerHello payload
     */

    /**
     * Constructs a new ServerHello.
     * @memberof HandshakeMessage
     * @classdesc Represents a ServerHello.
     * @implements IServerHello
     * @constructor
     * @param {HandshakeMessage.IServerHello=} [properties] Properties to set
     */
    function ServerHello(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerHello ephemeral.
     * @member {Uint8Array} ephemeral
     * @memberof HandshakeMessage.ServerHello
     * @instance
     */
    ServerHello.prototype.ephemeral = $util.newBuffer([]);

    /**
     * ServerHello static.
     * @member {Uint8Array} static
     * @memberof HandshakeMessage.ServerHello
     * @instance
     */
    ServerHello.prototype.static = $util.newBuffer([]);

    /**
     * ServerHello payload.
     * @member {Uint8Array} payload
     * @memberof HandshakeMessage.ServerHello
     * @instance
     */
    ServerHello.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new ServerHello instance using the specified properties.
     * @function create
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {HandshakeMessage.IServerHello=} [properties] Properties to set
     * @returns {HandshakeMessage.ServerHello} ServerHello instance
     */
    ServerHello.create = function create(properties) {
      return new ServerHello(properties);
    };

    /**
     * Encodes the specified ServerHello message. Does not implicitly {@link HandshakeMessage.ServerHello.verify|verify} messages.
     * @function encode
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerHello.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.ephemeral != null && Object.hasOwnProperty.call(message, 'ephemeral'))
        writer.uint32(/* id 1, wireType 2 = */ 10).bytes(message.ephemeral);
      if (message.static != null && Object.hasOwnProperty.call(message, 'static'))
        writer.uint32(/* id 2, wireType 2 = */ 18).bytes(message.static);
      if (message.payload != null && Object.hasOwnProperty.call(message, 'payload'))
        writer.uint32(/* id 3, wireType 2 = */ 26).bytes(message.payload);
      return writer;
    };

    /**
     * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link HandshakeMessage.ServerHello.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerHello.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerHello message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandshakeMessage.ServerHello} ServerHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerHello.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = new $root.HandshakeMessage.ServerHello();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ephemeral = reader.bytes();
            break;
          case 2:
            message.static = reader.bytes();
            break;
          case 3:
            message.payload = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ServerHello message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandshakeMessage.ServerHello} ServerHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerHello.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerHello message.
     * @function verify
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerHello.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.ephemeral != null && message.hasOwnProperty('ephemeral'))
        if (
          !(
            (message.ephemeral && typeof message.ephemeral.length === 'number') ||
            $util.isString(message.ephemeral)
          )
        )
          return 'ephemeral: buffer expected';
      if (message.static != null && message.hasOwnProperty('static'))
        if (
          !(
            (message.static && typeof message.static.length === 'number') ||
            $util.isString(message.static)
          )
        )
          return 'static: buffer expected';
      if (message.payload != null && message.hasOwnProperty('payload'))
        if (
          !(
            (message.payload && typeof message.payload.length === 'number') ||
            $util.isString(message.payload)
          )
        )
          return 'payload: buffer expected';
      return null;
    };

    /**
     * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandshakeMessage.ServerHello} ServerHello
     */
    ServerHello.fromObject = function fromObject(object) {
      if (object instanceof $root.HandshakeMessage.ServerHello) return object;
      var message = new $root.HandshakeMessage.ServerHello();
      if (object.ephemeral != null)
        if (typeof object.ephemeral === 'string')
          $util.base64.decode(
            object.ephemeral,
            (message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral))),
            0
          );
        else if (object.ephemeral.length) message.ephemeral = object.ephemeral;
      if (object.static != null)
        if (typeof object.static === 'string')
          $util.base64.decode(
            object.static,
            (message.static = $util.newBuffer($util.base64.length(object.static))),
            0
          );
        else if (object.static.length) message.static = object.static;
      if (object.payload != null)
        if (typeof object.payload === 'string')
          $util.base64.decode(
            object.payload,
            (message.payload = $util.newBuffer($util.base64.length(object.payload))),
            0
          );
        else if (object.payload.length) message.payload = object.payload;
      return message;
    };

    /**
     * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandshakeMessage.ServerHello
     * @static
     * @param {HandshakeMessage.ServerHello} message ServerHello
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerHello.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) object.ephemeral = '';
        else {
          object.ephemeral = [];
          if (options.bytes !== Array) object.ephemeral = $util.newBuffer(object.ephemeral);
        }
        if (options.bytes === String) object.static = '';
        else {
          object.static = [];
          if (options.bytes !== Array) object.static = $util.newBuffer(object.static);
        }
        if (options.bytes === String) object.payload = '';
        else {
          object.payload = [];
          if (options.bytes !== Array) object.payload = $util.newBuffer(object.payload);
        }
      }
      if (message.ephemeral != null && message.hasOwnProperty('ephemeral'))
        object.ephemeral =
          options.bytes === String
            ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.ephemeral)
            : message.ephemeral;
      if (message.static != null && message.hasOwnProperty('static'))
        object.static =
          options.bytes === String
            ? $util.base64.encode(message.static, 0, message.static.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.static)
            : message.static;
      if (message.payload != null && message.hasOwnProperty('payload'))
        object.payload =
          options.bytes === String
            ? $util.base64.encode(message.payload, 0, message.payload.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.payload)
            : message.payload;
      return object;
    };

    /**
     * Converts this ServerHello to JSON.
     * @function toJSON
     * @memberof HandshakeMessage.ServerHello
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerHello.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerHello;
  })();

  HandshakeMessage.ClientFinish = (function() {
    /**
     * Properties of a ClientFinish.
     * @memberof HandshakeMessage
     * @interface IClientFinish
     * @property {Uint8Array|null} ["static"] ClientFinish static
     * @property {Uint8Array|null} [payload] ClientFinish payload
     */

    /**
     * Constructs a new ClientFinish.
     * @memberof HandshakeMessage
     * @classdesc Represents a ClientFinish.
     * @implements IClientFinish
     * @constructor
     * @param {HandshakeMessage.IClientFinish=} [properties] Properties to set
     */
    function ClientFinish(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientFinish static.
     * @member {Uint8Array} static
     * @memberof HandshakeMessage.ClientFinish
     * @instance
     */
    ClientFinish.prototype.static = $util.newBuffer([]);

    /**
     * ClientFinish payload.
     * @member {Uint8Array} payload
     * @memberof HandshakeMessage.ClientFinish
     * @instance
     */
    ClientFinish.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new ClientFinish instance using the specified properties.
     * @function create
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {HandshakeMessage.IClientFinish=} [properties] Properties to set
     * @returns {HandshakeMessage.ClientFinish} ClientFinish instance
     */
    ClientFinish.create = function create(properties) {
      return new ClientFinish(properties);
    };

    /**
     * Encodes the specified ClientFinish message. Does not implicitly {@link HandshakeMessage.ClientFinish.verify|verify} messages.
     * @function encode
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientFinish.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.static != null && Object.hasOwnProperty.call(message, 'static'))
        writer.uint32(/* id 1, wireType 2 = */ 10).bytes(message.static);
      if (message.payload != null && Object.hasOwnProperty.call(message, 'payload'))
        writer.uint32(/* id 2, wireType 2 = */ 18).bytes(message.payload);
      return writer;
    };

    /**
     * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link HandshakeMessage.ClientFinish.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientFinish.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientFinish message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandshakeMessage.ClientFinish} ClientFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientFinish.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = new $root.HandshakeMessage.ClientFinish();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.static = reader.bytes();
            break;
          case 2:
            message.payload = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandshakeMessage.ClientFinish} ClientFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientFinish.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientFinish message.
     * @function verify
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientFinish.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.static != null && message.hasOwnProperty('static'))
        if (
          !(
            (message.static && typeof message.static.length === 'number') ||
            $util.isString(message.static)
          )
        )
          return 'static: buffer expected';
      if (message.payload != null && message.hasOwnProperty('payload'))
        if (
          !(
            (message.payload && typeof message.payload.length === 'number') ||
            $util.isString(message.payload)
          )
        )
          return 'payload: buffer expected';
      return null;
    };

    /**
     * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandshakeMessage.ClientFinish} ClientFinish
     */
    ClientFinish.fromObject = function fromObject(object) {
      if (object instanceof $root.HandshakeMessage.ClientFinish) return object;
      var message = new $root.HandshakeMessage.ClientFinish();
      if (object.static != null)
        if (typeof object.static === 'string')
          $util.base64.decode(
            object.static,
            (message.static = $util.newBuffer($util.base64.length(object.static))),
            0
          );
        else if (object.static.length) message.static = object.static;
      if (object.payload != null)
        if (typeof object.payload === 'string')
          $util.base64.decode(
            object.payload,
            (message.payload = $util.newBuffer($util.base64.length(object.payload))),
            0
          );
        else if (object.payload.length) message.payload = object.payload;
      return message;
    };

    /**
     * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandshakeMessage.ClientFinish
     * @static
     * @param {HandshakeMessage.ClientFinish} message ClientFinish
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientFinish.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) object.static = '';
        else {
          object.static = [];
          if (options.bytes !== Array) object.static = $util.newBuffer(object.static);
        }
        if (options.bytes === String) object.payload = '';
        else {
          object.payload = [];
          if (options.bytes !== Array) object.payload = $util.newBuffer(object.payload);
        }
      }
      if (message.static != null && message.hasOwnProperty('static'))
        object.static =
          options.bytes === String
            ? $util.base64.encode(message.static, 0, message.static.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.static)
            : message.static;
      if (message.payload != null && message.hasOwnProperty('payload'))
        object.payload =
          options.bytes === String
            ? $util.base64.encode(message.payload, 0, message.payload.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.payload)
            : message.payload;
      return object;
    };

    /**
     * Converts this ClientFinish to JSON.
     * @function toJSON
     * @memberof HandshakeMessage.ClientFinish
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientFinish.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientFinish;
  })();

  HandshakeMessage.HandshakeMessage = (function() {
    /**
     * Properties of a HandshakeMessage.
     * @memberof HandshakeMessage
     * @interface IHandshakeMessage
     * @property {HandshakeMessage.IClientHello|null} [clientHello] HandshakeMessage clientHello
     * @property {HandshakeMessage.IServerHello|null} [serverHello] HandshakeMessage serverHello
     * @property {HandshakeMessage.IClientFinish|null} [clientFinish] HandshakeMessage clientFinish
     */

    /**
     * Constructs a new HandshakeMessage.
     * @memberof HandshakeMessage
     * @classdesc Represents a HandshakeMessage.
     * @implements IHandshakeMessage
     * @constructor
     * @param {HandshakeMessage.IHandshakeMessage=} [properties] Properties to set
     */
    function HandshakeMessage(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandshakeMessage clientHello.
     * @member {HandshakeMessage.IClientHello|null|undefined} clientHello
     * @memberof HandshakeMessage.HandshakeMessage
     * @instance
     */
    HandshakeMessage.prototype.clientHello = null;

    /**
     * HandshakeMessage serverHello.
     * @member {HandshakeMessage.IServerHello|null|undefined} serverHello
     * @memberof HandshakeMessage.HandshakeMessage
     * @instance
     */
    HandshakeMessage.prototype.serverHello = null;

    /**
     * HandshakeMessage clientFinish.
     * @member {HandshakeMessage.IClientFinish|null|undefined} clientFinish
     * @memberof HandshakeMessage.HandshakeMessage
     * @instance
     */
    HandshakeMessage.prototype.clientFinish = null;

    /**
     * Creates a new HandshakeMessage instance using the specified properties.
     * @function create
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {HandshakeMessage.IHandshakeMessage=} [properties] Properties to set
     * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage instance
     */
    HandshakeMessage.create = function create(properties) {
      return new HandshakeMessage(properties);
    };

    /**
     * Encodes the specified HandshakeMessage message. Does not implicitly {@link HandshakeMessage.HandshakeMessage.verify|verify} messages.
     * @function encode
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {HandshakeMessage.IHandshakeMessage} message HandshakeMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandshakeMessage.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.clientHello != null && Object.hasOwnProperty.call(message, 'clientHello'))
        $root.HandshakeMessage.ClientHello.encode(
          message.clientHello,
          writer.uint32(/* id 2, wireType 2 = */ 18).fork()
        ).ldelim();
      if (message.serverHello != null && Object.hasOwnProperty.call(message, 'serverHello'))
        $root.HandshakeMessage.ServerHello.encode(
          message.serverHello,
          writer.uint32(/* id 3, wireType 2 = */ 26).fork()
        ).ldelim();
      if (message.clientFinish != null && Object.hasOwnProperty.call(message, 'clientFinish'))
        $root.HandshakeMessage.ClientFinish.encode(
          message.clientFinish,
          writer.uint32(/* id 4, wireType 2 = */ 34).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link HandshakeMessage.HandshakeMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {HandshakeMessage.IHandshakeMessage} message HandshakeMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandshakeMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandshakeMessage message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandshakeMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = new $root.HandshakeMessage.HandshakeMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 2:
            message.clientHello = $root.HandshakeMessage.ClientHello.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.serverHello = $root.HandshakeMessage.ServerHello.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.clientFinish = $root.HandshakeMessage.ClientFinish.decode(
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
     * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandshakeMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandshakeMessage message.
     * @function verify
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandshakeMessage.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.clientHello != null && message.hasOwnProperty('clientHello')) {
        var error = $root.HandshakeMessage.ClientHello.verify(message.clientHello);
        if (error) return `clientHello.${error}`;
      }
      if (message.serverHello != null && message.hasOwnProperty('serverHello')) {
        var error = $root.HandshakeMessage.ServerHello.verify(message.serverHello);
        if (error) return `serverHello.${error}`;
      }
      if (message.clientFinish != null && message.hasOwnProperty('clientFinish')) {
        var error = $root.HandshakeMessage.ClientFinish.verify(message.clientFinish);
        if (error) return `clientFinish.${error}`;
      }
      return null;
    };

    /**
     * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandshakeMessage.HandshakeMessage} HandshakeMessage
     */
    HandshakeMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.HandshakeMessage.HandshakeMessage) return object;
      var message = new $root.HandshakeMessage.HandshakeMessage();
      if (object.clientHello != null) {
        if (typeof object.clientHello !== 'object')
          throw TypeError('.HandshakeMessage.HandshakeMessage.clientHello: object expected');
        message.clientHello = $root.HandshakeMessage.ClientHello.fromObject(object.clientHello);
      }
      if (object.serverHello != null) {
        if (typeof object.serverHello !== 'object')
          throw TypeError('.HandshakeMessage.HandshakeMessage.serverHello: object expected');
        message.serverHello = $root.HandshakeMessage.ServerHello.fromObject(object.serverHello);
      }
      if (object.clientFinish != null) {
        if (typeof object.clientFinish !== 'object')
          throw TypeError('.HandshakeMessage.HandshakeMessage.clientFinish: object expected');
        message.clientFinish = $root.HandshakeMessage.ClientFinish.fromObject(object.clientFinish);
      }
      return message;
    };

    /**
     * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandshakeMessage.HandshakeMessage
     * @static
     * @param {HandshakeMessage.HandshakeMessage} message HandshakeMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HandshakeMessage.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.clientHello = null;
        object.serverHello = null;
        object.clientFinish = null;
      }
      if (message.clientHello != null && message.hasOwnProperty('clientHello'))
        object.clientHello = $root.HandshakeMessage.ClientHello.toObject(
          message.clientHello,
          options
        );
      if (message.serverHello != null && message.hasOwnProperty('serverHello'))
        object.serverHello = $root.HandshakeMessage.ServerHello.toObject(
          message.serverHello,
          options
        );
      if (message.clientFinish != null && message.hasOwnProperty('clientFinish'))
        object.clientFinish = $root.HandshakeMessage.ClientFinish.toObject(
          message.clientFinish,
          options
        );
      return object;
    };

    /**
     * Converts this HandshakeMessage to JSON.
     * @function toJSON
     * @memberof HandshakeMessage.HandshakeMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HandshakeMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HandshakeMessage;
  })();

  return HandshakeMessage;
})();

module.exports = $root;
