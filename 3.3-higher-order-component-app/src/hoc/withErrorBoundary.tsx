import { ErrorBoundary } from "../components/ErrorBoundary";
import React from "react";

export function withErrorBoundary<P>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
): React.FC<P> {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
