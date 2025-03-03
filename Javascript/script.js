// let d={
//     ecstatic:"something diff",
//     insensitive:"indifferent",
//     dev:"developer",
//     num:8826
// }
// s1=8
// s2=4
// s3=17
// if(s1<s2+s3 && s2<s1+s3 && s3<s1+s2 ){
//     console.log("true11","true22,","true33")
//     console.log("its a triangle")
// }
// else{
//     console.log("not a triangle")
// }
// let i="joker got killed by batman"
// console.table([s1,s2,s3,i])
Array.prototype.mypush= function(...l){
    for (let i=0;i<l.length;i++){
        this[this.length] = l[i]
    }
    return this.length
}
mun=[57,55]
mun.mypush(89,98,0)
//console.log(mun)
Array.prototype.mypop= function(p){
    if (this.length===0){
        return undefined
    }
    else{
        this.length= this.length-1
        return this.length;
    }
}
mun=mun.mypop()
console.log(mun)