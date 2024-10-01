import cn from "classnames"


interface LoaderSpinnerProps{
    Classname?: string
}

export const LoadingSpinner: React.FC<LoaderSpinnerProps> = ({
  Classname = ""
}: LoaderSpinnerProps) => {
    return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("animate-spin", Classname)}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
    )
};
