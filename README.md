# projeto_api_rest_nodejs

#Rotas:

<ul>
  <li>Cadastrar cidade                 </li>
  
  POST: http://localhost:3000/api/cities
  
  exemplo:
  {
    "name": "Rio Grande",
    "state": "Rio Grande do Sul"
  }
  
  
  <li>Cadastrar cliente                </li>
    
  POST: http://localhost:3000/api/clients
  
  exemplo:
  {
    "full_name": "Fulano Beltrano",
    "gender": "Masculino",
    "date_of_birth": "2000-01-01",
    "city": "1"
  }
  
  
  
  <li>Consultar cidade pelo nome       </li>
    
  GET: http://localhost:3000/api/cities/name=:name
  
  exemplo:
  
  http://localhost:3000/api/cities/name=rio%20grande
  
  
  <li>Consultar cidade pelo estado     </li>
    
  GET: http://localhost:3000/api/cities/state=:state
  
  exemplo:
  
  http://localhost:3000/api/cities/state=rio%20grande%20do%20sul
  
  
  <li>Consultar cliente pelo nome      </li>
    
  GET: http://localhost:3000/api/clients/name=:full_name
  
  exemplo:
  
  http://localhost:3000/api/clients/name=fulano%20beltrano
  
  
  <li>Consultar cliente pelo Id        </li>
    
  GET: http://localhost:3000/api/clients/:id
  
  exemplo:
  
  http://localhost:3000/api/clients/1
  
  <li>Remover cliente                  </li>
    
  DELETE: http://localhost:3000/api/clients/:id
  
  exemplo:
  
  http://localhost:3000/api/clients/1
  
  <li>Alterar o nome do cliente        </li>
    
  PATCH: http://localhost:3000/api/clients/:id
  
  exemplo:
  
  http://localhost:3000/api/clients/1
  
  {
    "full_name": "Ciclano Pereira"
  }
  
<ul>
