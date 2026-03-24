module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-responsive-screen',
            importNames: ['widthPercentageToDP', 'heightPercentageToDP'],
            message: 'Use wp and hp from src/constants/constants.js instead.',
          },
        ],
      },
    ],
  },
};
