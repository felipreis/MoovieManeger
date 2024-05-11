class Filme {

    constructor(titulo,anoLancamento,status){
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.status = status;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    getAnoLancamento(){
        return this.anoLancamento;
    }

    setAnoLancamento(anoLancamento){
        this.anoLancamento = anoLancamento;
    }

    getstatus(){
        return this.status;
    }

    setStatus(status){
        this.status = status;
    }

}