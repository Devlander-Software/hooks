import { Dimensions } from 'react-native';

// Mock Dimensions module
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn((type) => {
    if (type === 'window') {
      return { width: 800, height: 600 };
    }
    return { width: 1024, height: 768 };
  }),
}));

export const mockDimensions = {
  setWindowDimensions: (width: number, height: number) => {
    (Dimensions.get as jest.Mock).mockImplementationOnce(() => ({
      width,
      height,
    }));
  },
  setScreenDimensions: (width: number, height: number) => {
    (Dimensions.get as jest.Mock).mockImplementationOnce(() => ({
      width,
      height,
    }));
  },
};