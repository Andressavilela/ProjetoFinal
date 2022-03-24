import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContatoService from "../controller/contatocontroller";
import "../assets/css/style.css";
 
export default function Index(){
  const [contato, setContato] = useState([]);

  const getAllContato = () => {
        ContatoService.getAllContato()
            .then((response) => {
                setContato(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

  useEffect(() => {
    getAllContato();
  }, []);

  const deleteContato = (contatoId) => {
    ContatoService.deleteContato(contatoId)
      .then((response) => {
        getAllContato();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
    <main className="cont">
   
      <header className="header" id="primary">
        <h1 className="container">Cadastrar Contato</h1>
      </header>
     
      <div className="container p-5">
        <Link to="/Contato-Create" className="btn btn-info mb-2">
          Novo Contato
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
              <br /><br />  <br /><br />  
                <th>Contato</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contato.map((contato) => (
                <tr className="text-white tr-hover"key={contato.id}>
                  <td className="text-black">{contato.id}</td>
                  <td className="text-black">{contato.nome}</td>
                  <td className="text-black">{contato.email}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Contato-Update/${contato.id}`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-denger"
                      onClick={() => deleteContato(contato.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br /><br />  <br /><br />  <br /><br />  <br /><br />  <br /><br />
      <br /><br />  <br /><br />  <br /><br />  <br /><br />  <br /><br />
  </main>
    </>
    

    
    

  );
  
}
