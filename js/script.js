var calculatePrice = document.getElementById('calculatePrice');

var finalPrice = document.getElementById('price');


finalPrice.innerHTML = 5 ;

calculatePrice.addEventListener('click', function(){// aspetto che qualcuno clicchi sul bottone creato nell'HTML con l'ID 'calculatePrice'

    var resultSumInt = 5;

    var checkIngredients = document.getElementsByClassName('checkIngredients');// dico al codice di prendere tutti i valori che hanno la classe 'checkIngredients'

    var priceDiscount;

    for ( var i = 0; i < checkIngredients.length; i++){//il ciclo continuera finche la 'i' sarà inferiore al numero di variabili all'interno di 'checkIngredients'
        if(checkIngredients[i].checked){// controllo che la variabile checkIngredients[i] sia di valore true perche l'input html da come valore 'true' al js se la casella è stata checcata
            resultSumInt += parseInt(checkIngredients[i].value);//qui sommo alla variabile resultSumInt il valore della variabile 'checkIngredients[i]' che è stato inserito  nell'HTML con la voce 'value'
        }
    }

    var sconto = document.getElementById('sconto');// qui prendo il valore dell'input di tipo testo inserito dall'uttente 
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


