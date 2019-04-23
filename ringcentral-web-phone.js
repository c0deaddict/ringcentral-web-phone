(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sip.js"), require("getstats"));
	else if(typeof define === 'function' && define.amd)
		define(["sip.js", "getstats"], factory);
	else if(typeof exports === 'object')
		exports["WebPhone"] = factory(require("sip.js"), require("getstats"));
	else
		root["RingCentral"] = root["RingCentral"] || {}, root["RingCentral"]["WebPhone"] = factory(root["SIP"], root["getStats"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = {
    park: { reqid: 1, command: 'callpark' },
    startRecord: { reqid: 2, command: 'startcallrecord' },
    stopRecord: { reqid: 3, command: 'stopcallrecord' },
    flip: { reqid: 3, command: 'callflip', target: '' },
    monitor: { reqid: 4, command: 'monitor' },
    barge: { reqid: 5, command: 'barge' },
    whisper: { reqid: 6, command: 'whisper' },
    takeover: { reqid: 7, command: 'takeover' },
    toVoicemail: { reqid: 11, command: 'toVoicemail' },
    ignore: { reqid: 12, command: 'ignore' },
    receiveConfirm: { reqid: 17, command: 'receiveConfirm' },
    replyWithMessage: { reqid: 14, command: 'replyWithMessage' }
};
exports.uuidKey = 'rc-webPhone-uuid';
exports.responseTimeout = 60000;
exports.defaultMediaConstraints = {
    audio: true,
    video: false
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.delay = function (ms) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
}); }); };
exports.extend = function (dst, src) {
    if (dst === void 0) { dst = {}; }
    if (src === void 0) { src = {}; }
    return Object.assign(dst || {}, src || {});
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var userAgent_1 = __webpack_require__(4);
var sip_js_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(2);
var version = __webpack_require__(10).version;
var WebPhone = /** @class */ (function () {
    /**
     * TODO: include 'WebPhone' for all apps other than Chrome and Glip
     * TODO: parse wsservers from new api spec
     */
    function WebPhone(regData, options) {
        if (regData === void 0) { regData = {}; }
        if (options === void 0) { options = {}; }
        this.sipInfo = regData.sipInfo[0] || regData.sipInfo;
        this.sipFlags = regData.sipFlags;
        this.uuidKey = options.uuidKey || constants_1.uuidKey;
        var id = options.uuid || localStorage.getItem(this.uuidKey) || utils_1.uuid(); //TODO Make configurable
        localStorage.setItem(this.uuidKey, id);
        this.appKey = options.appKey;
        this.appName = options.appName;
        this.appVersion = options.appVersion;
        var ua_match = navigator.userAgent.match(/\((.*?)\)/);
        var app_client_os = (ua_match && ua_match.length && ua_match[1]).replace(/[^a-zA-Z0-9.:_]+/g, '-') || '';
        var userAgentString = (options.appName ? options.appName + (options.appVersion ? '/' + options.appVersion : '') + ' ' : '') +
            (app_client_os ? app_client_os : '') +
            (" RCWEBPHONE/" + version);
        var modifiers = options.modifiers || [];
        modifiers.push(sip_js_1.Web.Modifiers.stripG722);
        modifiers.push(sip_js_1.Web.Modifiers.stripTcpCandidates);
        var sdpSemantics = 'plan-b';
        if (options.enableUnifiedSDP) {
            sdpSemantics = 'unified-plan';
        }
        if (options.enableMidLinesInSDP) {
            modifiers.push(sip_js_1.Web.Modifiers.addMidLines);
        }
        var sessionDescriptionHandlerFactoryOptions = options.sessionDescriptionHandlerFactoryOptions || {
            peerConnectionOptions: {
                iceCheckingTimeout: this.sipInfo.iceCheckingTimeout || this.sipInfo.iceGatheringTimeout || 500,
                rtcConfiguration: {
                    rtcpMuxPolicy: 'negotiate',
                    sdpSemantics: sdpSemantics
                }
            },
            constraints: options.mediaConstraints || constants_1.defaultMediaConstraints,
            modifiers: modifiers
        };
        var browserUa = navigator.userAgent.toLowerCase();
        var isSafari = false;
        var isFirefox = false;
        if (browserUa.indexOf('safari') > -1 && browserUa.indexOf('chrome') < 0) {
            isSafari = true;
        }
        else if (browserUa.indexOf('firefox') > -1 && browserUa.indexOf('chrome') < 0) {
            isFirefox = true;
        }
        if (isFirefox) {
            sessionDescriptionHandlerFactoryOptions.alwaysAcquireMediaFirst = true;
        }
        var sessionDescriptionHandlerFactory = options.sessionDescriptionHandlerFactory || [];
        var sipErrorCodes = regData.sipErrorCodes && regData.sipErrorCodes.length ? regData.sipErrorCodes : ['408', '502', '503'];
        var wsServers = [];
        if (this.sipInfo.outboundProxy && this.sipInfo.transport) {
            wsServers.push({
                wsUri: this.sipInfo.transport.toLowerCase() + '://' + this.sipInfo.outboundProxy,
                weight: 10
            });
        }
        if (this.sipInfo.outboundProxyBackup && this.sipInfo.transport) {
            wsServers.push({
                wsUri: this.sipInfo.transport.toLowerCase() + '://' + this.sipInfo.outboundProxyBackup,
                weight: 0
            });
        }
        wsServers = wsServers.length ? wsServers : this.sipInfo.wsServers;
        var maxReconnectionAttemptsNoBackup = options.maxReconnectionAttemptsNoBackup || 15;
        var maxReconnectionAttemptsWithBackup = options.maxReconnectionAttemptsWithBackup || 10;
        var reconnectionTimeoutNoBackup = options.reconnectionTimeoutNoBackup || 5;
        var reconnectionTimeoutWithBackup = options.reconnectionTimeoutWithBackup || 4;
        var configuration = {
            uri: "sip:" + this.sipInfo.username + "@" + this.sipInfo.domain,
            transportOptions: {
                wsServers: wsServers,
                traceSip: true,
                maxReconnectionAttempts: wsServers.length === 1 ? maxReconnectionAttemptsNoBackup : maxReconnectionAttemptsWithBackup,
                reconnectionTimeout: wsServers.length === 1 ? reconnectionTimeoutNoBackup : reconnectionTimeoutWithBackup,
                connectionTimeout: 5
            },
            authorizationUser: this.sipInfo.authorizationId,
            password: this.sipInfo.password,
            stunServers: this.sipInfo.stunServers || ['stun:74.125.194.127:19302'],
            turnServers: [],
            log: {
                level: options.logLevel || 1,
                builtinEnabled: options.builtinEnabled || true,
                connector: options.connector || null
            },
            domain: this.sipInfo.domain,
            autostart: false,
            register: true,
            userAgentString: userAgentString,
            sessionDescriptionHandlerFactoryOptions: sessionDescriptionHandlerFactoryOptions,
            sessionDescriptionHandlerFactory: sessionDescriptionHandlerFactory
        };
        options.sipErrorCodes = sipErrorCodes;
        options.switchBackInterval = this.sipInfo.switchBackInterval;
        this.userAgent = userAgent_1.patchUserAgent(new sip_js_1.UA(configuration), this.sipInfo, options, id);
    }
    WebPhone.version = '0.7.0';
    WebPhone.uuid = utils_1.uuid;
    WebPhone.delay = utils_1.delay;
    WebPhone.extend = utils_1.extend;
    return WebPhone;
}());
exports.default = WebPhone;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var audioHelper_1 = __webpack_require__(5);
var session_1 = __webpack_require__(6);
var sipTransportConstructor_1 = __webpack_require__(9);
exports.patchUserAgent = function (userAgent, sipInfo, options, id) {
    userAgent.defaultHeaders = ['P-rc-endpoint-id: ' + id, 'Client-id:' + options.appKey];
    userAgent.media = {};
    userAgent.enableQos = options.enableQos;
    userAgent.qosCollectInterval = options.qosCollectInterval || 5000;
    if (options.media && (options.media.remote && options.media.local)) {
        userAgent.media.remote = options.media.remote;
        userAgent.media.local = options.media.local;
    }
    else
        userAgent.media = null;
    userAgent.sipInfo = sipInfo;
    userAgent.__invite = userAgent.invite;
    userAgent.invite = invite.bind(userAgent);
    userAgent.__register = userAgent.register;
    userAgent.register = register.bind(userAgent);
    userAgent.__unregister = userAgent.unregister;
    userAgent.unregister = unregister.bind(userAgent);
    userAgent.audioHelper = new audioHelper_1.AudioHelper(options.audioHelper);
    userAgent.__transportConstructor = userAgent.configuration.transportConstructor;
    userAgent.configuration.transportConstructor = sipTransportConstructor_1.TransportConstructorWrapper(userAgent.__transportConstructor, options);
    userAgent.onSession = options.onSession || null;
    userAgent.createRcMessage = createRcMessage;
    userAgent.sendMessage = sendMessage;
    userAgent.__onTransportConnected = userAgent.onTransportConnected;
    userAgent.onTransportConnected = onTransportConnected.bind(userAgent);
    userAgent.on('invite', function (session) {
        userAgent.audioHelper.playIncoming(true);
        session_1.patchSession(session);
        session_1.patchIncomingSession(session);
        session._sendReceiveConfirmPromise = session
            .sendReceiveConfirm()
            .then(function () {
            session.logger.log('sendReceiveConfirm success');
        })
            .catch(function (error) {
            session.logger.error('failed to send receive confirmation via SIP MESSAGE due to ' + error);
            throw error;
        });
    });
    userAgent.on('registrationFailed', function (e) {
        // Check the status of message is in sipErrorCodes and disconnecting from server if it so;
        if (!e) {
            return;
        }
        var message = e.data || e;
        if (message && typeof message === 'string' && userAgent.transport.isSipErrorCode(message)) {
            userAgent.transport.onSipErrorCode();
        }
    });
    userAgent.start();
    return userAgent;
};
/*--------------------------------------------------------------------------------------------------------------------*/
function onTransportConnected() {
    if (this.configuration.register) {
        return this.register();
    }
}
/*--------------------------------------------------------------------------------------------------------------------*/
function createRcMessage(options) {
    options.body = options.body || '';
    return ('<Msg>' +
        '<Hdr SID="' +
        options.sid +
        '" Req="' +
        options.request +
        '" From="' +
        options.from +
        '" To="' +
        options.to +
        '" Cmd="' +
        options.reqid +
        '"/> ' +
        '<Bdy Cln="' +
        this.sipInfo.authorizationId +
        '" ' +
        options.body +
        '/>' +
        '</Msg>');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function sendMessage(to, messageData) {
    var userAgent = this;
    var sipOptions = {};
    sipOptions.contentType = 'x-rc/agent';
    sipOptions.extraHeaders = [];
    sipOptions.extraHeaders.push('P-rc-ws: ' + this.contact);
    return new Promise(function (resolve, reject) {
        var message = userAgent.message(to, messageData, sipOptions);
        message.once('accepted', function (response, cause) { return resolve(response); });
        message.once('failed', function (response, cause) { return reject(new Error(cause)); });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function register(options) {
    if (options === void 0) { options = {}; }
    return this.__register.call(this, __assign({}, options, { extraHeaders: (options.extraHeaders || []).concat(this.defaultHeaders) }));
}
/*--------------------------------------------------------------------------------------------------------------------*/
function unregister(options) {
    if (options === void 0) { options = {}; }
    return this.__unregister.call(this, __assign({}, options, { extraHeaders: (options.extraHeaders || []).concat(this.defaultHeaders) }));
}
function invite(number, options) {
    if (options === void 0) { options = {}; }
    options.extraHeaders = (options.extraHeaders || []).concat(this.defaultHeaders);
    options.extraHeaders.push('P-Asserted-Identity: sip:' + (options.fromNumber || this.sipInfo.username) + '@' + this.sipInfo.domain //FIXME Phone Number
    );
    //FIXME Backend should know it already
    if (options.homeCountryId) {
        options.extraHeaders.push('P-rc-country-id: ' + options.homeCountryId);
    }
    options.RTCConstraints = options.RTCConstraints || {
        optional: [{ DtlsSrtpKeyAgreement: 'true' }]
    };
    console.log(options);
    this.audioHelper.playOutgoing(true);
    return session_1.patchSession(this.__invite(number, options));
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AudioHelper = /** @class */ (function () {
    function AudioHelper(options) {
        if (options === void 0) { options = {}; }
        this._enabled = !!options.enabled;
        this.loadAudio(options);
    }
    AudioHelper.prototype._playSound = function (url, val, volume) {
        if (!this._enabled || !url)
            return this;
        if (!this._audio[url]) {
            if (val) {
                this._audio[url] = new Audio();
                this._audio[url].src = url;
                this._audio[url].loop = true;
                this._audio[url].volume = volume;
                this._audio[url].playPromise = this._audio[url].play();
            }
        }
        else {
            if (val) {
                this._audio[url].currentTime = 0;
                this._audio[url].playPromise = this._audio[url].play();
            }
            else {
                var audio = this._audio[url];
                if (audio.playPromise !== undefined) {
                    audio.playPromise.then(function () {
                        audio.pause();
                    });
                }
            }
        }
        return this;
    };
    AudioHelper.prototype.loadAudio = function (options) {
        this._incoming = options.incoming;
        this._outgoing = options.outgoing;
        this._audio = {};
    };
    AudioHelper.prototype.setVolume = function (volume) {
        if (volume < 0) {
            volume = 0;
        }
        if (volume > 1) {
            volume = 1;
        }
        this.volume = volume;
        for (var url in this._audio) {
            if (this._audio.hasOwnProperty(url)) {
                this._audio[url].volume = volume;
            }
        }
    };
    AudioHelper.prototype.playIncoming = function (val) {
        return this._playSound(this._incoming, val, this.volume || 0.5);
    };
    AudioHelper.prototype.playOutgoing = function (val) {
        return this._playSound(this._outgoing, val, this.volume || 1);
    };
    return AudioHelper;
}());
exports.AudioHelper = AudioHelper;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sip_js_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(1);
var qos_1 = __webpack_require__(7);
var utils_1 = __webpack_require__(2);
exports.patchSession = function (session) {
    if (session.__patched)
        return session;
    session.__patched = true;
    session.__sendRequest = session.sendRequest;
    session.__receiveRequest = session.receiveRequest;
    session.__accept = session.accept;
    session.__hold = session.hold;
    session.__unhold = session.unhold;
    session.__dtmf = session.dtmf;
    session.__reinvite = session.reinvite;
    session.sendRequest = sendRequest.bind(session);
    session.receiveRequest = receiveRequest.bind(session);
    session.accept = accept.bind(session);
    session.hold = hold.bind(session);
    session.unhold = unhold.bind(session);
    session.dtmf = dtmf.bind(session);
    session.reinvite = reinvite.bind(session);
    session.warmTransfer = warmTransfer.bind(session);
    session.blindTransfer = blindTransfer.bind(session);
    session.transfer = transfer.bind(session);
    session.park = park.bind(session);
    session.forward = forward.bind(session);
    session.startRecord = startRecord.bind(session);
    session.stopRecord = stopRecord.bind(session);
    session.flip = flip.bind(session);
    session.mute = mute.bind(session);
    session.unmute = unmute.bind(session);
    session.onLocalHold = onLocalHold.bind(session);
    session.media = session.ua.media; //TODO Remove
    session.addTrack = addTrack.bind(session);
    session.on('replaced', exports.patchSession);
    // Audio
    session.on('progress', function (incomingResponse) {
        stopPlaying();
        if (incomingResponse.statusCode === 183) {
            session.createDialog(incomingResponse, 'UAC');
            session.hasAnswer = true;
            session.status = sip_js_1.Session.C.STATUS_EARLY_MEDIA;
            session.sessionDescriptionHandler.setDescription(incomingResponse.body).catch(function (exception) {
                session.logger.warn(exception);
                session.failed(incomingResponse, sip_js_1.C.causes.BAD_MEDIA_DESCRIPTION);
                session.terminate({
                    status_code: 488,
                    reason_phrase: 'Bad Media Description'
                });
            });
        }
    });
    if (session.media)
        session.on('trackAdded', addTrack);
    var stopPlaying = function () {
        session.ua.audioHelper.playOutgoing(false);
        session.ua.audioHelper.playIncoming(false);
        session.removeListener('accepted', stopPlaying);
        session.removeListener('rejected', stopPlaying);
        session.removeListener('bye', stopPlaying);
        session.removeListener('terminated', stopPlaying);
        session.removeListener('cancel', stopPlaying);
        session.removeListener('failed', stopPlaying);
        session.removeListener('replaced', stopPlaying);
    };
    session.on('accepted', stopPlaying);
    session.on('rejected', stopPlaying);
    session.on('bye', stopPlaying);
    session.on('terminated', stopPlaying);
    session.on('cancel', stopPlaying);
    session.on('failed', stopPlaying);
    session.on('replaced', stopPlaying);
    if (session.ua.enableQos) {
        session.on('SessionDescriptionHandler-created', function () {
            session.logger.log('SessionDescriptionHandler Created');
            qos_1.startQosStatsCollection(session);
        });
    }
    if (session.ua.onSession)
        session.ua.onSession(session);
    return session;
};
/*--------------------------------------------------------------------------------------------------------------------*/
exports.patchIncomingSession = function (session) {
    try {
        parseRcHeader(session);
    }
    catch (e) {
        session.logger.error("Can't parse RC headers from invite request due to " + e);
    }
    session.canUseRCMCallControl = canUseRCMCallControl;
    session.createSessionMessage = createSessionMessage;
    session.sendSessionMessage = sendSessionMessage;
    session.sendReceiveConfirm = sendReceiveConfirm;
    session.ignore = ignore;
    session.toVoicemail = toVoicemail;
    session.replyWithMessage = replyWithMessage;
};
/*--------------------------------------------------------------------------------------------------------------------*/
var parseRcHeader = function (session) {
    var prc = session.request.headers['P-Rc'];
    if (prc && prc.length) {
        var rawInviteMsg = prc[0].raw;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(rawInviteMsg, 'text/xml');
        var hdrNode = xmlDoc.getElementsByTagName('Hdr')[0];
        var bdyNode = xmlDoc.getElementsByTagName('Bdy')[0];
        if (hdrNode) {
            session.rcHeaders = {
                sid: hdrNode.getAttribute('SID'),
                request: hdrNode.getAttribute('Req'),
                from: hdrNode.getAttribute('From'),
                to: hdrNode.getAttribute('To')
            };
        }
        if (bdyNode) {
            utils_1.extend(session.rcHeaders, {
                srvLvl: bdyNode.getAttribute('SrvLvl'),
                srvLvlExt: bdyNode.getAttribute('SrvLvlExt'),
                toNm: bdyNode.getAttribute('ToNm')
            });
        }
    }
};
/*--------------------------------------------------------------------------------------------------------------------*/
function canUseRCMCallControl() {
    return !!this.rcHeaders;
}
/*--------------------------------------------------------------------------------------------------------------------*/
function createSessionMessage(options) {
    if (!this.rcHeaders) {
        return undefined;
    }
    utils_1.extend(options, {
        sid: this.rcHeaders.sid,
        request: this.rcHeaders.request,
        from: this.rcHeaders.to,
        to: this.rcHeaders.from
    });
    return this.ua.createRcMessage(options);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function ignore() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, this._sendReceiveConfirmPromise.then(function () {
                    return _this.sendSessionMessage(constants_1.messages.ignore);
                })];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function sendSessionMessage(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!this.rcHeaders) {
                throw new Error("Can't send SIP MESSAGE related to session: no RC headers available");
            }
            return [2 /*return*/, this.ua.sendMessage(this.rcHeaders.from, this.createSessionMessage(options))];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function sendReceiveConfirm() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.sendSessionMessage(constants_1.messages.receiveConfirm)];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function toVoicemail() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, this._sendReceiveConfirmPromise.then(function () {
                    return _this.sendSessionMessage(constants_1.messages.toVoicemail);
                })];
        });
    });
}
function replyWithMessage(replyOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var body;
        var _this = this;
        return __generator(this, function (_a) {
            body = 'RepTp="' + replyOptions.replyType + '"';
            if (replyOptions.replyType === 0) {
                body += ' Bdy="' + replyOptions.replyText + '"';
            }
            else if (replyOptions.replyType === 1) {
                body += ' Vl="' + replyOptions.timeValue + '"';
                body += ' Units="' + replyOptions.timeUnits + '"';
                body += ' Dir="' + replyOptions.callbackDirection + '"';
            }
            return [2 /*return*/, this._sendReceiveConfirmPromise.then(function () {
                    return _this.sendSessionMessage({
                        reqid: constants_1.messages.replyWithMessage.reqid,
                        body: body
                    });
                })];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function sendReceive(session, command, options) {
    return __awaiter(this, void 0, void 0, function () {
        var cseq;
        return __generator(this, function (_a) {
            options = options || {};
            utils_1.extend(command, options);
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var extraHeaders = (options.extraHeaders || [])
                        .concat(session.ua.defaultHeaders)
                        .concat(['Content-Type: application/json;charset=utf-8']);
                    session.sendRequest(sip_js_1.C.INFO, {
                        body: JSON.stringify({
                            request: command
                        }),
                        extraHeaders: extraHeaders,
                        receiveResponse: function (response) {
                            var timeout = null;
                            if (response.statusCode === 200) {
                                cseq = response.cseq;
                                var onInfo_1 = function (request) {
                                    if (response.cseq !== cseq)
                                        return;
                                    var body = (request && request.body) || '{}';
                                    var obj;
                                    try {
                                        obj = JSON.parse(body);
                                    }
                                    catch (e) {
                                        obj = {};
                                    }
                                    if (obj.response && obj.response.command === command.command) {
                                        if (obj.response.result) {
                                            if (obj.response.result.code.toString() === '0') {
                                                return resolve(obj.response.result);
                                            }
                                            else {
                                                return reject(obj.response.result);
                                            }
                                        }
                                    }
                                    timeout && clearTimeout(timeout);
                                    session.removeListener('RC_SIP_INFO', onInfo_1);
                                    resolve(null); //FIXME What to resolve
                                };
                                timeout = setTimeout(function () {
                                    reject(new Error('Timeout: no reply'));
                                    session.removeListener('RC_SIP_INFO', onInfo_1);
                                }, constants_1.responseTimeout);
                                session.on('RC_SIP_INFO', onInfo_1);
                            }
                            else {
                                reject(new Error('The INFO response status code is: ' + response.statusCode + ' (waiting for 200)'));
                            }
                        }
                    });
                })];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function sendRequest(type, config) {
    if (type === sip_js_1.C.PRACK) {
        // type = C.ACK;
        return this;
    }
    return this.__sendRequest(type, config);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function setRecord(session, flag) {
    return __awaiter(this, void 0, void 0, function () {
        var message, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = !!flag ? constants_1.messages.startRecord : constants_1.messages.stopRecord;
                    if (!((session.__onRecord && !flag) || (!session.__onRecord && flag))) return [3 /*break*/, 2];
                    return [4 /*yield*/, sendReceive(session, message)];
                case 1:
                    data = _a.sent();
                    session.__onRecord = !!flag;
                    return [2 /*return*/, data];
                case 2: return [2 /*return*/];
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function setLocalHold(session, flag) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!flag) return [3 /*break*/, 2];
                    return [4 /*yield*/, session.__hold()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, session.__unhold()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function receiveRequest(request) {
    switch (request.method) {
        case sip_js_1.C.INFO:
            this.emit('RC_SIP_INFO', request);
            //SIP.js does not support application/json content type, so we monkey override its behaviour in this case
            if (this.status === sip_js_1.Session.C.STATUS_CONFIRMED || this.status === sip_js_1.Session.C.STATUS_WAITING_FOR_ACK) {
                var contentType = request.getHeader('content-type');
                if (contentType.match(/^application\/json/i)) {
                    request.reply(200);
                    return this;
                }
            }
            break;
    }
    return this.__receiveRequest.apply(this, arguments);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function accept(options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    options = options || {};
    options.extraHeaders = (options.extraHeaders || []).concat(this.ua.defaultHeaders);
    options.RTCConstraints = options.RTCConstraints || {
        optional: [{ DtlsSrtpKeyAgreement: 'true' }]
    };
    return new Promise(function (resolve, reject) {
        var onAnswered = function () {
            resolve(_this);
            _this.removeListener('failed', onFail);
        };
        var onFail = function (e) {
            reject(e);
            _this.removeListener('accepted', onAnswered);
        };
        //TODO More events?
        _this.once('accepted', onAnswered);
        _this.once('failed', onFail);
        _this.__accept(options);
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function dtmf(dtmf, duration) {
    if (duration === void 0) { duration = 1000; }
    duration = parseInt(duration.toString());
    var pc = this.sessionDescriptionHandler.peerConnection;
    var senders = pc.getSenders();
    var audioSender = senders.find(function (sender) {
        return sender.track && sender.track.kind === 'audio';
    });
    var dtmfSender = audioSender.dtmf;
    if (dtmfSender !== undefined && dtmfSender) {
        return dtmfSender.insertDTMF(dtmf, duration);
    }
    var sender = dtmfSender && !dtmfSender.canInsertDTMF ? "can't insert DTMF" : 'Unknown';
    throw new Error('Send DTMF failed: ' + (!dtmfSender ? 'no sender' : sender));
}
/*--------------------------------------------------------------------------------------------------------------------*/
function hold() {
    return setLocalHold(this, true);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function unhold() {
    return setLocalHold(this, false);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function blindTransfer(target, options) {
    if (options === void 0) { options = {}; }
    return Promise.resolve(this.refer(target, options));
}
/*--------------------------------------------------------------------------------------------------------------------*/
function warmTransfer(target, transferOptions) {
    if (transferOptions === void 0) { transferOptions = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var referTo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (this.local_hold ? Promise.resolve(null) : this.hold())];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, utils_1.delay(300)];
                case 2:
                    _a.sent();
                    referTo = '<' +
                        target.dialog.remoteTarget.toString() +
                        '?Replaces=' +
                        target.dialog.id.callId +
                        '%3Bto-tag%3D' +
                        target.dialog.id.remoteTag +
                        '%3Bfrom-tag%3D' +
                        target.dialog.id.localTag +
                        '>';
                    transferOptions.extraHeaders = (transferOptions.extraHeaders || []).concat(this.ua.defaultHeaders);
                    return [2 /*return*/, this.refer(referTo, transferOptions)];
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function transfer(target, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (this.local_hold ? Promise.resolve(null) : this.hold())];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, utils_1.delay(300)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, this.blindTransfer(target, options)];
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function forward(target, acceptOptions, transferOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var interval;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    interval = null;
                    return [4 /*yield*/, this.accept(acceptOptions)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new Promise(function (resolve) {
                            interval = setInterval(function () {
                                if (_this.status === sip_js_1.Session.C.STATUS_CONFIRMED) {
                                    clearInterval(interval);
                                    _this.mute();
                                    setTimeout(function () {
                                        resolve(_this.transfer(target, transferOptions));
                                    }, 700);
                                }
                            }, 50);
                        })];
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function startRecord() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, setRecord(this, true)];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function stopRecord() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, setRecord(this, false)];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function flip(target) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sendReceive(this, constants_1.messages.flip, { target: target })];
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
function park() {
    return sendReceive(this, constants_1.messages.park);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function reinvite(options, modifier) {
    if (options === void 0) { options = {}; }
    if (modifier === void 0) { modifier = null; }
    options.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions || {};
    return this.__reinvite(options, modifier);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function toggleMute(session, mute) {
    var pc = session.sessionDescriptionHandler.peerConnection;
    if (pc.getSenders) {
        pc.getSenders().forEach(function (sender) {
            if (sender.track) {
                sender.track.enabled = !mute;
            }
        });
    }
}
/*--------------------------------------------------------------------------------------------------------------------*/
function mute(silent) {
    if (this.status !== sip_js_1.Session.C.STATUS_CONFIRMED) {
        this.logger.warn('An acitve call is required to mute audio');
        return;
    }
    this.logger.log('Muting Audio');
    if (!silent) {
        this.emit('muted', this);
    }
    return toggleMute(this, true);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function unmute(silent) {
    if (this.status !== sip_js_1.Session.C.STATUS_CONFIRMED) {
        this.logger.warn('An active call is required to unmute audio');
        return;
    }
    this.logger.log('Unmuting Audio');
    if (!silent) {
        this.emit('unmuted', this);
    }
    return toggleMute(this, false);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function onLocalHold() {
    return this.local_hold;
}
/*--------------------------------------------------------------------------------------------------------------------*/
function addTrack(remoteAudioEle, localAudioEle) {
    var _this = this;
    var pc = this.sessionDescriptionHandler.peerConnection;
    var remoteAudio;
    var localAudio;
    if (remoteAudioEle && localAudioEle) {
        remoteAudio = remoteAudioEle;
        localAudio = localAudioEle;
    }
    else if (this.media) {
        remoteAudio = this.media.remote;
        localAudio = this.media.local;
    }
    else {
        throw new Error('HTML Media Element not Defined');
    }
    var remoteStream = new MediaStream();
    if (pc.getReceivers) {
        pc.getReceivers().forEach(function (receiver) {
            var rtrack = receiver.track;
            if (rtrack) {
                remoteStream.addTrack(rtrack);
            }
        });
    }
    else {
        remoteStream = pc.getRemoteStreams()[0];
    }
    remoteAudio.srcObject = remoteStream;
    remoteAudio.play().catch(function () {
        _this.logger.log('local play was rejected');
    });
    var localStream = new MediaStream();
    if (pc.getSenders) {
        pc.getSenders().forEach(function (sender) {
            var strack = sender.track;
            if (strack && strack.kind === 'audio') {
                localStream.addTrack(strack);
            }
        });
    }
    else {
        localStream = pc.getLocalStreams()[0];
    }
    localAudio.srcObject = localStream;
    localAudio.play().catch(function () {
        _this.logger.log('local play was rejected');
    });
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getstats_1 = __importDefault(__webpack_require__(8));
var formatFloat = function (input) { return parseFloat(input.toString()).toFixed(2); };
exports.startQosStatsCollection = function (session) {
    var qosStatsObj = getQoSStatsTemplate();
    qosStatsObj.callID = session.request.callId || '';
    qosStatsObj.fromTag = session.request.fromTag || '';
    qosStatsObj.toTag = session.request.toTag || '';
    qosStatsObj.localID = session.request.headers.From[0].raw || session.request.headers.From[0];
    qosStatsObj.remoteID = session.request.headers.To[0].raw || session.request.headers.To[0];
    qosStatsObj.origID = session.request.headers.From[0].raw || session.request.headers.From[0];
    var previousGetStatsResult;
    if (!getstats_1.default)
        throw new Error('getStats module was not provided!');
    getstats_1.default(session.sessionDescriptionHandler.peerConnection, function (getStatsResult) {
        previousGetStatsResult = getStatsResult;
        qosStatsObj.status = true;
        var network = getNetworkType(previousGetStatsResult.connectionType);
        qosStatsObj.localAddr = previousGetStatsResult.connectionType.local.ipAddress[0];
        qosStatsObj.remoteAddr = previousGetStatsResult.connectionType.remote.ipAddress[0];
        previousGetStatsResult.results.forEach(function (item) {
            if (item.type === 'ssrc' && item.transportId === 'Channel-audio-1' && item.id.includes('recv')) {
                qosStatsObj.jitterBufferDiscardRate = item.googSecondaryDiscardedRate || 0;
                qosStatsObj.packetLost = item.packetsLost;
                qosStatsObj.packetsReceived = item.packetsReceived;
                qosStatsObj.totalSumJitter += parseFloat(item.googJitterBufferMs);
                qosStatsObj.totalIntervalCount += 1;
                qosStatsObj.JBM = Math.max(qosStatsObj.JBM, parseFloat(item.googJitterBufferMs));
                qosStatsObj.netType = addToMap(qosStatsObj.netType, network);
            }
        });
    }, session.ua.qosCollectInterval);
    session.on('terminated', function () {
        previousGetStatsResult && previousGetStatsResult.nomore();
        publishQosStats(session, qosStatsObj);
    });
};
var publishQosStats = function (session, qosStatsObj, options) {
    if (options === void 0) { options = {}; }
    options = options || {};
    var effectiveType = navigator['connection'].effectiveType || '';
    var networkType = calculateNetworkUsage(qosStatsObj) || '';
    var targetUrl = options.targetUrl || 'rtcpxr@rtcpxr.ringcentral.com:5060';
    var event = options.event || 'vq-rtcpxr';
    options.expires = 60;
    options.contentType = 'application/vq-rtcpxr';
    options.extraHeaders = options.extraHeaders || [];
    options.extraHeaders.push('p-rc-client-info:' + 'cpuRC=0:0;cpuOS=0:0;netType=' + networkType + ';ram=0:0;effectiveType=' + effectiveType);
    var calculatedStatsObj = calculateStats(qosStatsObj);
    var body = createPublishBody(calculatedStatsObj);
    var pub = session.ua.publish(targetUrl, event, body, options);
    qosStatsObj.status = false;
    pub.close();
    session.emit('qos-published', body);
};
var calculateNetworkUsage = function (qosStatsObj) {
    var networkType = [];
    for (var _i = 0, _a = Object.entries(qosStatsObj.netType); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        networkType.push(key + ':' + formatFloat((value * 100) / qosStatsObj.totalIntervalCount));
    }
    return networkType.join();
};
var calculateStats = function (qosStatsObj) {
    var rawNLR = (qosStatsObj.packetLost * 100) / (qosStatsObj.packetsReceived + qosStatsObj.packetLost) || 0;
    var rawJBN = qosStatsObj.totalIntervalCount > 0 ? qosStatsObj.totalSumJitter / qosStatsObj.totalIntervalCount : 0;
    return __assign({}, qosStatsObj, { NLR: formatFloat(rawNLR), JBN: formatFloat(rawJBN), JDR: formatFloat(qosStatsObj.jitterBufferDiscardRate), MOSLQ: 0 //MOS Score
     });
};
var createPublishBody = function (calculatedStatsObj) {
    var NLR = calculatedStatsObj.NLR || 0;
    var JBM = calculatedStatsObj.JBM || 0;
    var JBN = calculatedStatsObj.JBN || 0;
    var JDR = calculatedStatsObj.JDR || 0;
    var MOSLQ = calculatedStatsObj.MOSLQ || 0;
    var callID = calculatedStatsObj.callID || '';
    var fromTag = calculatedStatsObj.fromTag || '';
    var toTag = calculatedStatsObj.toTag || '';
    var localId = calculatedStatsObj.localID || '';
    var remoteId = calculatedStatsObj.remoteID || '';
    var localAddr = calculatedStatsObj.localAddr || '';
    var remoteAddr = calculatedStatsObj.remoteAddr || '';
    return ("VQSessionReport: CallTerm\r\n" +
        ("CallID: " + callID + "\r\n") +
        ("LocalID: " + localId + "\r\n") +
        ("RemoteID: " + remoteId + "\r\n") +
        ("OrigID: " + localId + "\r\n") +
        ("LocalAddr: IP=" + localAddr + " SSRC=0x00000000\r\n") +
        ("RemoteAddr: IP=" + remoteAddr + " SSRC=0x00000000\r\n") +
        "LocalMetrics:\r\n" +
        "Timestamps: START=0 STOP=0\r\n" +
        "SessionDesc: PT=0 PD=opus SR=0 FD=0 FPP=0 PPS=0 PLC=0 SSUP=on\r\n" +
        ("JitterBuffer: JBA=0 JBR=0 JBN=" + JBN + " JBM=" + JBM + " JBX=0\r\n") +
        ("PacketLoss: NLR=" + NLR + " JDR=" + JDR + "\r\n") +
        "BurstGapLoss: BLD=0 BD=0 GLD=0 GD=0 GMIN=0\r\n" +
        "Delay: RTD=0 ESD=0 SOWD=0 IAJ=0\r\n" +
        ("QualityEst: MOSLQ=" + MOSLQ + " MOSCQ=0.0\r\n") +
        ("DialogID: " + callID + ";to-tag=" + toTag + ";from-tag=" + fromTag));
};
var getQoSStatsTemplate = function () { return ({
    localAddr: '',
    remoteAddr: '',
    callID: '',
    localID: '',
    remoteID: '',
    origID: '',
    fromTag: '',
    toTag: '',
    timestamp: {
        start: '',
        stop: ''
    },
    netType: {},
    packetLost: 0,
    packetsReceived: 0,
    jitterBufferNominal: 0,
    jitterBufferMax: 0,
    jitterBufferDiscardRate: 0,
    totalSumJitter: 0,
    totalIntervalCount: 0,
    NLR: '',
    JBM: 0,
    JBN: '',
    JDR: '',
    MOSLQ: 0,
    status: false
}); };
var addToMap = function (map, key) {
    var _a;
    if (map === void 0) { map = {}; }
    return (__assign({}, map, (_a = {}, _a[key] = (key in map ? parseInt(map[key]) : 0) + 1, _a)));
};
var networkTypeMap;
(function (networkTypeMap) {
    networkTypeMap["bluetooth"] = "Bluetooth";
    networkTypeMap["cellular"] = "Cellulars";
    networkTypeMap["ethernet"] = "Ethernet";
    networkTypeMap["wifi"] = "WiFi";
    networkTypeMap["wimax"] = "WiMax";
    networkTypeMap["2g"] = "2G";
    networkTypeMap["3g"] = "3G";
    networkTypeMap["4g"] = "4G";
})(networkTypeMap || (networkTypeMap = {}));
//TODO: find relaible way to find network type , use navigator.connection.type?
var getNetworkType = function (connectionType) {
    var sysNetwork = connectionType.systemNetworkType || 'unknown';
    var localNetwork = connectionType.local.networkType || ['unknown'];
    var networkType = !sysNetwork || sysNetwork === 'unknown' ? localNetwork[0] : sysNetwork;
    return networkType in networkTypeMap ? networkTypeMap[networkType] : networkType;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportConstructorWrapper = function (SipTransportConstructor, webPhoneOptions) {
    return function (logger, options) {
        var transport = new SipTransportConstructor(logger, options);
        transport.nextReconnectInterval = 0;
        transport.sipErrorCodes = webPhoneOptions.sipErrorCodes;
        transport.switchBackInterval = webPhoneOptions.switchBackInterval;
        transport.computeRandomTimeout = computeRandomTimeout;
        transport.reconnect = reconnect.bind(transport);
        transport.isSipErrorCode = isSipErrorCode.bind(transport);
        transport.scheduleSwithBackMainProxy = scheduleSwithBackMainProxy.bind(transport);
        transport.onSipErrorCode = onSipErrorCode.bind(transport);
        transport.__isCurrentMainProxy = __isCurrentMainProxy.bind(transport);
        transport.__afterWSConnected = __afterWSConnected.bind(transport);
        transport.__onConnectedToBackup = __onConnectedToBackup.bind(transport);
        transport.__onConnectedToMain = __onConnectedToMain.bind(transport);
        transport.__on_message_received = __on_message_received.bind(transport);
        transport.__on_check_sync_message = __on_check_sync_message.bind(transport);
        transport.on('connected', transport.__afterWSConnected);
        transport.on('message', transport.__on_message_received);
        return transport;
    };
};
var C = {
    // Transport status codes
    STATUS_CONNECTING: 0,
    STATUS_OPEN: 1,
    STATUS_CLOSING: 2,
    STATUS_CLOSED: 3
};
var computeRandomTimeout = function (reconnectionAttempts, randomMinInterval, randomMaxInterval) {
    if (reconnectionAttempts === void 0) { reconnectionAttempts = 1; }
    if (randomMinInterval === void 0) { randomMinInterval = 0; }
    if (randomMaxInterval === void 0) { randomMaxInterval = 0; }
    if (randomMinInterval < 0 || randomMaxInterval < 0 || reconnectionAttempts < 1) {
        throw new Error('Arguments must be positive numbers');
    }
    var randomInterval = Math.floor(Math.random() * Math.abs(randomMaxInterval - randomMinInterval)) + randomMinInterval;
    var retryOffset = ((reconnectionAttempts - 1) * (randomMinInterval + randomMaxInterval)) / 2;
    return randomInterval + retryOffset;
};
function reconnect(forceReconnectToMain) {
    return __awaiter(this, void 0, void 0, function () {
        var randomMinInterval, randomMaxInterval;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (this.reconnectionAttempts > 0) {
                        this.logger.log('Reconnection attempt ' + this.reconnectionAttempts + ' failed');
                    }
                    if (!forceReconnectToMain) return [3 /*break*/, 3];
                    this.logger.log('forcing connect to main WS server');
                    this.server = this.getNextWsServer(true);
                    this.reconnectionAttempts = 0;
                    return [4 /*yield*/, this.disconnect({ force: true })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.connect()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (this.noAvailableServers()) {
                        this.logger.warn('no available ws servers left - going to closed state');
                        this.status = C.STATUS_CLOSED;
                        this.emit('closed');
                        this.resetServerErrorStatus();
                        return [2 /*return*/];
                    }
                    if (!this.isConnected()) return [3 /*break*/, 5];
                    this.logger.warn('attempted to reconnect while connected - forcing disconnect');
                    return [4 /*yield*/, this.disconnect({ force: true })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    randomMinInterval = (this.configuration.reconnectionTimeout - 2) * 1000;
                    randomMaxInterval = (this.configuration.reconnectionTimeout + 2) * 1000;
                    this.reconnectionAttempts += 1;
                    this.nextReconnectInterval = this.computeRandomTimeout(this.reconnectionAttempts, randomMinInterval, randomMaxInterval);
                    if (!(this.reconnectionAttempts > this.configuration.maxReconnectionAttempts)) return [3 /*break*/, 7];
                    this.logger.warn('maximum reconnection attempts for WebSocket ' + this.server.wsUri);
                    this.logger.log('transport ' + this.server.wsUri + " failed | connection state set to 'error'");
                    this.server.isError = true;
                    this.emit('transportError');
                    this.server = this.getNextWsServer();
                    this.reconnectionAttempts = 0;
                    return [4 /*yield*/, this.reconnect()];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    this.logger.log('trying to reconnect to WebSocket ' +
                        this.server.wsUri +
                        ' (reconnection attempt ' +
                        this.reconnectionAttempts +
                        ')');
                    this.reconnectTimer = setTimeout(function () {
                        _this.connect();
                        _this.reconnectTimer = undefined;
                    }, this.nextReconnectInterval);
                    this.logger.warn('next reconnection attempt in:' + Math.round(this.nextReconnectInterval / 1000) + ' seconds.');
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isSipErrorCode(message) {
    var statusLine = message.substring(0, message.indexOf('\r\n'));
    var statusCode = statusLine.split(' ')[1];
    return statusCode && this.sipErrorCodes && this.sipErrorCodes.length && this.sipErrorCodes.includes(statusCode);
}
function scheduleSwithBackMainProxy() {
    var _this = this;
    var randomInterval = 15 * 60 * 1000; //15 min
    var switchBackInterval = this.switchBackInterval ? this.switchBackInterval * 1000 : null;
    // Add random time to expand clients connections in time;
    if (switchBackInterval) {
        switchBackInterval += this.computeRandomTimeout(1, 0, randomInterval);
        this.logger.warn('Try to switch back to main proxy after ' + Math.round(switchBackInterval / 1000 / 60) + ' min');
        var mainProxy_1 = this.configuration.wsServers[0];
        mainProxy_1.switchBackTimer = setTimeout(function () {
            mainProxy_1.isError = false;
            mainProxy_1.switchBackTimer = null;
            _this.emit('switchBackProxy');
        }, switchBackInterval);
    }
    else {
        this.logger.warn('switchBackInterval is not set. Will be switched with next provision update ');
    }
}
function onSipErrorCode() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.logger.warn('Error received from the server. Disconnecting from the proxy');
                    this.server.isError = true;
                    this.emit('transportError');
                    this.server = this.getNextWsServer();
                    this.reconnectionAttempts = 0;
                    return [4 /*yield*/, this.disconnect({ force: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, this.connect()];
            }
        });
    });
}
function __isCurrentMainProxy() {
    return this.server === this.configuration.wsServers[0];
}
function __onConnectedToMain() {
    var mainProxy = this.configuration.wsServers[0];
    if (mainProxy.switchBackTimer) {
        clearTimeout(mainProxy.switchBackTimer);
        mainProxy.switchBackTimer = null;
    }
}
function __onConnectedToBackup() {
    var mainProxy = this.configuration.wsServers[0];
    if (!mainProxy.switchBackTimer) {
        this.scheduleSwithBackMainProxy();
    }
}
function __afterWSConnected() {
    this.__isCurrentMainProxy() ? this.__onConnectedToMain() : this.__onConnectedToBackup();
}
function __on_message_received(message) {
    if (message.method === 'NOTIFY') {
        this.__on_check_sync_message(message.data);
    }
}
function __on_check_sync_message(data) {
    //If check-sync message arrived, notify client to update provision info;
    if (data.match(/Event:\s+check-sync/i)) {
        this.emit('provisionUpdate');
    }
}


/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = {"name":"ringcentral-web-phone","version":"0.7.0","scripts":{"test":"npm run test:karma && npm run test:e2e","test:watch":"karma start","test:karma":"npm run test:watch -- --single-run","test:coverage":"cat .coverage/lcov.info | coveralls -v","test:e2e":"jest --runInBand","build":"npm run build:tsc && npm run build:webpack","build:tsc":"tsc","build:webpack":"cross-env NODE_ENV=production webpack --config webpack.config.js --progress --color","start":"webpack-dev-server --config webpack.config.js --progress --color","server":"http-server --port ${PORT:-8080}","watch":"npm-run-all --print-label --parallel \"build:** -- --watch\"","lint":"eslint --cache --cache-location node_modules/.cache/eslint --fix","lint:all":"npm run lint \"src/**/*.ts\" \"demo/**/*.js\"","lint:staged":"lint-staged"},"dependencies":{"getstats":"1.2.0","sip.js":"0.13.5"},"devDependencies":{"@types/expect-puppeteer":"3.3.1","@types/jest":"24.0.11","@types/jest-environment-puppeteer":"4.0.0","@types/karma":"3.0.2","@types/node":"11.13.6","bootstrap":"3.4.1","cache-loader":"3.0.0","copy-webpack-plugin":"5.0.2","coveralls":"3.0.3","cross-env":"5.2.0","dotenv":"7.0.0","eslint":"5.16.0","eslint-config-ringcentral-typescript":"0.1.0","html-webpack-plugin":"3.2.0","http-server":"0.11.1","husky":"1.3.1","istanbul-instrumenter-loader":"3.0.1","jasmine-core":"3.4.0","jest":"24.7.1","jest-puppeteer":"4.1.1","jquery":"3.4.0","karma":"4.1.0","karma-chrome-launcher":"2.2.0","karma-coverage-istanbul-reporter":"2.0.5","karma-env":"0.1.0","karma-jasmine":"2.0.1","karma-mocha-reporter":"2.2.5","karma-sourcemap-loader":"0.3.7","karma-webpack":"3.0.5","lint-staged":"8.1.5","npm-run-all":"4.1.5","puppeteer":"1.14.0","ringcentral":"3.2.1","ts-jest":"24.0.2","ts-loader":"5.3.3","typescript":"3.4.4","uglifyjs-webpack-plugin":"2.1.2","webpack":"4.30.0","webpack-cli":"3.3.1","webpack-dev-server":"3.3.1"},"preferGlobal":false,"private":false,"main":"./lib/index.js","types":"./lib/index.d.ts","author":{"name":"RingCentral, Inc.","email":"devsupport@ringcentral.com"},"contributors":[{"name":"Kirill Konshin"}],"repository":{"type":"git","url":"git://github.com/ringcentral/ringcentral-web-phone.git"},"bugs":{"url":"https://github.com/ringcentral/ringcentral-web-phone/issues"},"homepage":"https://github.com/ringcentral/ringcentral-web-phone","engines":{"node":">=0.10.36"},"license":"MIT"};

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=ringcentral-web-phone.js.map