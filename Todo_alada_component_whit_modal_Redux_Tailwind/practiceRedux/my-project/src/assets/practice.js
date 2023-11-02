const add = (a) =>{
    return (b)=>{
        return (c)=>{
            return a + b +c;
        };
    };
};

const result = add(1)(2)(3);

console.log(result);