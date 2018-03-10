"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("./services/base.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(baseService) {
        this.baseService = baseService;
        this.aa = "80%";
    }
    // Json Olarak gelen data cols[{field:'Id',header:'Id'}] olarak proport ekler
    AppComponent.prototype.addProporty = function (data) {
        for (var i = 0; i < data.length; i++) {
            var cols = new Array();
            var keynames = Object.keys(data[i].Data[0]);
            if (data[i].ColWidth != "") {
                data[i].ColWidth = data[i].ColWidth.split(";");
                console.log("ColWidth bo� de�il");
            }
            for (var j = 0; j < keynames.length; j++) {
                var item = {
                    field: keynames[j],
                    header: keynames[j]
                };
                cols.push(item);
            }
            data[i]["cols"] = cols;
        }
        return data;
    };
    //Veritaban�ndan ilgii veri bulur
    AppComponent.prototype.findId = function () {
        var _this = this;
        this.baseService.getDataAll(this.id).subscribe(function (data) {
            _this.data = _this.addProporty(data);
            console.log(_this.data);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
        }),
        __metadata("design:paramtypes", [base_service_1.BaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map