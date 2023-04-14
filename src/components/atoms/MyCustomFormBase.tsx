import { z } from "zod";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NomeInput from "./NomeInput";
import CognomeInput from "./CognomeInput";
import TelefonoInput from "./TelefonoInput";
import EmailInput from "./EmailInput";
import { useState } from "react";
import MyFormButton from "./MyFormButton";
import MyDebuggerObj from "../../shared/MyDebuggerObj";

function MyCustomFormBase() {
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
  });

  const [formError, setFormError] = useState({
    nome: false,
    cognome: false,
    telefono: false,
    email: false,
  });

  const handleValidForm = () => {
    setFormError({
      ...formError,
      nome: form.nome === "",
      cognome: form.cognome === "",
      telefono: form.telefono === "",
      email: form.email === "",
    });
  };

  return (
    <>
      <Form className="form-width">
        <NomeInput
          type="text"
          labelname="Nome"
          id="nome"
          className=""
          stile="color-red"
          pattern="/[A-Z]$/"
          placeholder="Inserisci nome"
          errormessage={formError.nome ? "Errore nel nome" : ""}
          value={form.nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value;
            setForm({ ...form, nome: val });
          }}
        ></NomeInput>

        <CognomeInput
          type="text"
          labelname="Cognome"
          id="cognome"
          className=""
          stile="color-red"
          pattern="/[A-Z]$/"
          placeholder="Inserisci cognome"
          errormessage={formError.cognome ? "Errore nel cognome" : ""}
          value={form.cognome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value;
            setForm({ ...form, cognome: val });
          }}
        ></CognomeInput>

        <TelefonoInput
          type="text"
          labelname="Telefono"
          id="telefono"
          className=""
          stile="color-red"
          pattern="/[0-9]$/"
          placeholder="3335577867"
          errormessage={formError.telefono ? "Errore nel telefono" : ""}
          value={form.telefono}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value;
            setForm({ ...form, telefono: val });
          }}
        ></TelefonoInput>

        <EmailInput
          type="text"
          labelname="Email"
          id="email"
          stile="color-red"
          pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"
          className=""
          placeholder="nome@mail.com"
          errormessage={formError.telefono ? "Errore nella email" : ""}
          value={form.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value;
            setForm({ ...form, email: val });
          }}
        ></EmailInput>

        <MyFormButton
          colore="primary"
          type="submit"
          titolo="Valida"
          onClick={handleValidForm}
        ></MyFormButton>
      </Form>

      <MyDebuggerObj className="mt-3" obj={form}></MyDebuggerObj>
    </>
  );
}

export default MyCustomFormBase;
