var mark = 100;
if (mark > 90 &&mark <=100) {
    document.write("S Grade");
}
 else if (mark > 80 &&mark <=90){
    document.write("A Grade");
} 
else if (mark > 70 &&mark<= 80){
    document.write("B Grade");
} 
else if(mark >60&& mark<= 70){
    document.write("C Grade");
} 
else if(mark>50&&mark<=60){
    document.write("D Grade");
} 
else if(mark>40&&mark<=50){
    document.write("E Grade");
} 
else if(mark>0&&mark<=40){
    document.write("Student has failed");
} 
else{
    document.write("invalid marks");
}

    