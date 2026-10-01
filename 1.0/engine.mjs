function dokaly(valor) {
    return Math.sin(valor)/2
}

class NeuronioM2 {
    constructor(info) {
        this.base = dokaly(info[0].peso/dokaly(info[0].peso))
        this.naks = dokaly(info[0].labia/dokaly(info[0].labia))
        for (let i=0;i<info.length;i++) {
            this.base*=dokaly((i+2)+this.naks)
        }
        this.retorno = dokaly(this.base/50)
    }
}

// example

for (let i=0;i<50;i++) {
    let neuronio = new NeuronioM2(
        [{peso: (i+1)/5000, labia: (i+1)/50}]
    )
    console.log(`Neuronio ${i}R: ${neuronio.retorno}`)
}
