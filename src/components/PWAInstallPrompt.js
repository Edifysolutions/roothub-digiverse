import React, { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  if (!isInstallable) return null;

  return (
    <div style={styles.banner}>
      <div>
        <strong>📲 Install Roothub Digiverse</strong>
        <p style={{ margin: 0, fontSize: '12px', color: '#4b5563' }}>Read comics & do exercises offline!</p>
      </div>
      <button onClick={handleInstallClick} style={styles.installBtn}>
        Install App
      </button>
    </div>
  );
}

const styles = {
  banner: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fef3c7', border: '1px solid #f59e0b', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px' },
  installBtn: { background: '#f59e0b', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};
