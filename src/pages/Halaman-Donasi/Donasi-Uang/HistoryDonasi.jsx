import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const HistoryDonasi = () => {
  const [transactions, setTransactions] = useState([]);
  const dataLocalStorage = localStorage.getItem("data");
  const [filter, setFilter] = useState('all');
  const userData = JSON.parse(dataLocalStorage);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_LINK_API}/donasi/detail-uang/${userData._id}`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error.message);
      }
    };

    fetchTransactions();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return 'green';
      case 'expire':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'black';
    }
  };

  const getSoftStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return '#a7f1a7';
      case 'expire':
        return '#ff9999'; 
      case 'Pending':
        return '#fff099'; 
      default:
        return '#cccccc'; 
    }
  };
  

  return (
    <div className="transaction-list d-flex flex-column align-items-center">
      <h2>Detail Transaksi</h2>
      <div className='mt-3 mb-5'>
        <button style={{ padding: '10px', width: "85px", margin: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '15px' }} onClick={() => handleFilterChange('all')}>Semua</button>
        <button style={{ padding: '10px', width: "85px", margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '15px' }} onClick={() => handleFilterChange('Success')}>Berhasil</button>
        <button style={{ padding: '10px', width: "85px", margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '15px' }} onClick={() => handleFilterChange('expire')}>Gagal</button>
        <button style={{ padding: '10px', width: "85px", margin: '5px', backgroundColor: '#e7e700', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '15px' }} onClick={() => handleFilterChange('Pending')}>Pending</button>
      </div>
      {transactions.filter((transaction) => filter === 'all' || transaction.status === filter).length === 0 ? (
        <p>Tidak ada data donasi 😊</p>
      ) : (
        transactions.filter((transaction) => filter === 'all' || transaction.status === filter).map((transaction) => (
          <Card key={transaction._id} className="mb-3" style={{ width: '80%', height: 'auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Header>
              <strong>{transaction.tanggal}</strong>
            </Card.Header>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <div>
                  <small className='text-muted fs-7'>Order ID</small>
                  <Card.Text className='fw-medium'>{transaction.orderId}</Card.Text>
                </div>
                <Card.Text>
                  <img src={transaction.logo_metode_pembayaran} alt="Payment Method" style={{ width: '100px', height: 'auto' }} />
                </Card.Text>
              </div>
              <div className="text-right">
                <Card.Text>
                {(transaction.status === 'Pending' || transaction.status === 'Expired') ? '-' : ' '}{formatToRupiah(transaction.nominal)}
                </Card.Text>
                <Card.Text 
                  className='fw-semibold' 
                  style={{ 
                    color: getStatusColor(transaction.status),
                    backgroundColor: getSoftStatusColor(transaction.status),
                    border: '1px solid #D0D0D0',
                    borderRadius: '25px', 
                    padding: '5px',
                    textAlign: 'center' 
                  }}
                >
                  {transaction.status}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default HistoryDonasi;