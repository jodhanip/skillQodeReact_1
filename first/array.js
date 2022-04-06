//array
//collection of  "Homogenious" "indexed" elements called as "array"
//[]
//index starts from "0"
//we can access array elements with "indexes"


// let arr = [10, 20, 30, 40, 50];
// console.log(arr[2])
// console.log(arr[-1])

// console.log(arr[0], arr[2], arr[4]);                      //10                //30        //50
// console.log(arr[5], arr[-1]);                             //undefined         //undefined

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// console.log(arr.length);                                      //5
// arr.length = 3;
// console.log(arr);
// console.log(arr[0], arr[2], arr[3], arr[5], arr[100], arr[-100]);   //10 30 undefined undefined undefined undefined




// let arr = [];
// console.log(arr.length);                                          //0
// arr[0] = 10;
// console.log(arr.length);                                            //1
// arr[100] = 1000;
// console.log(arr[5]);                                          //101
// console.log(arr.length);                                          //101




//insert  -- > //push()    //unshift()
//delete -- > //pop()     //shift()
// let arr = [20, 30, 40];
// console.log(arr.length);                  //3
// console.log(arr);                         //[ 20, 30, 40 ]
// arr.push(50);
// console.log(arr);                         //[ 20, 30, 40, 50 ]
// arr.unshift(10);
// console.log(arr);                         //[ 10, 20, 30, 40, 50 ]
// arr.pop();
// console.log(arr);                        //[ 10, 20, 30, 40 ]
// arr.shift();
// console.log(arr);                           //[ 20, 30, 40 ]



//delete
//deletes an element at only a particular index
//delete property never releses the memory of deleted element
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);                      //5
// console.log(arr);                      //5
// delete arr[0];
// console.log(arr);                      //5
// console.log(arr[0]);                      //5
// console.log(arr.length);                     //5
// console.log(arr);                               //[ <1 empty item>, 20, 30, 40, 50 ]
// delete arr[4];
// console.log(arr.length);                      //5
// console.log(arr);                             //[ <1 empty item>, 20, 30, 40, <1 empty item> ]
// delete arr
// console.log(arr)





//splice()
// it is used to add/remove the element at any index
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr1.splice(4, 3);
// console.log(arr1);
// arr1.splice(6, 1);
// console.log(arr1);
// arr1.splice(0, 1);
// console.log(arr1);
// arr1.splice(1, 1);
// console.log(arr1);
// arr1.splice(2, 0, 11, 12, 13);
// console.log(arr1);
// arr1.splice(1, 1, 11, 12);
// console.log(arr1);
// arr1.splice(0, 0, 11);
// console.log(arr1);
// arr1.splice(9, 0, 110);
// console.log(arr1);


// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr1.splice(-1, 1);
// arr1.splice(-3, 3);
// arr1.splice(-3, -3);
// arr1.splice(-3, 1, 11, 12, 13);
// console.log(arr1);

//slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// [5,7)
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//  E               S
// newarr = arr1.slice(5, 7)
// console.log(newarr);
// console.log(arr1.slice(5, 7));
// console.log(arr1.slice(1, -4));
// console.log(arr1.slice(-5, -1))
// console.log(arr1.slice(7, 1));

// findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let n = arr.findIndex((element, index) => {
//     return element > 101;
// })
// console.log(n); //4
// console.log(
//     arr.findIndex((element, index) => {
//         return element == 80;
//     })
// );
// console.log(
//     arr.findIndex((element, index) => {
//         return element == 1000;
//     })
// );
// arr.splice(arr.findIndex((element, index) => {
//     return element == 50;
// }), 1);
// console.log(arr);
// arr.splice(arr.findIndex((element, index) => {
//     return element == 90;
// }), 1);
// console.log(arr);



/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        })
    );

console.log(
    [100,200,300,400,500].map((element,index)=>{
        return element/10;
    })
);
console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element == 1 || element == 5 ? "Hello" : "welcome"
    })
);
/
*/


/*
    console.log(
        [100,200,300,400,500].filter((element,index)=>{
            return element>=300;
        })
    );

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=200;
    })
);

*/


/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement + nextElement;
    })
);

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=300;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },5000)
);

*/


//reverse()
//reverse() function used to reverse the array elements
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1.reverse());
//[ 50, 40, 30, 20, 10 ]
// let arr2 = ["Angular14", "ReactJS", "NodeJS", "VueJS", "MongoDB"];
// console.log(arr2.reverse());
//[ 'MongoDB', 'VueJS', 'NodeJS', 'ReactJS', 'Angular14' ]
// console.log(
//     // "Hello".split("")
//     "Hello".split("").reverse().join("")
// );

// arr = ['H', 'e', 'l', 'l', 'o']
// console.log(arr.join(""))




/*
let arr1 = ["Angular14", "ReactJS", "NodeJS", "VueJS", "MongoDB"];

console.log(
    arr1.map((element, index) => {
        return element.split("").reverse().join("")
    })
);
console.log(
    arr1.map((element, index) => {
        return element === "NodeJS" ? element.split("").reverse().join("") : element
    })
);*/



//...
//spread operator ...
// let arr1 = ["Angular14"];
// let arr2 = ["NodeJS", "React"];
// let arr3 = ["MongoDB", "SQL", "cassandra"];
// let arr4 = [...arr1, "Vue", ...arr2];

// console.log(...arr2);
// console.log(arr4);
// let father = ["1cr"];
// let child = [...father, "1kg gold"];
// let grand_child = [...child, "1kg silver"];
// console.log(grand_child);     //[ '1cr', '1kg gold', '1kg silver' ]





// let arr = [10, 20, 30, 40, 10, 20, 30];
// indexOf()
// it won't create indexes to repeated elements

// arr.forEach((element, index) => {
//     console.log(arr.indexOf(element));
// })

// console.log(
//     arr.filter((element, index) => {
//         return arr.indexOf(element) === index;
//     })
// );     

