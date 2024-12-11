module.exports = {
    create: jest.fn().mockImplementation(() => ({
      root: { findByType: jest.fn() },
      toJSON: jest.fn(),
      update: jest.fn(),
      unmount: jest.fn(),
    })),
  };