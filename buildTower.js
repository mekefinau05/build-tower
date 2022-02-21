function towerBuilder(layers){ 

    const tower = []
    
    for(let i=0; i<layers; i++) {
      tower.push(" ".repeat(layers -i -1) 
      + "*".repeat((i*2)+1)
      + " ".repeat(layers -i - 1))  
    }
    return tower
}
console.log(towerBuilder(9))