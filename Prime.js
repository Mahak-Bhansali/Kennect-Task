const num = parseInt(readLine());
const isPrime = (num) => {
 
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    
    for(let i = 2; i < sqrtnum + 1; i++){
 
        if(num % i === 0){
            
            prime = false;
            break;
        };
    };
 
    return prime;
}
const nextPrime = (num = 1) => {

    while(!isPrime(++num)){
    };

    return num;
};
const n = nextPrime()
 const diffrence =  Math.abs(nextPrime(num)-num) ;
console.log(nextPrime(num));
console.log(diffrence);