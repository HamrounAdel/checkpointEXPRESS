const datefunc=(req,res,next)=>{
 const date= new Date();
 let h=date.getHours()
 let d=date.getDay()
 if((!(h>=9   && h<=17)) || (!(d>=1 && d<=5))){
 res.send('pas disponible pour le momment')
 }next()
}

module.exports=datefunc