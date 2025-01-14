"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var React = require("react");
var VideoUploader_1 = require("./VideoUploader");
var VideoControl_1 = require("./VideoControl");
var Placeholder = wp.components.Placeholder;
var InspectorControls = wp.blocks.InspectorControls;
var CheckboxControl = wp.components.CheckboxControl;
var BlockControls = wp.blocks.BlockControls;
var BlockAlignment = wp.blocks.BlockAlignmentToolbar;
var Toolbar = wp.components.Toolbar;
var AdvanceVideoDesign = /** @class */ (function (_super) {
    __extends(AdvanceVideoDesign, _super);
    function AdvanceVideoDesign(props) {
        var _this = _super.call(this, props) || this;
        _this.ResetSize = _this.ResetSize.bind(_this);
        _this.VideoSelected = _this.VideoSelected.bind(_this);
        _this.state = {
            src: _this.props.attributes.src,
            id: _this.props.attributes.id,
            fileUrl: _this.props.attributes.fileUrl
        };
        return _this;
    }
    AdvanceVideoDesign.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, blob, media;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.props.attributes.id == null && this.props.attributes.fileUrl != null && this.props.attributes.fileUrl.indexOf('blob:') === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch(this.props.attributes.fileUrl)];
                    case 1:
                        file = _a.sent();
                        return [4 /*yield*/, file.blob()];
                    case 2:
                        blob = _a.sent();
                        return [4 /*yield*/, wp.utils.mediaUpload([blob], function (_a) {
                                var video = _a[0];
                                if (video.id == null)
                                    return;
                                _this.props.setAttributes({
                                    src: video.url,
                                    id: video.id
                                });
                            }, 'video')];
                    case 3:
                        media = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdvanceVideoDesign.prototype.render = function () {
        var _this = this;
        var element = null;
        if (this.props.attributes.id == null && this.props.attributes.fileUrl != null) {
            return (React.createElement("figure", null,
                React.createElement(Placeholder, { key: "placeholder", icon: "media-video", label: 'Uploading video, please wait...' },
                    React.createElement("i", { className: "spinner is-active", "aria-hidden": "true" }))));
        }
        if (this.props.attributes.src == null)
            element = (React.createElement(VideoUploader_1.VideoUploader, { VideoSelected: this.VideoSelected, setAttributes: this.props.setAttributes }));
        else {
            var style = { width: '100%', height: '100%' };
            if (this.props.attributes.width >= 0)
                style.width = this.props.attributes.width;
            if (this.props.attributes.height >= 0)
                style.height = this.props.attributes.height;
            element = (React.createElement(VideoControl_1.VideoControl, __assign({ IsDesign: true }, this.props)));
        }
        return [
            this.props.isSelected &&
                React.createElement(InspectorControls, null,
                    React.createElement(CheckboxControl, { label: "Show Controls", checked: this.props.attributes.showControls, onChange: function (e) { _this.props.setAttributes({ showControls: e }); } }),
                    React.createElement(CheckboxControl, { label: "AutoPlay", checked: this.props.attributes.autoPlay, onChange: function (e) { _this.props.setAttributes({ autoPlay: e }); } }),
                    React.createElement(CheckboxControl, { label: "Loop", checked: this.props.attributes.loop, onChange: function (e) { _this.props.setAttributes({ loop: e }); } })),
            this.GetBlockControls(),
            element
        ];
    };
    AdvanceVideoDesign.prototype.VideoSelected = function (media) {
        this.setState({
            src: this.props.attributes.src,
            id: this.props.attributes.id
        });
    };
    AdvanceVideoDesign.prototype.GetBlockControls = function () {
        var _this = this;
        if (this.props.attributes.width >= 0 || this.props.attributes.height >= 0) {
            return (React.createElement(BlockControls, null,
                React.createElement(BlockAlignment, { value: this.props.attributes.align, onChange: function (e) { _this.props.setAttributes({ align: e }); } }),
                React.createElement(Toolbar, null,
                    React.createElement("button", { className: "resizeButton components-button components-icon-button components-toolbar__control", style: { padding: 0, margin: 0 }, onClick: this.ResetSize },
                        React.createElement("i", { title: "Reset Size", className: "fa fa-arrows-alt", "aria-hidden": "true", style: { cursor: 'pointer' } })))));
        }
        return null;
    };
    AdvanceVideoDesign.prototype.ResetSize = function () {
        this.props.setAttributes({
            width: -1,
            height: -1,
            align: ''
        });
    };
    return AdvanceVideoDesign;
}(React.Component));
exports.AdvanceVideoDesign = AdvanceVideoDesign;
//# sourceMappingURL=AdvancedVideoDesign.js.map