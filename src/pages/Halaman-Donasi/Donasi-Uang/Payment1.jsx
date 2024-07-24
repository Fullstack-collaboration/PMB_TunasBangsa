import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const dataLocalStorage = localStorage.getItem("data");
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
      case 'expired':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'black';
    }
  };
  

  return (
    <div className="transaction-list">
      <h2>Detail Transaksi</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map((transaction) => (
          <Card key={transaction._id} className="mb-3">
            <Card.Header>
              <strong>{transaction.tanggal}</strong>
            </Card.Header>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>{transaction.orderId}</Card.Title>
                <Card.Text>
                  <img src={transaction.logo_metode_pembayaran} alt="Payment Method" style={{ width: '100px', height: 'auto' }} />
                </Card.Text>
              </div>
              <div className="text-right">
                <Card.Text>
                {(transaction.status === 'Pending' || transaction.status === 'Expired') ? '-' : ' '}{formatToRupiah(transaction.nominal)}
                </Card.Text>
                <Card.Text className='fw-semibold' style={{ color: getStatusColor(transaction.status) }}>
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

export default TransactionList;