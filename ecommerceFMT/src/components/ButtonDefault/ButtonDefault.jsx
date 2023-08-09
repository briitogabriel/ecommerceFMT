import Button from 'react-bootstrap/Button';

export const ButtonDefault = ({ text, variant, size, type }) => {
  return (
    <Button variant={variant} size={size} type={type}>
      {text}
    </Button>
  );
};
