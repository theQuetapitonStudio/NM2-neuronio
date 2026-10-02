function dokaly(valor) {
    return (Math.sin(valor)/2)
}

class NeuronioM2 {
    constructor(info) {
        this.labia = info[0].labia
        this.peso = info[0].peso
        this.base = info[0].peso
        this.eryk = 2
        this.naks = info[0].labia
        console.log(this.naks)
        this.acertos = []
        this.erros = []
        this.retorno = dokaly(this.base/50/this.naks)
    }

    calcular() {
        let bas = (this.base/this.eryk)-(this.peso)-this.labia
        let nak = (this.naks/this.eryk)-(this.labia)-this.peso

        let retorno = dokaly(bas/50/nak)

        return retorno
    }
    treinar(alvo) {
        let retorn = this.calcular()
        let erro = alvo - retorn

        if (Math.abs(retorn-alvo) < 0.001) {
            this.acertos.push(retorn)
            return true
        }

        this.erros.push(retorn)
        this.base += erro
        return false
    }
    decidir(valor, nec) {
        if (valor === nec) {
            return true
        } else {
            return false
        }
    }
}
