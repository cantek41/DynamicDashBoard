import { Component } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    id: string;
    data: any[];
    selectedData: any[];
  
   
    constructor(private baseService: BaseService) {
       
    }

    // Json Olarak gelen data cols[{field:'Id',header:'Id'}] olarak proport ekler
    addProporty(data:any[]){
        for (var i = 0; i < data.length; i++) {
            let cols = new Array();
            var keynames = Object.keys(data[i].Data[0]);
           

            if (data[i].ColWidth != "") {
                data[i].ColWidth = data[i].ColWidth.split(";");
            }

            for (var j = 0; j < keynames.length; j++) {
                let item = {
                    field: keynames[j],
                    header: keynames[j]
                }
                cols.push(item);
            }
            data[i]["cols"] = cols;
        }
        return data;
    }


    //Veritabanýndan ilgii veri bulur
    findId() {
        this.baseService.getDataAll(this.id).subscribe((data) => {
            this.data = this.addProporty(data);
            console.log(this.data);
        })
    }

    
}
