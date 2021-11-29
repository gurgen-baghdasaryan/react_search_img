import { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import './header.css'


function App() {
  const [photos, setPhotos] = useState([])
  console.log(photos);
  return (
    <>
      <header>
        <Formik
          initialValues={{ search: '' }}

          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': ' Client-ID fPlz8UEO_2tEcpOmeQnfv0-p2AfHf4WMHvJCqErbWEk'
              }
            })
            const data = await response.json()
            console.log(data)
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
