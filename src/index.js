module.exports = function reverse (n) {
    let result;
    let sum="";
    result=Math.abs(n).toString()
    console.log(result)
  
    for(let i=result.length; i>=1;i--)
    {sum =sum+result[i-1]
  
    }
    result=Number(sum)
    return  result
    }  
