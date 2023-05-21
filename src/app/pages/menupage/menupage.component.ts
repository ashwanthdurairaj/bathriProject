import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ConnectService } from 'src/app/services/connect.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor (private param:ActivatedRoute, 
    private service:OrderDetailsService,
    private connect: ConnectService){ }
  getMenuId:any;
  menuData:any;
  name: any;
  number: any;
  address: any;
  ngOnInit(): void {
    this.getMenuId =this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData= this.service.foodDetails.filter((value)=>{
        return value.id==this.getMenuId;
      });
      console.log(this.menuData,'menudata>>')
    }
  }

  onSubmit(){
    const data = {
      name: this.name,
      address: this.address,
      number: this.number
    }
    this.connect.backend(data).subscribe(res => {
      console.log(res)
    });    
  }

}
