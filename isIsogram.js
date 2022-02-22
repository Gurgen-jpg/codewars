function isIsogram(rrr){
    let result = true;
    
        rrr.toUpperCase()
        .split('')
        .forEach(function(element, index, arr) {
            if (arr.indexOf(element) !== index) {
                return (result = false)
            }
        });
        return result
  }
