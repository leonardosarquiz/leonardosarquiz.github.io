export default function validacaoForm() {
  function validarTelefone() {
    const telefone = document.getElementById('number').value;
    const regex = /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/;
    if (!regex.test(telefone)) {
      alert('Telefone inválido!');
      return false;
    }
    return true;
  }
}
/* validacao fumero telefone */
