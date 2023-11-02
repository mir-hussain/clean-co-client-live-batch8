import PropTypes from 'prop-types';

const Header = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center w-full my-24">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="max-w-[75ch] text-center mt-5 mb-10">{children}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Header;
