function excludingVatPrice(price){
    if (price = parseInt(price)){
        sum = price *15;
        sum2= sum / 100 ;
        sum3 = price + sum2; 
        sum4=Math.round(sum3 * 100) / 100;
        return sum4
        }
    if (price == null){ 
        return -1;
    }
    else {
        return 0;
    }
    return 0;
  }