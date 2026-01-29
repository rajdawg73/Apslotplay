import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: '#e8eaed', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#ef4444' }}>Something went wrong</h1>
          <pre style={{ color: '#9aa0b2', marginTop: 16, whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            style={{
              marginTop: 20,
              padding: '10px 20px',
              background: '#6c63ff',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Clear Data & Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
