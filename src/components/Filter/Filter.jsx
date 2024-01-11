import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Lebel } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    onFilterChange(value);
  };

  return (
    <Container>
      <Lebel>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
        />
      </Lebel>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};