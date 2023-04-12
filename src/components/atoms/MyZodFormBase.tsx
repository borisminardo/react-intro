import { z } from "zod";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div>Nome</div>
                <input
                  type="text"
                  id="nome"
                  className="mb-3"
                  placeholder="Il tuo nome"
                  {...register("nome")}
                />
                {errors.nome && (<p style={{color: "red"}}>{errors.nome?.message}</p>
                )}
              </div>
              <div>
                <div>Cognome</div>
                <input
                  type="text"
                  id="cognome"
                  className="mb-3"
                  placeholder="Il tuo cognome"
                  {...register("cognome")}
                />
                {errors.cognome && (<p style={{color: "red"}}>{errors.cognome?.message}</p>
                )}
              </div>
              <div>
                <div>Telefono</div>
                <input
                  type="text"
                  id="telefono"
                  className="mb-3"
                  placeholder="Il tuo telefono"
                  {...register("telefono")}
                />
                {errors.telefono && (<p style={{color: "red"}}>{errors.telefono?.message}</p>
                )}
              </div>
              <div>
              <div>Email</div>
                <input
                  type="email"
                  id="email"
                  className="mb-3"
                  placeholder="name@company.com"
                  {...register("email")}
                />
                {errors.email && (<p style={{color: "red"}}>{errors.email?.message}</p>
                )}
              </div>
      
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