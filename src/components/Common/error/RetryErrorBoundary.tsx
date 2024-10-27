import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export default function RetryErrorBoundary({
  children,
}: {
  children: ReactNode;
}) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onError={error => {
        if (isAxiosError(error) && error.response?.status === 500) {
          throw error;
        }
      }}
      onReset={reset}
      FallbackComponent={({ error, resetErrorBoundary }: FallbackProps) => (
        <div role="alert" style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Something went wrong.</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Retry</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
