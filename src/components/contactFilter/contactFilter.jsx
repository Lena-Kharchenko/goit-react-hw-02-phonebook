import PropTypes from 'prop-types';

const ContactFilter = ({ onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onChange}></input>
    </>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  onChange: PropTypes.func,
};
