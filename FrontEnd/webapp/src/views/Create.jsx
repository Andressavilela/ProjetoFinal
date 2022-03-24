import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import contatocontroller from "../controller/contatocontroller";

export default function Create() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams(); 
  const navigate = useNavigate();

  const criarOuEditarContato = (e) => {
    e.preventDefault();

    const contato = { nome, email };

    if (id) {
        contatocontroller.updateContato(id, contato)
        .then((response) => {
            navigate("/Contato")
        });

    } else {
        contatocontroller.createContato(contato)
        .then((response) => {
            navigate("/Contato")
        });
    }
  }

  useEffect(() => {
      function getContatoById() {
        if (id) {
            contatocontroller.getContatoById(id)
            .then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.log(error);
            });
        }
      }
      getContatoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar Contato"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarContato(e)}>
            Enviar
          </button>
          <Link
            to="/Contato"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
