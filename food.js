class food {
  constructor(){
      this.foodStock=0;
      this.lastFed=null;
      this.image=loadImage("images/milk.png");

  }

  updateFoodStock(fs){
      this.foodStock=fs;
      
  }

  deductFood(){
    if (this.foodStock>0){
        this.foodStock-=1;
    }

  }

  getFoodStock(){

    return this.foodStock;

  }


  display(){
    background(46,139,87);
    fill (255);
    textSize(15);
    if (lastFed>=12){
      text("Last Feed : "+ lastFed%12 + " PM", 50,30);
    }
    else if(lastFed===0){
      text("Last Feed : 12 AM",50,30);
    } 
    else {
      text("Last Feed : "+ lastFed + " PM", 50,30);
    }
    var x=80,y=100;
    imageMode(CENTER);
    image (this.image,720,220,70,70);
    if (this.foodStock!=0){
        for (var i=0;i<this.foodStock;i++){
            if(i%10===0){

                x=80;
                y=y+50

            }
            image (this.image,x,y,50,50);
        x+=30;
        }
        

    }

  }

  getLastFed(lf){
      this.lastFed=lf;
  }

  bedroom(){
    
   background (bedI,550,500)
  }
 
  garden(){
    
    background (gardenI,550,500)
   }

   washroom(){
    
    background (washroomI,550,500)
   }
}