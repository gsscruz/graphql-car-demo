const getStyles = () => ({
  header: {
    fontSize: 25,
    marginBottom: '20px',
  },
});

const Header = () => {
  const styles = getStyles();

  return <h1 style={styles.header}>GraphQL & React Car assignment</h1>;
};

export default Header;
