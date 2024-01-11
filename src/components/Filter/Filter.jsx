import {Component} from 'react';
import PropTypes from 'prop-types';
import { Container } from './Filter.styled'
import { Input } from './Filter.styled'
import {Lebel} from './Filter.styled'

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  handleChange = e => {
    // console.log(e);
    const { value } = e.currentTarget;
    // console.log(value);
    this.props.onFilterChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <Container>
        <Lebel>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={this.handleChange}
          />
        </Lebel>
      </Container>
    );
  }
}
