function mySort(arr){
    arr.sort((a,b) => {
        return a>b
    })
    return arr
}

let a = mySort([3,4,5,1,66])

console.log(a)