"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
exports.PanelCtrl = exports.AlertListSoundPanel = void 0;
var lodash_1 = require("lodash");
var runtime_1 = require("@grafana/runtime");
var data_1 = require("@grafana/data");
var alertDef_1 = require("../../../features/alerting/state/alertDef");
var sdk_1 = require("app/plugins/sdk");
var promiseToDigest_1 = require("app/core/utils/promiseToDigest");
var AlertListSoundPanel = /** @class */ (function (_super) {
    __extends(AlertListSoundPanel, _super);
    /** @ngInject */
    function AlertListSoundPanel($scope, $injector) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.showOptions = [
            { text: 'Current state', value: 'current' },
            { text: 'Recent state changes', value: 'changes' },
        ];
        _this.sortOrderOptions = [
            { text: 'Alphabetical (asc)', value: 1 },
            { text: 'Alphabetical (desc)', value: 2 },
            { text: 'Importance', value: 3 },
            { text: 'Time (asc)', value: 4 },
            { text: 'Time (desc)', value: 5 },
        ];
        _this.soundOptions = [
            { text: 'Cryostat Pressure < 1.8 bar', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryostat-pressure-b1_8.mp3' },
            { text: 'Cryostat Pressure > 2.3 bar', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryostat-pressure-o2_3.mp3' },
            { text: 'Cryostat Pressure > 2.5 bar', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryostat-pressure-o2_5.mp3' },
            { text: 'Cryostat Temperature < 165 K', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryo-temp-b165.mp3' },
            { text: 'Cryostat Temperature High', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryo-temp-high.mp3' },
            { text: 'Cryostat Temperature Low', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryo-temp-low.mp3' },
            { text: 'Cryostat Temperature > 180 K', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-cryo-temp-o180K.mp3' },
            { text: 'Flow', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-flow.mp3' },
            { text: 'Generic Alarm', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3' },
            { text: 'HE Temperature < 160 K', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-HE-temp-b160.mp3' },
            { text: 'HE Temperature > 350 K', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-HE-temp-o350.mp3' },
            { text: 'LN2 High', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-ln2-high.mp3' },
            { text: 'LN2 Low', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-ln2-low.mp3' },
            { text: 'Multiple', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-multiple.mp3' },
            { text: 'Oxygen', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-oxygen.mp3' },
            { text: 'Pending', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-pending.mp3' },
            { text: 'Pressure', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-pressure.mp3' },
            { text: 'Pump Inner Space', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-pump-inner.mp3' },
            { text: 'Pump Pressure inlet', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-pump-pressure-o3.mp3' },
            { text: 'Pump Pressure Outlet', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-pump-pressure-o4.mp3' },
            { text: 'Resolved', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-resolved.mp3' },
            { text: 'Temperature', value: 'public/app/plugins/panel/alertlist-sound/sound/alarm-temp.mp3' },
        ];
        _this.stateFilter = {};
        _this.currentAlerts = [];
        _this.alertHistory = [];
        // Set and populate defaults
        _this.panelDefaults = {
            show: 'current',
            limit: 10,
            stateFilter: [],
            onlyAlertsOnDashboard: false,
            sortOrder: 1,
            dashboardFilter: '',
            nameFilter: '',
            folderId: null,
            sound: false,
            soundFile: 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3'
        };
        _this.onFolderChange = function (folder) {
            _this.panel.folderId = folder.id;
            _this.refresh();
        };
        lodash_1["default"].defaults(_this.panel, _this.panelDefaults);
        _this.events.on(data_1.PanelEvents.editModeInitialized, _this.onInitEditMode.bind(_this));
        _this.events.on(data_1.PanelEvents.refresh, _this.onRefresh.bind(_this));
        _this.templateSrv = _this.$injector.get('templateSrv');
        for (var key in _this.panel.stateFilter) {
            _this.stateFilter[_this.panel.stateFilter[key]] = true;
        }
        window.paths = ['public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3'];
        window.soundFileTemp = ['public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3', 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3'];
        window.isAlerting = false;
        _this.audio = new Audio();
        _this.audio.load();
        _this.lastRefreshAt = Date.now();
        return _this;
    }
    AlertListSoundPanel.prototype.updatesoundFile = function () {
        this.setsoundFile();
        this.playSound();
        this.onRefresh();
    };
    AlertListSoundPanel.prototype.getAlerts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                promiseToDigest_1.promiseToDigest(this.$scope)(runtime_1.getBackendSrv()
                    .get('/api/alerts')
                    .then(function (data) {
                    return data;
                }));
                return [2 /*return*/];
            });
        });
    };
    AlertListSoundPanel.prototype.getPath = function (Alerts, i) {
        var filePath;
        var id = Alerts.id;
        promiseToDigest_1.promiseToDigest(this.$scope)(runtime_1.getBackendSrv()
            .get('/api/alerts/' + id, {}) // on injecte le id a l'url qu'il faut appeler
            .then(function (data) {
            // le tag va etre qqpart ici
            if (!data.Settings.alertRuleTags.path) {
                filePath = 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3';
            }
            else {
                filePath = data.Settings.alertRuleTags.path;
            }
            window.soundFileTemp[i] = filePath;
        }));
        return filePath;
    };
    AlertListSoundPanel.prototype.setsoundFile = function () {
        //window.soundFile += "?id=" + ((Math.random() * 1000) + 1);
        this.audio.src = window.soundFile;
        this.audio.load();
    };
    AlertListSoundPanel.prototype.setsoundFileMultiple = function () {
        this.audio.src = 'public/app/plugins/panel/alertlist-sound/sound/alarm-multiple.mp3';
        this.audio.load();
    };
    AlertListSoundPanel.prototype.playSound = function () {
        var playPromise = this.audio.play();
        playPromise.then(function () { })["catch"](function (error) {
            function checkSuccess() {
                var audioErr = new Audio();
                audioErr.src = 'public/app/plugins/panel/alertlist-sound/sound/alarm-plain.mp3';
                audioErr.load();
                audioErr.play();
            }
            ;
            checkSuccess();
        });
        if (playPromise !== undefined) {
            playPromise.then(function () { })["catch"](function (error) { });
        }
    };
    AlertListSoundPanel.prototype.sortResult = function (alerts) {
        if (this.panel.sortOrder === 3) {
            return lodash_1["default"].sortBy(alerts, function (a) {
                // @ts-ignore
                return alertDef_1["default"].alertStateSortScore[a.state || a.newState];
            });
        }
        else if (this.panel.sortOrder === 4) {
            return lodash_1["default"].sortBy(alerts, function (a) {
                return new Date(a.newStateDate || a.time);
            });
        }
        else if (this.panel.sortOrder === 5) {
            return lodash_1["default"].sortBy(alerts, function (a) {
                return new Date(a.newStateDate || a.time);
            }).reverse();
        }
        var result = lodash_1["default"].sortBy(alerts, function (a) {
            return (a.name || a.alertName).toLowerCase();
        });
        if (this.panel.sortOrder === 2) {
            result.reverse();
        }
        return result;
    };
    AlertListSoundPanel.prototype.updateStateFilter = function () {
        var result = [];
        for (var key in this.stateFilter) {
            if (this.stateFilter[key]) {
                result.push(key);
            }
        }
        this.panel.stateFilter = result;
        this.onRefresh();
    };
    AlertListSoundPanel.prototype.onRefresh = function () {
        var _this = this;
        var getAlertsPromise;
        if (this.panel.show === 'current') {
            getAlertsPromise = this.getCurrentAlertState();
        }
        else if (this.panel.show === 'changes') {
            getAlertsPromise = this.getStateChanges();
        }
        else {
            getAlertsPromise = Promise.resolve();
        }
        if (!window.alerts) {
            runtime_1.getBackendSrv().get('/api/alerts').then(function (data) {
                window.alerts = data;
                getAlertsPromise.then(function () {
                    _this.renderingCompleted();
                    _this.lastRefreshAt = Date.now();
                });
            });
        }
        else {
            getAlertsPromise.then(function () {
                _this.renderingCompleted();
                _this.lastRefreshAt = Date.now();
            });
        }
    };
    AlertListSoundPanel.prototype.getStateChanges = function () {
        var _this = this;
        var params = {
            limit: this.panel.limit,
            type: 'alert',
            newState: this.panel.stateFilter
        };
        if (this.panel.onlyAlertsOnDashboard) {
            params.dashboardId = this.dashboard.id;
        }
        params.from = data_1.dateMath.parse(this.dashboard.time.from).unix() * 1000;
        params.to = data_1.dateMath.parse(this.dashboard.time.to).unix() * 1000;
        return promiseToDigest_1.promiseToDigest(this.$scope)(runtime_1.getBackendSrv()
            .get('/api/annotations', params, "alert-list-get-state-changes-" + this.panel.id)
            .then(function (data) {
            _this.alertHistory = _this.sortResult(lodash_1["default"].map(data, function (al) {
                al.time = _this.dashboard.formatDate(al.time, 'MMM D, YYYY HH:mm:ss');
                al.stateModel = alertDef_1["default"].getStateDisplayModel(al.newState);
                al.info = alertDef_1["default"].getAlertAnnotationInfo(al);
                return al;
            }));
            _this.noAlertsMessage = _this.alertHistory.length === 0 ? 'No alerts in current time range' : '';
            return _this.alertHistory;
        }));
    };
    AlertListSoundPanel.prototype.getCurrentAlertState = function () {
        var _this = this;
        var soundFlag = false;
        var multipleAlert = false;
        var params = {
            state: this.panel.stateFilter
        };
        if (this.panel.nameFilter) {
            params.query = this.templateSrv.replace(this.panel.nameFilter, this.panel.scopedVars);
        }
        if (this.panel.folderId >= 0) {
            params.folderId = this.panel.folderId;
        }
        if (this.panel.dashboardFilter) {
            params.dashboardQuery = this.panel.dashboardFilter;
        }
        if (this.panel.onlyAlertsOnDashboard) {
            params.dashboardId = this.dashboard.id;
        }
        if (this.panel.dashboardTags) {
            params.dashboardTag = this.panel.dashboardTags;
        }
        return promiseToDigest_1.promiseToDigest(this.$scope)(runtime_1.getBackendSrv()
            .get('/api/alerts', params, "alert-list-get-current-alert-state-" + this.panel.id)
            .then(function (data) {
            _this.currentAlerts = _this.sortResult(lodash_1["default"].map(data, function (al) {
                al.stateModel = alertDef_1["default"].getStateDisplayModel(al.state);
                al.newStateDateAgo = data_1.dateTime(al.newStateDate).locale('en').fromNow(true);
                return al;
            }));
            if (_this.currentAlerts.length > _this.panel.limit) {
                _this.currentAlerts = _this.currentAlerts.slice(0, _this.panel.limit);
            }
            _this.noAlertsMessage = _this.currentAlerts.length === 0 ? 'No alerts' : '';
            multipleAlert = false;
            var counter = 0;
            for (var _1 in _this.currentAlerts) {
                var alert = _this.currentAlerts[_1];
                _this.getPath(alert, counter);
                window.paths[_1] = window.soundFileTemp[_1];
                var newStateDate = Date.now();
                if (alert.stateModel.text === 'ALERTING') {
                    window.soundFile = window.paths[_1];
                    if (soundFlag == true) {
                        multipleAlert = true;
                    }
                    soundFlag = true;
                    window.isAlerting = true;
                }
                if (alert.stateModel.text === 'PENDING' && soundFlag == false) {
                    window.soundFile = 'public/app/plugins/panel/alertlist-sound/sound/alarm-pending.mp3';
                    soundFlag = true;
                }
                counter = counter + 1;
            }
            _this.setsoundFile();
            if (soundFlag == true && _this.panel.sound == true) {
                if (multipleAlert == true) {
                    _this.setsoundFileMultiple();
                }
                _this.playSound();
            }
            else if (soundFlag == false && window.isAlerting == true && _this.panel.sound == true) {
                window.soundFile = 'public/app/plugins/panel/alertlist-sound/sound/alarm-resolved.mp3';
                _this.setsoundFile();
                _this.playSound();
                window.isAlerting = false;
            }
            return _this.currentAlerts;
        }));
    };
    AlertListSoundPanel.prototype.onInitEditMode = function () {
        this.addEditorTab('Options', 'public/app/plugins/panel/alertlist-sound/editor.html');
    };
    AlertListSoundPanel.templateUrl = 'module.html';
    AlertListSoundPanel.scrollable = true;
    return AlertListSoundPanel;
}(sdk_1.PanelCtrl));
exports.AlertListSoundPanel = AlertListSoundPanel;
exports.PanelCtrl = AlertListSoundPanel;
