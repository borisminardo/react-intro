import { z } from "zod";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NomeInput from "./NomeInput";
import CognomeInput from "./CognomeInput";
import TelefonoInput from "./TelefonoInput";
import EmailInput from "./EmailInput";
import { useState } from 'react';
import MyFormButton from "./MyFormButton";



function MyZodFormBase() {


const [form, setForm] = useState({
  nome: '',
  cognome: '',
  telefono: '',
  email: ''
});

const [formError, setFormError] = useState({
  nome: false,
  cognome: false,
  telefono: false,
  email: false
});

const handleValidForm = () => {
  setFormError({
    ...formError, 
    nome:  form.nome === '',
    cognome: form.cognome === '',
    telefono:  form.telefono === '',
    email: form.email === ''
});
  
}

  return (<>
            <Form
              className="form-width"
                          >
          
                <NomeInput  type='text'
                            labelName="Nome"
                            id='nome'
                            className="mb-3"
                            placeholder='Inserisci nome'
                            showErrorMessage=''
                            error={formError.nome}
                            errorMessage={formError.nome? 'Errore nel nome' : ''}
                            value={form.nome}
                            onChange={(event: { target: { value: any; }; }) => {
                             const val = event.target.value
                             setForm({...form, nome: val})
                            }}
                            >
                </NomeInput>
         
       
              <CognomeInput  type='text'
                            labelName="Cognome"
                            id='cognome'
                            className="mb-3"
                            placeholder='Inserisci cognome'
                            showErrorMessage=''
                            error={formError.cognome}
                            errorMessage={formError.cognome? 'Errore nel cognome' : ''}
                            value={form.cognome}
                            onChange={(event: { target: { value: any; }; }) => {
                              const val = event.target.value
                              setForm({...form, cognome: val})
                             }}
                            >
                </CognomeInput>
       
              <TelefonoInput  type='text'
                            labelName="Telefono"
                            id='telefono'
                            className="mb-3"
                            placeholder='3335577867'
                            showErrorMessage=''
                            error={formError.telefono}
                            errorMessage={formError.telefono? 'Errore nel telefono' : ''}
                            value={form.telefono}
                            onChange={(event: { target: { value: any; }; }) => {
                              const val = event.target.value
                              setForm({...form, telefono: val})
                             }}
                            >
                </TelefonoInput>
          
              <EmailInput    type='text'
                            labelName="Email"
                            id='email'
                            className="mb-3"
                            placeholder='nome@mail.com'
                            showErrorMessage=''
                            error={formError.email}
                            errorMessage={formError.telefono? 'Errore nella email' : ''}
                            value={form.email}
                            onChange={(event: { target: { value: any; }; }) => {
                              const val = event.target.value
                              setForm({...form, email: val})
                             }}
                            >
                </EmailInput>
       
             
              <MyFormButton
                 colore = 'primary'
                 type ='button'
                 titolo = 'Valida'
                 onClick={handleValidForm}
              >
              </MyFormButton>
            
            </Form>

 <pre><code>{JSON.stringify(form, undefined, 2)}</code></pre ></>

         
  );
}

export default MyZodFormBase;