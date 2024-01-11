import PropTypes from 'prop-types';
import { Item } from './Item.styled'
import {Button} from './Item.styled'
export const ContactItem = ({ id, name, number, onContactDelete }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => onContactDelete(id)}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};