import { Formik, Form, Field } from 'formik';
import './header.css'


function App() {


  return (
    <>
      <header>
        <Formik
          initialValues={{ search: '' }}

          onSubmit={async values => {
            //llamar a API
            console.log(values)
          }}
          >
        <Form>
          <Field name="search"></Field>
        </Form>
        </Formik>
      </header>
    </>
  );
}

export default App;
