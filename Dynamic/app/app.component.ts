import { Component } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    name = 'Angular';
    id: string;
    data: any[];
  
    data1=[
   
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
        "bildirimTuru": "ÖNERÝ",
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
        "bildirimTuru": "ÞÝKAYET",
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
        "bildirimTuru": "MEMNUNÝYET",
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
   

   
   
    constructor(private baseService: BaseService) {
        //this.baseService.getDataAll(this.id).subscribe((data) => {
        //    //console.log(data);
        //    //this.data = data;
        //    console.log(data);
           
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

    findId() {
        this.baseService.getDataAll(this.id).subscribe((data) => {
            for (var i = 0; i < data.length; i++) {
                let cols = new Array();
                var keynames = Object.keys(data[i].Data[0]);
                for (var j = 0; j < keynames.length; j++) {
                    let item = {
                        field: keynames[j],
                        header: keynames[j]
                    }
                    cols.push(item);
                }
                data[i]["cols"] = cols;
            }
            this.data = data;
        })
    }
}
