// //Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.

function GradingSystem(scores:number){

if(scores>=90 && scores<=100){
    return("Student get A grade")
}
else if (scores>=80 && scores<=89){
    return("Student get B grade")
}
else if(scores>=70 && scores <=79){
    return("Student get C grade");
    
}
else if(scores>=60 && scores<=69){
    return("Student get D grade");
    
}
else if(scores>=50 && scores<=59){
    return("Student get E grade");
    
}
else {
return("Student get F grade means Failed")
}

}
console.log(GradingSystem(42));
//Author-Huma Mohsin

