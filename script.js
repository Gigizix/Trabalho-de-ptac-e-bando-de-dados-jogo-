fetch('http://localhost:5050/score')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição'); 
    }
    return response.json();
  })
  .then(data => {
    const amougusList = data.results
    amougusList.forEach(amougus => {
      criarElemento(amougus.name, amougus.url)
    });
  })
  .catch(error => {
    console.log(error);
  });