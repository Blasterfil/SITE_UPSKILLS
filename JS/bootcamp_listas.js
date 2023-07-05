function  fillTable_v2(){
    /*Vai buscar a lista .JSON*/
    fetch('JS/bootcamp_listas.json')
    /*RESPONSE e a var do conteudo da lista JSON*/    
    .then(response => response.json())
        /*DATA e a variavel que contem a informação JSON*/       
        .then(data => {
            
            const bootcamps = data;
            /*Inserir a informação na TABELA COM ID "tabela"*/
            const tabela = document.getElementById("tabela");
            /*Criar os TITULOS das COLUNAS*/
            tabela.innerHTML = "<tr><th>Curso</th><th>Academias</th><th>Localizações</th><th>Estado</th></tr>";
            /*PREENCHER A TABELA de acordo com os titulos enquanto houver info*/
            for (let bootcamp of bootcamps){
                tabela.innerHTML += `<tr><td>${bootcamp.Curso}</td><td>${bootcamp.Academia}</td><td>${bootcamp.Localização}</td><td>${bootcamp.Estado}</td></tr>`;
            }
        })

    
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}
