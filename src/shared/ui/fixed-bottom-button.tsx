import { Button, ButtonProps } from "./button";

export const FixedBottomButton = ({ children, ...props }: ButtonProps) => {
  return (
    <div className="fixed bottom-0 left-[50%] w-full max-w-md -translate-x-[50%] p-6">
      <Button {...props}>{children}</Button>
    </div>
  );
};
