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
        this.name = 'Angular';
        this.data = [
            {
                "Id": 2,
                "Order": 1,
                "Title": "Deneme",
                "Type": "GRID",
                "ColWidth": "",
                "cols": [
                    { field: 'Id', header: 'Id' },
                    { field: 'Type', header: 'Type' },
                    { field: 'Order', header: 'Order' },
                    { field: 'Title', header: 'Title' },
                    { field: 'ColWidth', header: 'ColWidth' }
                ],
                "Data": [
                    {
                        "Id": 2,
                        "Type": 0,
                        "Order": 1,
                        "Title": "Deneme",
                        "SQL": "Select * from Dashboards",
                        "ColWidth": ""
                    },
                    {
                        "Id": 3,
                        "Type": 0,
                        "Order": 2,
                        "Title": "K,,,,,,,so",
                        "SQL": "SELECT    *  FROM  [KSO_OTOMASYON]..BildirimTurus",
                        "ColWidth": ""
                    }
                ]
            },
            {
                "Id": 3,
                "Order": 2,
                "Title": "K,,,,,,,so",
                "Type": "GRID",
                "ColWidth": "",
                "cols": [
                    { field: 'Id', header: 'Id' },
                    { field: 'bildirimTuru', header: 'bildirimTuru' },
                    { field: 'OlusturanKullanici', header: 'OlusturanKullanici' },
                    { field: 'OlusturmaTarihi', header: 'OlusturmaTarihi' },
                    { field: 'DegistirenKullanici', header: 'DegistirenKullanici' },
                    { field: 'DegistirmeTarihi', header: 'DegistirmeTarihi' },
                    { field: 'Silindi', header: 'Silindi' },
                    { field: 'OzelSayisalAlan', header: 'OzelSayisalAlan' },
                    { field: 'OzelMetinAlan', header: 'OzelMetinAlan' },
                ],
                "Data": [
                    {
                        "Id": 1,
                        "bildirimTuru": "TALEP",
                        "OlusturanKullanici": "2bba1dfe-3969-42ff-9c22-9d1cbe687175",
                        "OlusturmaTarihi": "2015-11-28T12:32:33.69",
                        "DegistirenKullanici": "",
                        "DegistirmeTarihi": "",
                        "Silindi": false,
                        "OzelSayisalAlan": "",
                        "OzelMetinAlan": ""
                    },
                    {
                        "Id": 2,
                        "bildirimTuru": "�NER�",
                        "OlusturanKullanici": "2bba1dfe-3969-42ff-9c22-9d1cbe687175",
                        "OlusturmaTarihi": "2015-11-28T12:32:33.69",
                        "DegistirenKullanici": "",
                        "DegistirmeTarihi": "",
                        "Silindi": false,
                        "OzelSayisalAlan": "",
                        "OzelMetinAlan": ""
                    },
                    {
                        "Id": 3,
                        "bildirimTuru": "��KAYET",
                        "OlusturanKullanici": "2bba1dfe-3969-42ff-9c22-9d1cbe687175",
                        "OlusturmaTarihi": "2015-11-28T12:32:33.69",
                        "DegistirenKullanici": "",
                        "DegistirmeTarihi": "",
                        "Silindi": "",
                        "OzelSayisalAlan": "",
                        "OzelMetinAlan": ""
                    },
                    {
                        "Id": 4,
                        "bildirimTuru": "MEMNUN�YET",
                        "OlusturanKullanici": "2bba1dfe-3969-42ff-9c22-9d1cbe687175",
                        "OlusturmaTarihi": "2015-11-28T12:32:33.69",
                        "DegistirenKullanici": "",
                        "DegistirmeTarihi": "",
                        "Silindi": false,
                        "OzelSayisalAlan": "",
                        "OzelMetinAlan": ""
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.findId = function () {
        var _this = this;
        this.baseService.getDataAll(this.id).subscribe(function (data) {
            console.log(data);
            _this.data = data;
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