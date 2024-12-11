module.exports = {
    ...jest.requireActual('react-native-web'),
    Modal: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  };