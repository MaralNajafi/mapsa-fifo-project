

let arr1 = [1,2,3] // => [1,2]

// pull fn
function pullFn(myArray) {
    let newArray;
    for (let i = 0; i < myArray.length -1; i++) {
    newArray[i] = myArray[i]
        
    }

    return newArray;
}

const myArray1 = [1,2,3,4,5];
const myArray2 = [1,55,8,33,4];
const myArray3 = ["Maral", 23, "Tehran"];
const emptyArr = [];

//pull test
pullFn(myArray1);
pullFn(myArray2);
pullFn(myArray3);
pullFn(emptyArr);


function pushFn(myArray, newValue) {
    const newArray = [newValue]

    for (let index = 0; index < myArray.length; index++) {
        newArray[index+1] = myArray[index]
    }
    return newArray;
}


let arrTest = [1,2,3,4];

arrTest = pushFn(arrTest, "Maral");
arrTest = pushFn(arrTest, 6);
arrTest = pushFn(arrTest, 1);

console.log(arrTest);


