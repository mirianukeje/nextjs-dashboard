import { Suspense } from 'react';
import LoginForm from '@/app/ui/login-form';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
