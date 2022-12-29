"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var user_module_1 = require("../../../../../../../../../src/user/user.module");
var auth_controller_1 = require("./auth.controller");
var auth_service_1 = require("./auth.service");
var key_1 = require("../config/key");
var jwt_guards_1 = require("./guards/jwt.guards");
var jwt_strategy_1 = require("./guards/jwt.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [user_module_1.UserModule, jwt_1.JwtModule.registerAsync({ useFactory: function () { return ({
                        secret: key_1["default"].secret,
                        signOptions: { expiresIn: key_1["default"].expiresIn }
                    }); }
                }),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_guards_1.JwtGuard, jwt_strategy_1.JwtStrategy]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
