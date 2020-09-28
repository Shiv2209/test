var arr=[1,0,0,0,1,0,1,1,1,1,1];
var count = 0; 
    var result = 0;
  
    for (var i = 0; i < arr.length; i++) 
    {
        if (arr[i] == 0) 
            count = 0; 
     else
        { 
            count++;
            result = Math.max(result, count); 
        } 
    } 
  
    console.log( result);