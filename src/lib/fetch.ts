const api_url = process.env.REACT_APP_API_URL;

function handleErrors(response: any) {
  if (!response.ok) {
    switch (response.status) {
      case 500:
        console.log("Erro:", response.data.message);
        break;
      case 503:
        console.log("Erro:", response.data.message);
        break;
      case 404:
        console.log("Erro: Rota não encontrada.");
        break;
      case 401:
        console.log("Erro: Not authorized.");
        break;
      case 400:
        console.log("Erro:", response.data.message);
        break;
      default:
        break;
    }
  }
  return response;
}

const getFetch = async (url: string, params: string) => {
  console.log(`${api_url}${url}/${params}`);
  const response = await fetch(`${api_url}${url}/${params}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(handleErrors)
    .then((response) => {
      return response.json();
    });

  return response;
};

export default getFetch;
