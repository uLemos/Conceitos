let conta = parseFloat(prompt('Digite o valor da conta a pagar:'))
let gorgeta = parseFloat(prompt('Digite a porcentagem da gorgeta:'))

let resultado = parseFloat(conta + (conta * (gorgeta/100)))

alert(`O valor total a pagar é de $${resultado.toFixed(2)} reais`)
 