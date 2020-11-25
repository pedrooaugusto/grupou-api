### API GRUPOU

#### UNICARIOCA APS DE DESENVOLVIMENTO DE APLICAÇÕES DISTRIBUÍDAS, TURMA 823

Endpoints do controller `Disciplina`


Listar    HTTP GET /api/disciplina
```
fetch("/api/disciplina);
```

Mostrar   HTTP GET /api/disciplina/:id
```
fetch("/api/disciplina/1);
```

Criar     HTTP POST /api/disciplina
```
fetch("/api/disciplina", {
   method: 'POST',
   headers: new Headers({"Content-Type": "application/json"}),
   body: JSON.stringify({ descricao: 'Hello' })
})
```

Alterar   HTTP PUT /api/disciplina
```
fetch("/api/disciplina", {
   method: 'PUT',
   headers: new Headers({"Content-Type": "application/json"}),
   body: JSON.stringify({ id: 1, descricao: 'Bonjour' })
})
```

Remover   HTTP DELETE /api/disciplina/:id
```
fetch("/api/disciplina/1", { method: 'DELETE' });
```