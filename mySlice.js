Object.prototype.mySlice = function (start=0,end = this.length){
    var arr = this;
    var subArr=[];
    if(start<0 ){
        start=this.length+start;
    }
    if(end<0){
        end=this.length+end;
    }
    for(var i=start;i<end;i++){
        subArr.push(arr[i]);
        if(typeof(arr)=="string"){
            arr+=this[i];
        }
    }
    return subArr;
}
