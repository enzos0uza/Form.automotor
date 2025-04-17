function enviarform() {
    const nome = document.getElementById("inNome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cnpj = document.getElementById("cnpj").value.trim();
    const genero = document.querySelector('input[name="genero"]:checked');
    const residencia = document.querySelector('input[name="residencia"]:checked');
    const pais = document.getElementById("pais").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const dataNascimento = document.getElementById("data-nascimento").value;

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !sobrenome || !email || !celular || !cpf || !cnpj ||
        !pais || !estado || !cidade || !bairro || !rua || !numero || !dataNascimento) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Email inválido.");
        return;
    }

    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Formato correto: 000.000.000-00");
        return;
    }

    if (!cnpjRegex.test(cnpj)) {
        alert("CNPJ inválido. Formato correto: 00.000.000/0000-00");
        return;
    }

    if (celular.length < 9) {
        alert("Celular inválido.");
        return;
    }

    if (!genero) {
        alert("Selecione o gênero.");
        return;
    }

    if (!residencia) {
        alert("Selecione o tipo de residência.");
        return;
    }

    
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    if (nascimento > hoje) {
        alert("Data de nascimento não pode ser no futuro.");
        return;
    }

    
    alert("Formulário enviado com sucesso!");
}