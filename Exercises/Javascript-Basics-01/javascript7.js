

let shoe = prompt("enter shoe size ", "shoe size");
let birth_date = prompt("enter birth_date ", "birth_date");


function shoe(shoe,birth_date){
    let mul = shoe * 2;
    let add =mul + 5;
    let mult = add * 50;
    let sub = mult - birth_date;
    let result = sub - 1766;

    return result;
}


alert("the result is : " + shoe());
