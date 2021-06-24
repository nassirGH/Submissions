function getAvg(list){
    let sum =0;
    let avg = 0;
    for(let i =0;i<list.length;i++){
        sum += list[i];
    }
    avg = (sum /list.length);
    return avg;
}


function search(list,num){
    for (let i=0; i<list.length; i++)
    {
        if(list[i] == num)
        {
            return true;
        }
    }  
    return false;
}


function removeDuplicates(arr) {
    const result = [];
    let index = 0;
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[index] = arr[i];
            index++;
        } 
    }
    return result;
}


function getMinMax(list,word){

    let x = list[0];
    if(word === "min"){
       
        for(let i=1;i<list.length;i++){
            if(x>list[i]){
                x =list[i];
            }
        }
        return x;
    }
    else if(word === "max"){
                
                for(let i=1;i<list.length;i++){
            if(x<list[i]){
                x =list[i];
            }
        }
        return x;
    }
    
}


function shuffle(list, word)
{
    if(word == "right")
    {
        let start = [list[list.length-1]];
        for(i=0; i<list.length-1; i++)
        {
            start[i+1] = list[i];
        }
    return start;
    }
    else if (word == "left")
    {

        let start = [list[1]];
        for(i=1; i<list.length-1; i++)
        {
            start[i] = list[i+1];
        }
        start[start.length] = list[0];
        return start;

    }

}


function intersect(l1,l2)
{
 let counter = 0;
 let array = [];
 let x = 0 ;
 for(let i=0;i<l1.length;i++){
     for(let j=0;j<l2.length;j++){
         if(l1[i]==l2[j]){
             counter ++;
         }
     }
 }
 for(let i=0;i<counter;i++){
     array[i]=0;
}
for(let i=0;i<l1.length;i++){
        for(let j=0;j<l2.length;j++){
            if(l1[i]==l2[j]){
               array[x]=l1[i];
               x++;
            }
        }
    }
return array;
}


function union(l1, l2) {
    var x = [];
    for (var i = l1.length-1; i >= 0; -- i)
       x[l1[i]] = l1[i];
    for (var i = l2.length-1; i >= 0; -- i)
       x[l2[i]] = l2[i];
    var res = []
    for (var k in x) {
      if (x.hasOwnProperty(k))  
        res.push(x[k]);
    }
    return res;
  }
  

function toBinary(num){
    var number = num
    var result = []
    while(number >= 1 ){
        result.unshift(Math.floor(number%2))
        number = number/2
    }
    return result
}

