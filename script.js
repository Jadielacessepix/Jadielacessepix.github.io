/ Monitorar o estado de autenticação
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuário está logado: ", user);
        // Atualizar a interface do usuário
        document.getElementById("user-info").style.display = "block";
        document.getElementById("login-area").style.display = "none";
        document.getElementById("user-name").innerText = user.displayName; // Exibe o nome do usuário logado
    } else {
        console.log("Usuário não está logado");
        // Ocultar informações do usuário
        document.getElementById("user-info").style.display = "none";
        document.getElementById("login-area").style.display = "block";
    }
});
