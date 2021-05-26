const valueInRange = (value) => {
    let count=0;
    for(let i=50;i<=100;i++){
        if(value===i){
            count++;
        }
    }
    if(count===0){
        console.log(`Value not found`);
    }
    else{
        console.log(`Value found`);
    }
}

valueInRange(57);