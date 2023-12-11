import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './product';
import Delete from './delete';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Product/>
<Delete/></>
);


