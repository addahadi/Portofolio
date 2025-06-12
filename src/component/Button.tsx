type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Classname?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({children , Classname = '', ...rest }) => {
  return (
    <button
      className={`p-3 flex flex-row gap-2 bg-black-2 border-[1px] border-white-3 border-b-[3px] rounded-md items-center transition-all duration-150  ${Classname} 
      active:border-b-[1px] `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
