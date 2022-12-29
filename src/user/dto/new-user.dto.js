"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewUserDTO = void 0;
var class_validator_1 = require("class-validator");
var decorators_1 = require("class-validator/types/decorator/decorators");
var NewUserDTO = /** @class */ (function () {
    function NewUserDTO() {
    }
    __decorate([
        (0, decorators_1.IsNotEmpty)()
    ], NewUserDTO.prototype, "name");
    __decorate([
        (0, class_validator_1.IsEmpty)(),
        (0, decorators_1.IsNotEmpty)()
    ], NewUserDTO.prototype, "email");
    __decorate([
        (0, decorators_1.IsNotEmpty)()
    ], NewUserDTO.prototype, "password");
    return NewUserDTO;
}());
exports.NewUserDTO = NewUserDTO;
