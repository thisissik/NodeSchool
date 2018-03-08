function all(firstPromise, secondPromise) {
    return new Promise(function (fulfill, reject){
      let counter = 0;
      let arr = [];
      
      firstPromise.then(function (val){
          arr[0] = val;
          counter++;
          if (counter === 2) {
              return fulfill(arr);
          }
      })
      secondPromise.then(function (val){
        arr[1] = val;
        counter++;
        if (counter == 2) {
            return fulfill(arr);
        }
    })
    });
}


all(getPromise1(),getPromise2()).then(console.log,null);