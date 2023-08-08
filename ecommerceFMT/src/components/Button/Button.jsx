import Button from 'react-bootstrap/Button';

function Button({text, variant,size, type}) {
  return (
    <>
      <Button variant={variant} size={size} type={type}>{text}</Button>
      </>
  );
}

export default Button;

/* size = lg,sm 
variant = outline-secondary",success,warning,danger,info,light,dark
type = submit , button
  
*/