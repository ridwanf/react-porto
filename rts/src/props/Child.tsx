import {FC} from "react";

interface ChildProps {
  color: string,
  onClick: () => void,
  children: React.ReactNode,
}

export const Child = ({color, onClick}: ChildProps)=> {
  return <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>
}


export const ChildAsFC: FC<ChildProps> = ({color, onClick, children}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}