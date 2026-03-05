export class Cliente{
    #CPF
    constructor(nome, CPF, endereco){
        this.nome = nome;
        this.#CPF = CPF;
        this.endereco = endereco;
        this.telefones = new Set()
    }
    get PegaCPFCliente(){
        return this.#CPF
    }
    get PegaCPFClienteMaiusculo(){
        return this.#CPF.toUpperCase()
    }
    get PegaCPFClienteMinusculo(){
        return this.#CPF.toLowerCase()
    }

    get PegaNomeClienteMaiusculo(){
        return this.nome.toUpperCase()
    }
    get PegaNomeClienteMinusculo(){
        return this.nome.toLowerCase()
    }
}

export class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero
    }
    get PegaDDDTelefoneMaiusculo(){
        return this.ddd.toUpperCase()
    }
    get PegaDDDTelefoneMinusculo(){
        return this.ddd.toLowerCase()
    }

    get PegaNumeroTelefoneMaiusculo(){
        return this.numero.toUpperCase()
    }
    get PegaNumeroTelefoneMinusculo(){
        return this.numero.toLowerCase()
    }
}

export class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero
    }
    get PegaEstadoEnderecoMaiusculo(){
        return this.estado.toUpperCase()
    }
    get PegaEstadoEnderecoMinusculo(){
        return this.estado.toLowerCase()
    }

    get PegaCidadeEnderecoMaiusculo(){
        return this.cidade.toUpperCase()
    }
    get PegaCidadeEnderecoMinusculo(){
        return this.cidade.toLowerCase()
    }

    get PegaRuaEnderecoMaiusculo(){
        return this.rua.toUpperCase()
    }
    get PegaRuaEnderecoMinusculo(){
        return this.rua.toLowerCase()
    }

    get PegaNumeroEnderecoMaiusculo(){
        return this.numero.toUpperCase()
    }
    get PegaNumeroEnderecoMinusculo(){
        return this.numero.toLowerCase()
    }
}

export class Empresa{
    #CNPJ
    constructor(razaoSocial, nomeFantasia, CNPJ, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#CNPJ = CNPJ;
        this.clientes = new Set();
        this.telefones = new Set()
    }
    get PegaCNPJEmpresa(){
        return this.#CNPJ
    }
    get PegaCNPJEmpresaMaiusculo(){
        return this.#CNPJ.toUpperCase()
    }
    get PegaCNPJEmpresaMinusculo(){
        return this.#CNPJ.toLowerCase()
    }

    get PegaRazaoSocialEmpresaMaiusculo(){
        return this.razaoSocial.toUpperCase()
    }
    get PegaRazaoSocialEmpresaMinusculo(){
        return this.razaoSocial.toLowerCase()
    }

    get PegaNomeFantasiaMaiusculo(){
        return this.nomeFantasia.toUpperCase()
    }
    get PegaNomeFantasiaMinusculo(){
        return this.nomeFantasia.toLowerCase()
    }

    detalhe(){
        let relatorio = `Razão Social: ${this.razaoSocial}\n Nome Fantasia: ${this.nomeFantasia}\n`
        relatorio += "----------------------------------------------------- \n"
        this.clientes.forEach(cliente => {
            relatorio += `Nome: ${cliente.nome}\n`
            relatorio += `Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero} \n`
            cliente.telefones.forEach(telefone => {
                relatorio += `ddd: ${telefone.ddd} numero: ${telefone.numero} \n`
            })
            relatorio += "----------------------------------------------------- \n"
        })
        return relatorio
    }
}