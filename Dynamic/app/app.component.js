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
        //this.baseService.getDataAll(this.id).subscribe((data) => {
        //    //console.log(data);
        //    //this.data = data;
        //    console.log(data);
        this.baseService = baseService;
        this.name = 'Angular';
        this.data1 = [
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
        //    for (var i = 0; i < data.length; i++) {
        //        let cols = new Array();
        //        var keynames = Object.keys(data[i].Data[0]);
        //        for (var j = 0; j < keynames.length; j++) {
        //            let item = {
        //                field: keynames[j],
        //                header: keynames[j]
        //            }
        //            cols.push(item);
        //        }
        //        data[i]["cols"] = cols;
        //        //console.log(cols);
        //        //console.log("--------------------");
        //    }
        //    console.log(data);
        //})
    }
    AppComponent.prototype.findId = function () {
        var _this = this;
        this.baseService.getDataAll(this.id).subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                var cols = new Array();
                var keynames = Object.keys(data[i].Data[0]);
                for (var j = 0; j < keynames.length; j++) {
                    var item = {
                        field: keynames[j],
                        header: keynames[j]
                    };
                    cols.push(item);
                }
                data[i]["cols"] = cols;
            }
            _this.data = data;
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