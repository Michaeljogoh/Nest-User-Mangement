"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var user_module_1 = require("./user/user.module");
var auth_module_1 = require("./auth/auth.module");
var mongoose_1 = require("@nestjs/mongoose");
var key_1 = require("./config/key");
var config_1 = require("@nestjs/config");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [config_1.ConfigModule, user_module_1.UserModule, auth_module_1.AuthModule, mongoose_1.MongooseModule.forRoot(key_1["default"].MongoURI)]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
