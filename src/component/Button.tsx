type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Classname?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({children , Classname = '', ...rest }) => {
  return (
    <button
      className={`p-3 flex flex-row gap-2 bg-black-2 rounded-md items-center transition-colors duration-500 shadow-md shadow-current ${Classname} 
      hover:bg-black-4 hover:shadow-none hover:border-2 hover:border-white-1 `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
