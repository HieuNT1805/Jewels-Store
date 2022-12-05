import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import { listProducts, editProduct, createProduct } from '../components/admin/Products'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <div className='App'>
      <Admin
        dashboard={AdminPanel}
        dataProvider={simpleRestProvider('http://localhost:3000')}
      >
        <Resource
          name='products'
          list={listProducts}
          edit={editProduct}
          create={createProduct}
        />
      </Admin>
    </div>
  )
}

export default App