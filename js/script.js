var calculatePrice = document.getElementById('calculate-Price');

var finalPrice = document.getElementById('price');


finalPrice.innerHTML = 5 ;

calculatePrice.addEventListener('click', function(){

    var resultSumInt = 5;

    var checkIngredients = document.getElementsByClassName('check-Ingredients');

    var priceDiscount;

    for ( var i = 0; i < checkIngredients.length; i++){
        if(checkIngredients[i].checked){
            resultSumInt += parseInt(checkIngredients[i].value);
        }
    }

    var sconto = document.getElementById('sconto');
    if(sconto.value === 'sconto10'){
        priceDiscount =  resultSumInt - (resultSumInt * 10)/100;
       finalPrice.innerHTML = priceDiscount;
    }
    else if(sconto.value === 'sconto25'){
        priceDiscount =  resultSumInt - (resultSumInt * 25)/100;
       finalPrice.innerHTML = priceDiscount;

    }
    else if(sconto.value === 'sconto50'){
        priceDiscount =  resultSumInt - (resultSumInt * 50)/100;
       finalPrice.innerHTML = priceDiscount;

    }else if(sconto.value !== ''){
        alert('il codice sconto inserito non è valido')
    }else{
    finalPrice.innerHTML = resultSumInt ;}
    
})


