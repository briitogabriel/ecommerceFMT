import Badge from 'react-bootstrap/Badge';
import { useAppContext } from '../../context/Context'

export const BadgeCart = () => {
  const { cart } = useAppContext();
  return <Badge bg="secondary">{cart.length}</Badge>;
};
