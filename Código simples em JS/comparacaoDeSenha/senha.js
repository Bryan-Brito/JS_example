let senha = '123';
let prompt = prompt('Digite sua senha:');

while(prompt != senha){
    alert('Senha incorreta, Tente novamente');
    prompt = prompt('Digite sua senha:');
}
 
    alert('Senha Correta!');