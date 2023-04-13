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



/* const formSchema = z
  .object({
    nome: z.string().regex((/^[A-Z]*$/), 'Solo lettere maiuscole'),
    cognome: z.string().regex((/^[A-Z]*$/), 'Solo lettere maiuscole'),
    telefono: z.string().regex((/^\d+$/), 'Solo numeri').transform(Number),
    email: z.string().email({ message: "Invalid email address" }).toLowerCase()
  }) */


/* type FormSchemaType = z.infer<typeof formSchema>;
 */
function MyZodFormBase() {
  /* const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  }); */

const [form, setForm] = useState({
  nome: '',
  cognome: '',
  telefono: '',
  email: ''
});

/*   const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  } */
  return (<>
            <Form
              className="form-width"
             /*  onSubmit={handleSubmit(onSubmit)} */
            >
          
                <NomeInput  type='text'
                            labelName="Nome"
                            id='nome'
                            className="mb-3"
                            placeholder='Inserisci nome'
                            showErrorMessage=''
                            error=''
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
                            error=''
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
                            error=''
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
                            error=''
                            value={form.email}
                            onChange={(event: { target: { value: any; }; }) => {
                              const val = event.target.value
                              setForm({...form, email: val})
                             }}
                            >
                </EmailInput>
       
      
              <Button
              variant="primary"
                type="submit"
               /*  disabled={isSubmitting} */
              >
               Submit
              </Button>
            </Form>

 <pre><code>{JSON.stringify(form, undefined, 2)}</code></pre ></>

         
  );
}

export default MyZodFormBase;