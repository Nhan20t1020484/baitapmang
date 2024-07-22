// // // let arr = [4 ,5 ,6 ,7]
// // // let arr2 = new Array (3 ,5 ,8); 
// // let list = ["linh" ,"hoang ", "dsd","fdfd"];
// // for (let i=0 ; i< list.length;i++)
// // console.log('Phần tử tại vì trí '+ i + ' là ' +list[i] )
// let arr = [ 4, 5 , 6 ,7 ,7 ,5]
// console.log('Các phần tử chẳn')
// for (let i =0 ; i< arr.length; i++)
// {
//     if (arr[i] % 2 == 0 )
//         console.log(arr[i])  
// }

// console.log('Các phần tử ở vị trí chẳn')
// for (let i =0 ; i< arr.length; i++)
//     {
//         if (i % 2 == 0 )
//             console.log(arr[i])  
//     }
// console.log('Tổng các phần tử')
//     let tong = 0
//     for (let i =0 ; i< arr.length; i++)
//         {
//             tong += arr[i]
//         }
//         console.log(tong)
// console.log('Tìm max')
// let max = arr [0]
// for (let i =1 ; i< arr.length; i++)
// {
//     if ( max < arr[i] )
//     max = arr[i]

// }
// console.log(max)
// push ( là cuối mảng)
// unshift ( là đầu mảng)
// shift (xóa đầu mảng)
// concat (Nối mảng)

// let arr = [1 ,5 ,6 ,75];
// let arr2 = [3 ,6 ,32 ,4];
// let arr3 = arr.concat(arr2)
// console.log(arr3);

// let arr = [1 ,5 ,6 ,75];
// arr.splice (1 , 2);
// console.log(arr);
    
let arr = [1,7,5,9,2,6]
 console.log('Tổng các phần tử chẳn')
 let tong = 0
 for (let i =0 ; i< arr.length; i++)
 {
     if (arr[i] % 2 == 0 )
        tong += arr[i]   
 }
 console.log(tong)


 console.log('Tổng các phần tử lớn hơn 10')
 let tong1 = 0
 for (let i =0 ; i< arr.length; i++)
 {
     if (arr[i] >10)
        tong1 += arr[i]   
 }
 console.log(tong1)
 console.log('Tổng các phần tử chia 7 dư 2')
 let tong2 = 0
 for (let i =0 ; i< arr.length; i++)
 {
     if (arr[i] %7 == 2)
        tong2 += arr[i]   
 }
 console.log(tong2)

 console.log('Tìm max các phần tử chẵn')
let max = arr [0]
for (let i =1 ; i< arr.length; i++)
{
    if (arr[i] % 2 == 0 ){
    if ( max < arr[i] )
    max = arr[i]
}
}
console.log(max)

console.log('In ra lớn nhất của mảng')
let max2 = arr [0]
for (let i =1 ; i< arr.length; i++)
{
    if ( max2 < arr[i] )
    max2 = arr[i]
}
console.log(max2)

console.log('Phẩn tử chia hết cho 5')
for (let i =0 ; i< arr.length; i++)
{
    if (arr[i] % 5 == 0 )  
    console.log(arr[i])
}
console.log('Trung bình phẩn tử chia hết cho 5')
let tongtrungbinh = 0
let dem=0
for (let i =0 ; i< arr.length; i++)
{
    if (arr[i] % 5 == 0 ) {
    tongtrungbinh += arr[i]
    dem ++

}
}
 console.log(tongtrungbinh / dem)



console.log('In ra lớn thu 2 của mảng')
let max4 = arr [0]
let max_thu2 = arr[0]
for (let i = 1 ; i <= arr.length; i++)
{
    if ( max4 < arr[i] ){
        max4 = arr[i]
    }
    for(let j = 2 ;j <= arr.length; j++){
        if(max_thu2 < arr[j] && arr[j]<max4)
            maxthu2= arr[j]
    }
}
console.log(max_thu2)
// let arr = [1,7,5,9,2,6]
//  console.log('In ra lớn thu 2 của mảng')
// let max3 = arr [0]
// let maxthu2 = arr[0]
// for (let i =1 ; i< arr.length; i++)
// {
//     if ( max3 < arr[i] ){
//         max3 = arr[i]
//     }

// }
// for (let i =1 ; i< arr.length; i++){
//     if(maxthu2 < arr[i] && arr[i]<max3)
//         maxthu2= arr[i]
// }
// console.log(maxthu2)





