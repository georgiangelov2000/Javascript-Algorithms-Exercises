function solve(string) {
    let result=0;
    for (let i = 0; i < string.length; i++) {
        if(string[i]==='a'){
            result+=1
        }else if(string[i]==='e'){
            result+=2
        }else if(string[i]==='o'){
            result+=4
        }else if(string[i]==='u'){
            result+=5
        }else if(string[i]==='i'){
            result+=3
        }
    }
    console.log(result)
    
}
solve('hi')