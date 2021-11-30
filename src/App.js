import { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import './header.css'


function App() {
  const [photos, setPhotos] = useState([])
  
  console.log(photos);

  const open = url => window.open(url)
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
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
        {photos.map(photo => 
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>
          )}
        </div>
      </div>

    </>
  );
}

export default App;
