import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [session] = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  if (session) {
    router.push('/');
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
}
