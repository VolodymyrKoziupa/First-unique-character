


function firstUniqueChar ()  {
    let string = document.getElementById("myText").value;
   
    let charObj = {};
    for(i in string){
      charObj[string[i]] ? charObj[string[i]]++ : charObj[string[i]]=1;
    }
    for(key of Object.keys(charObj)){
      if(charObj[key]===1){
    //    return key.toLowerCase(); 
       return  document.getElementById("demo").innerHTML = key.toLowerCase();
       }
    }
    return  document.getElementById("demo").innerHTML = 'Not Found';
  }



