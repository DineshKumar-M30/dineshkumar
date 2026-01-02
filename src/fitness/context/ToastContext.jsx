import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);

        // Auto remove after 3 seconds
        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 3000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                pointerEvents: 'none'
            }}>
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onClose }) => {
    const isSuccess = toast.type === 'success';
    const isError = toast.type === 'error';
    const isInfo = toast.type === 'info';

    return (
        <div
            className="animate-fadeInUp"
            style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderLeft: `4px solid ${isSuccess ? '#10B981' :
                        isError ? '#EF4444' :
                            '#3B82F6'
                    }`,
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                color: 'white',
                minWidth: '300px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                pointerEvents: 'auto',
                cursor: 'pointer'
            }}
            onClick={onClose}
        >
            <span style={{ fontSize: '1.25rem' }}>
                {isSuccess ? '✅' : isError ? '❌' : 'ℹ️'}
            </span>
            <div style={{ flex: 1 }}>
                <div style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: isSuccess ? '#10B981' : isError ? '#EF4444' : '#3B82F6',
                    marginBottom: '0.25rem'
                }}>
                    {isSuccess ? 'Success' : isError ? 'Error' : 'Info'}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {toast.message}
                </div>
            </div>
        </div>
    );
};
