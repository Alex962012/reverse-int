module.exports = function reverse (n) {
        result = 0
     
       for (; n; n=Math.floor(n/10) ){
          result=result*10;
          result=result+n%10
       }  
     
       return result
    }
