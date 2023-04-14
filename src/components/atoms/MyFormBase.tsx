import {Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {Button} from 'react-bootstrap';


function MyFormBase() {
    const {
      register, 
      handleSubmit,
      formState: {errors},
    } = useForm();
      
  return (
    <>
    <Form onSubmit={handleSubmit((data)=> {
      console.log(data)
      })}>    
    <div>Nome</div>
      <input className="mb-3" placeholder="Inserisci nome" type="text" {...register('nome', {pattern: /[A-Z]$/})}/>
      {errors.nome && <p style={{color: "red"}}>Inserire solo lettere maiuscole.</p>}
    <div>Cognome</div>
      <input className="mb-3" placeholder="Inserisci cognome" type="text" {...register('cognome' , {pattern: /[A-Z]$/})}/>
      {errors.cognome && <p style={{color: "red"}}>Inserire solo lettere maiuscole.</p>}
    <div>Telefono</div>
      <input className="mb-3" placeholder="Inserisci telefono" {...register('telefono', {pattern: /[0-9]$/})}/>
      {errors.telefono && <p style={{color: "red"}}>Inserire solo numeri.</p>}
    <div>Email</div>
      <input className="mb-3" placeholder="Inserisci email" {...register('email', {pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/})}/>
      {errors.email && <p style={{color: "red"}}>Email non valida.</p>}
       <div>
        <Button variant="primary" type="submit">
      Submit
    </Button></div>
    </Form>
    </>

    
  )
}

export default MyFormBase