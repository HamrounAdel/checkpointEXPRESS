const datefunc=(req,res,next)=>{
 const date= new Date();
 let h=date.getHours()

 if(!(h>=9   && h<=17)){
 res.send('pas disponible pour le momment')
 }next()
}

module.exports=datefunc