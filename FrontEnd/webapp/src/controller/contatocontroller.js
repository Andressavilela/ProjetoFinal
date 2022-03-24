import axios from "axios";

const CONTATO_API_URL = "http://localhost:8080/contato";

class contatocontroller {
  getAllContato() {
    return axios.get(CONTATO_API_URL);
  }

  createContato(contato) {
    return axios.post(CONTATO_API_URL, contato);
  }

  getContatoById(contatoId) {
    return axios.get(CONTATO_API_URL + "/" + contatoId);
  }

  updateContato(contatoId, contato) {
    return axios.put(CONTATO_API_URL + "/" + contatoId, contato);
  }

  deleteContato(contatoId) {
    return axios.delete(CONTATO_API_URL + "/" + contatoId);
  }
}

export default new contatocontroller();