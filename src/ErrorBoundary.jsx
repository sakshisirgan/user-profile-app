import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state if an error is caught, which will trigger a fallback UI
  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error information to the console, or send it to an error tracking service
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    // Display fallback UI if there is an error
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    // Render children components if no error occurred
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
