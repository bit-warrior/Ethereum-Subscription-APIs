const Web3=require('web3')

const chalk=require('chalk')
function subscribe(url){
      //
    this.web3 = new Web3(url?url:"wss://mainnet.infura.io/_ws");
}


subscribe.prototype.watchEventLogs=function(){
    let self=this.web3
    this.web3.eth.subscribe('logs', {
        address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
        topics: ['0x0a5311bd2a6608f08a180df2ee7c5946819a649b204b554bb8e39825b2c50ad5']
    },function(error, result){
        if (!error)
            console.log(result);
    })
    
    .on("data", function(logs){
        
     console.log(logs)
     console.log(chalk.yellow("-------------------A new Crypto kitty is born-------------------------------"))

    });
   
}

subscribe.prototype.subscribePendingTrx=function(){
    let self=this.web3
    this.web3.eth.subscribe('pendingTransactions', function(error, result){
        if (!error)
            console.log(result);
    })
    
    .on("data", function(transaction){
        
        
        self.eth.getTransaction(transaction,function(err,result){
           
            console.log(result);
        })

    });
   
}




module.exports=subscribe