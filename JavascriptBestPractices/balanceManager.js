var balance = 0;
module.exports = {
    
    canAfford: function(amount){
        if(!this.isValidAmount(amount)){
          throw new Error("Inavlid Input");
        }
        return amount <= balance;
      },
    
      decreaseBalance: function(amount){
        if(!this.canAfford(amount)){
            throw new Error("Insufficient balance");
        }
        balance -= amount;
      },

      increaseBalance: function(amount){
        balance += amount;
      },

      getBalance: function(){ 
        return balance;
      },
      isValidAmount: function(amount){
        if(amount === null || amount === undefined){
          return false;
        } else {
          return true;
        }
      },
};