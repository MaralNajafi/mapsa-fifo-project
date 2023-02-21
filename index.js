 
// pull fn
function pullFn(arr) {
    if (arr.length > 0) {
        let lastItem = arr[arr.length - 1]; 
        console.log(lastItem);
        arr.length--;
        console.log(arr);
    }else{
        console.log("Enter a non empty array!");
        return;
    }
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


function pushFn(array, value) {

    let tempValue = value;

    for(let i = 0; i < array.length; i++) {
        let loopTemp = array[i];
        array[i] = tempValue;
        tempValue = loopTemp;

    }

    array[array.length] = tempValue;

    return array;

}


let arrTest = [1,2,3,4];

pushFn(arrTest, "Maral");
pushFn(arrTest, "6");
pushFn(arrTest, 9);

console.log(arrTest);


