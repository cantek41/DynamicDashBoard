import { Component } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    name = 'Angular';
    id: string;
    data=[
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

    }

    findId() {
        this.baseService.getDataAll(this.id).subscribe((data) => {
            console.log(data);
            this.data = data;
            console.log(this.data);
        })
    }
}
