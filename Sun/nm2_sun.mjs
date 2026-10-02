// nm2 sun 
// ideias: Woek, Nokw, novos parâmetros

function dokaly(valor) {
    return Math.sin(valor)*Math.cos(valor/5)
}


class NeuronioM2 {
    constructor(info) {
        // parâmetros
        this.labia = info[0].labia
        this.peso = info[0].peso
        this.nokw = info[0].nokw
        this.woek = info[0].woek

        // outros
        this.base = this.labia/this.peso*this.woek
        this.eryk = this.labia*this.peso/this.nokw
        this.naks = this.nokw/this.woek
        this.acertos = []
        this.erros = []
        this.retorno = dokaly(this.base/50/this.naks/50)
    }

    calcular() {
        let bas = (this.base*this.eryk)-(this.peso)-this.labia
        let nak = (this.naks*this.eryk)-(this.labia)-this.peso
        let woe = (this.woek*this.eryk)-(this.nokw)-this.peso
        let nok = (this.nokw*this.eryk)-(this.woek)-this.labia
        let rn = Math.random()*1
        let retorno = dokaly(bas+nak-woe+nok)*rn

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
    decidir(valor) {
        if (valor <= 0.5) {
            return true
        } else {
            return false
        }
    }
}
