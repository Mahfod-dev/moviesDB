import { ErrorBoundary, ErrorBoundaryProps, FallbackProps } from "react-error-boundary";


function ErrorFallback({error,resetErrorBoundary}:FallbackProps){
    return (
            <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    )
}

export function MovieErrorBoundary(
    props: Pick<ErrorBoundaryProps,'onReset' | 'resetKeys'> & {
        children: React.ReactElement
    },
){
    return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />
}