import { z } from "zod";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NomeInput from "./NomeInput";
import CognomeInput from "./CognomeInput";
import TelefonoInput from "./TelefonoInput";
import EmailInput from "./EmailInput";


const formSchema = z
  .object({
    nome: z.string().regex((/^[A-Z]*$/), 'Solo lettere maiuscole'),
    cognome: z.string().regex((/^[A-Z]*$/), 'Solo lettere maiuscole'),
    telefono: z.string().regex((/^\d+$/), 'Solo numeri').transform(Number),
    email: z.string().email({ message: "Invalid email address" }).toLowerCase()
  })


type FormSchemaType = z.infer<typeof formSchema>;

function MyZodFormBase() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  }
  return (
            <Form
              className="form-width"
              onSubmit={handleSubmit(onSubmit)}
            >
          
                <NomeInput  type='text'
                            labelName="Nome"
                            id='nome'
                            className="mb-3"
                            placeholder='Inserisci nome'
                            showErrorMessage={errors.nome? true : false}
                            error={errors.nome?.message}
                            /* {...register('nome')} */
                            >
                </NomeInput>
         
       
              <CognomeInput  type='text'
                            labelName="Cognome"
                            id='cognome'
                            className="mb-3"
                            placeholder='Inserisci cognome'
                            showErrorMessage={errors.cognome? true : false}
                            error={errors.cognome?.message}
                            /* {...register('cognome')} */
                            >
                </CognomeInput>
       
              <TelefonoInput  type='text'
                            labelName="Telefono"
                            id='telefono'
                            className="mb-3"
                            placeholder='3335577867'
                            showErrorMessage={errors.telefono? true : false}
                            error={errors.telefono?.message}
                            /* {...register('telefono')} */
                            >
                </TelefonoInput>
          
              <EmailInput    type='text'
                            labelName="Email"
                            id='email'
                            className="mb-3"
                            placeholder='nome@mail.com'
                            showErrorMessage={errors.email? true : false}
                            error={errors.email?.message}
                            /* {...register('email')} */
                            >
                </EmailInput>
       
      
              <Button
              variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
               Submit
              </Button>
            </Form>
         
  );
}

export default MyZodFormBase;