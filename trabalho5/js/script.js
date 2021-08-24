var value = 1;

            document.addEventListener('keypress', function(e){
                if(e.which == 13){
                  adiciona();
                }
              }, false);

              function limite(element)
              {
                  var maximo = 70;
              
                  if(element.value.length > maximo) {
                    element.value = element.value.substr(0, maximo);
                  }
              }

            function adiciona() {
              var ing = document.getElementById("atv").value;

              if(ing != ""){ 
                var lista  = document.getElementById("lista").innerHTML;
                // Obs.: resolvemos por um botão para marcar a atividade como comcluida, para que ajude o usuário a se 
                //localizar facilitando e melhorando a experiendele para/com o sistema
                lista = lista +"<li class='table-row' id='li"+value+"'>"
                              +"<div class='col col-1' data-label='Descrição'>"+ing+"</div>"
                              +"<div class='col col-2' data-label='Ação'><button class='rem' onclick='remove("+value+")'>&#10006;</button><button class='check' onclick='concluido("+value+")'>&#10004;</button></div>"
                              +"</li>";


                document.getElementById("lista").innerHTML = lista;
                document.getElementById("atv").value = "";
                value += 1;
              }else {
                alert("Você precisa digitar algo...");
              }
            }
            
            function remove(id){
              var node = document.getElementById("li"+id);
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              }
            }
            
            function concluido(id) {
              document.getElementById("li"+id).style.backgroundColor = 'orange' ; 
              }