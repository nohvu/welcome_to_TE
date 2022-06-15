import { useState } from "react";

export const BaseBlock = ({mouseEnterCallbak, ...args}) => {
  const [isActive, setActive] = useState(false);
  
  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {args.hasOwnProperty('imgSrc') ? (
        <img src={args['imgSrc']} alt={args['imgAlt']} />
      ) : args.hasOwnProperty('content') ? (
         <p>{args['content']}</p>
      ) : args.hasOwnProperty('userData') ? (
        <address>
          country: {args['userData'].country}, street: {args['userData'].street}
        </address>
      ) : null}
    </div>
  );
}
