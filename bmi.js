document.getElementById("submit-btn").addEventListener("click", function(){

    const weight = document.getElementById("weight").value;
    const Grosse = document.getElementById("Grosse").value;
    const bmi = weight / (Grosse * Grosse);

    document.getElementById("bmi").innerHTML = bmi;

// mit unter code scheint nur die begrif 

     if(bmi < 18.5){
        document.getElementById("bmi").innerHTML = "Untergewicht";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmi").innerHTML = "Normal";
    }else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("bmi").innerHTML = "Übergewicht";
    }else if(bmi >= 34.9 && bmi <= 39.9){
        document.getElementById("bmi").innerHTML = "Fettleibig";
    }else{
        document.getElementById("bmi").innerHTML = "Extrem fettleibig";
    }
})  

   /* mit dem unter code scheint nur die berechnung ziffern */

/* const bmicategory = "Untergewicht"
    if(bmi < 18.5){
        bmicategory = "Untergewicht";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        bmicategory = "Normal";
    }else if(bmi >= 25 && bmi <= 29.9){
        bmicategory = "Übergewicht";
    }else if(bmi >= 34.9 && bmi <= 39.9){
        bmicategory = "Fettleibig";
    }else{
        bmicategory = "Extrem fettleibig";
    }

    document.getElementById("bmicategory").innerHTML = bmi-category;
})  */
