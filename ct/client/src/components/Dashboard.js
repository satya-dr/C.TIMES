// Dashboard.js বেসিক স্ট্রাকচার
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* ড্যাশবোর্ড কন্টেন্ট */}
    </div>
  );
}