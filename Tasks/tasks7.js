function countConcat(string){
    let count = 0;
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        for (let j = 1; j < string.length; j++) {
            const subString = string.slice(i, j);
            if(subString.length !== 0){
                if(string.indexOf(subString.concat(subString)) !== -1 ){
                    if(map.get(subString) !== 1){
                        map.set(subString,1);
                        
                       
                    }  
                }               
            }
        }
    }
    console.log(map);
    return count;
}

console.log(countConcat('abcabcabc'));

