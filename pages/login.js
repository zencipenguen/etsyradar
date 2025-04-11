
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'penguen' && password === 'Penguen31') {
      router.push('/dashboard');
    } else {
      alert('Incorrect login');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg-gray-100 p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4 text-center">EtsyRadar Giriş</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}
