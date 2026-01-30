import { useState, useEffect } from 'react';
import { onToast } from '../utils/toast';

export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    onToast((t) => {
      setToast(t);
      setTimeout(() => setToast(null), 3000);
    });
  }, []);

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`}>
      {toast.message}
    </div>
  );
}
