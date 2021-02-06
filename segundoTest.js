// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {

    let x = Object.values(ar)
    let countFirts = 0
    let countLast = 0
    
    for (let i = 0; i < x.length; i++)
    {
        let first = Array.of(x[i])
        
       for(let s = 0; s < first.length; s++)
       {
           if(s == 0)
           {
               countFirts = countFirts + first[s]
           }
           
           if(s == first.length - 1)
           {
               countLast = countLast + first[s]
           }
       }
       
    }
    
    return countFirts

}