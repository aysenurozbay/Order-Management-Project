module.exports = {
    preset: 'react-native',
    transform: {
        '\\.js$': ['babel-jest', { configFile: './babel.config.jest.js' }],
    },
};
