function solve(string,char) {
   if(string.indexOf(char)>=1 && string.indexOf(char)<=3){
       return true
   }else{
       return false
   }
}
console.log(solve('python','y'))