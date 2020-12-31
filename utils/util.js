const parser = ms => {
  
  //console.log("show",ms,Math.floor(ms/1000/60))
  return Math.floor(ms/1000/60)+":"+Math.floor(ms/1000%60)
}



module.exports = {
  parser
}
