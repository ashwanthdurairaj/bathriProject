import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetails 
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala Paneer.",
      foodPrice:200,
      foodImg:"https://www.manjulaskitchen.com/wp-content/uploads/paneer_sandwich-500x500.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum| Mushroom| Black olives,Sweet corn, Red Paprika topped with cheese.",
      foodPrice:369,
      foodImg:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"Paneer.",
      foodPrice:149,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05lTMxRxMelNoXKUYHIlVDdlbjiBEDz6Vmg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll",
      foodDetails:"A homely mix of mashed potatoes and veggies, just for you to remember mom's kitchen.",
      foodPrice:140,
      foodImg:"https://www.manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"A perfect chocolate delicacy to fill out all the sweet toothed out there (Eggless).",
      foodPrice:105,
      foodImg:"https://iambaker.net/wp-content/uploads/2014/06/861A6402.brwonie-768x512.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Icecream",
      foodDetails:"Oreo icecream.",
      foodPrice:200,
      foodImg:"https://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/_A39cgxoHN64/Spk75M9EnbI/AAAAAAAADvg/aScnJ1FBy2o/s1600/IMG_3318.JPG"
    }
    
  ]


}
