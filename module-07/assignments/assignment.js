const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];

// const age = data.map((item) => item.died-item.born);
// const filtered = age.filter((item) => item > 75);
// const oldest = filtered.reduce((acc, item) => {
//     if(acc>item){
//         return acc
//     }else{
//         return item
//     }
// }, 0);

const oldest = data.map((item) => item.died - item.born)
    .filter((item) => item > 75)
    .reduce((acc, item) => {
        if (acc > item) {
            return acc
        } else {
            return item
        }
    }, 0);

console.log(oldest);