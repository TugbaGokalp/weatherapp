import React from 'react';
import { Table } from 'react-bootstrap';

const İletisim = () => {
  return (
    <div>
      <h1>İletişim</h1>
      <Table className='mt-5 w-75 m-auto text-light' striped bordered hover>
        <thead>
          <tr>
            <th>Telefon</th>
            <th>Adres</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(0555) 500 76 89</td>
            <td>Cumhuriyet Mahallesi / Beylikdüzü / İST</td>
            <td>tugbagokalp7265@gmail.com</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3' className='text-center'>
              Bizimle iletişime geçmek için yukarıdaki bilgileri kullanabilirsiniz.
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default İletisim;
