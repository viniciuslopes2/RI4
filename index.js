import {Cliente, Telefone, Endereco, Empresa} from "./classes.js";

let enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av. José Longo', '234')

let empresaFantasma = new Empresa('ABC TM', 'Caça-Fantasmas', '123456789/0001-90', enderecoEmpresa)

empresaFantasma.telefones.add(new Telefone('12', '111234590'))
empresaFantasma.telefones.add(new Telefone('12', '222341829'))

let enderecoCliente1 = new Endereco('SP', 'São José dos Campos', 'Av. Andrômeda', '987')
let cliente1 = new Cliente('Vinícius', '123456789010', enderecoCliente1)
cliente1.telefones.add(new Telefone('12', '999990000'))
cliente1.telefones.add(new Telefone('12', '111223456'))

let enderecoCliente2 = new Endereco('SP', 'São José dos Campos', 'Av. Adhemar', '842')
let cliente2 = new Cliente('André', '00000000000', enderecoCliente2)
cliente2.telefones.add(new Telefone('11', '0000001234'))
cliente2.telefones.add(new Telefone('12', '1123412942'))

let enderecoCliente3 = new Endereco('SP', 'São José dos Campos', 'Av. Cassiano Ricardo', '568')
let cliente3 = new Cliente('Edgar', '234567890123', enderecoCliente3)
cliente3.telefones.add(new Telefone('23', '1123941989'))
cliente3.telefones.add(new Telefone('12', '8882842109'))

let enderecoCliente4 = new Endereco('SP', 'São José dos Campos', 'Av. Dep. Benedito Matarazzo', '423')
let cliente4 = new Cliente('Arvo', '22222222222', enderecoCliente4)
cliente4.telefones.add(new Telefone('52', '9992384121'))
cliente4.telefones.add(new Telefone('12', '1111111111'))

let enderecoCliente5 = new Endereco('SP', 'São José dos Campos', 'Av. Anchieta', '666')
let cliente5 = new Cliente('Jack', '66666666666', enderecoCliente5)
cliente5.telefones.add(new Telefone('12', '2123412341'))
cliente5.telefones.add(new Telefone('88', '4445123583'))

empresaFantasma.clientes.add(cliente1)
empresaFantasma.clientes.add(cliente2)
empresaFantasma.clientes.add(cliente3)
empresaFantasma.clientes.add(cliente4)
empresaFantasma.clientes.add(cliente5)

console.log(empresaFantasma.detalhe())