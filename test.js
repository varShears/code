const search = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        if (arr[left] === target) return left
        if (arr[right] === target) return right

        let mid = Math.floor((left + right) / 2,10)

        if(arr[mid]>target){
            right = mid
        }else{
            left = mid
        }
    }
}

let a = search([-1,0,3,5,9,12],2)

console.log(a)