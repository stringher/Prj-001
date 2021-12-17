<script type="text/javascript">

    function checkForm() {
        // Fetching values from all input fields and storing them in variables.
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var fone = document.getElementById("telefone").value;
        var mensagem = document.getElementById("mensagem").value;

        //Check input Fields Should not be blanks.
        if (nome == '' || email == '' || fone == '' || mensagem == '') {
            alert("Por favor preencha todos os campos.");
            return false;
        } else {
            //Notifying error fields
            var name = document.getElementById("nome");
            var mail = document.getElementById("email");
            var telefone = document.getElementById("telefone");
            var mensagemp = document.getElementById("mensagem");
            //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
            if (name.innerHTML == 'Nome' || mail.innerHTML == 'E-mail' || telefone.innerHTML == 'Telefone' || mensagemp.innerHTML == 'Sua Mensagem') {
                alert("Por favor, preencha o formul&aacute;rio com informa&ccedil;&otilde;es v&aacute;lidas");
                return false;
            } else {
                //Submit Form When All values are valid.
                document.getElementById("myForm").submit();
                return true;
            }

        }
    }
</script>