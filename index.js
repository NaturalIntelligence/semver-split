module.exports = function(str){
    var result  = {};
    var index = str.indexOf(".");
    result.major = str.substr(0, index);
    index++;
    var nextIndex = str.indexOf(".", index);
    if(nextIndex === -1){
        result.minor = str.substring(index);
    }else{
        result.minor = str.substring(index, nextIndex);
        result.patch = str.substring(nextIndex + 1);
    }
    
    return result;
}