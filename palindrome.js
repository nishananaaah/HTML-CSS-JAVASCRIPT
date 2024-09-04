        var palindrome="madam";
        
var pl="";
        for(let i=palindrome.length-1;i>=0;i--){
            
        pl += palindrome[i];
        }


         if(palindrome == pl)
         {
                document.write("it is a palindrome");
         }else{
                    document.write("it is not a palindrome");
                }
        
     