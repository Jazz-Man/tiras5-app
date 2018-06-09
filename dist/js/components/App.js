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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var IconButton_1 = require("@material-ui/core/IconButton");
var Menu_1 = require("@material-ui/icons/Menu");
var styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};
var SimpleAppBar = (function (_super) {
    __extends(SimpleAppBar, _super);
    function SimpleAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleAppBar.prototype.render = function () {
        var _a = this.props, message = _a.message, classes = _a.classes;
        return (React.createElement("div", { className: classes.root },
            React.createElement(AppBar_1.default, null,
                React.createElement(Toolbar_1.default, null,
                    React.createElement(IconButton_1.default, { className: classes.menuButton, color: "inherit", "aria-label": "Menu" },
                        React.createElement(Menu_1.default, null)),
                    React.createElement(Typography_1.default, { variant: "title", color: "inherit", className: classes.flex }, message),
                    React.createElement(Button_1.default, { color: "inherit" }, "Login")))));
    };
    return SimpleAppBar;
}(React.Component));
exports.default = styles_1.withStyles(styles)(SimpleAppBar);
//# sourceMappingURL=App.js.map