// //Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

function age_group(age:number){
if ( age>=5 && age<=12 ){
    return("The person is a child.");
    
}
else if(age>=13 && age <=18){
    return("The person is a teenager.");
    
}
else{
    return( "The person is an adult.")
}
}

console.log(age_group(35));
//Author-Huma Mohsin
