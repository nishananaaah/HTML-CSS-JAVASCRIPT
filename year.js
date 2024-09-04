var year=2004;
if(year%4==0){
    document.write("Leap year");
}else if(year%100==0){
    document.write("not leap year");
}else if(year%400==0){
    document.write("Leap year");
}else{
    document.write("not leap year");
}