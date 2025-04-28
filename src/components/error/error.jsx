import React from 'react';

const ErrorComponent = ({ onRetry }) => {
  return (
    <div className="error-container">
      <span>Cidade não encontrada. Verifique o nome e tente novamente.</span>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;