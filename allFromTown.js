function countAllFromTown (regNum, startString) {
    var arrNum = [];
    var splitReg = regNum.split(",");
    console.log(splitReg); 
    
    for (var i=0; i<splitReg.length; i++) {
      var newRegNumList = splitReg[i].trim();
      if (newRegNumList.startsWith(startString)) {
        arrNum.push(newRegNumList); 
        //console.log(arrNum); 
      }
    }
  return arrNum.length; 
  }
  console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL')); 