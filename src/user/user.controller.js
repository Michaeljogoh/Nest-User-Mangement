"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var decorators_1 = require("@nestjs/common/decorators");
var jwt_guards_1 = require("../../../../../../../../../src/auth/guards/jwt.guards");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    // Delete User Account 
    UserController.prototype["delete"] = function (id) {
        return this.userService["delete"](id);
    };
    __decorate([
        (0, decorators_1.UseGuards)(jwt_guards_1.JwtGuard),
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserController.prototype, "delete");
    UserController = __decorate([
        (0, common_1.Controller)('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
