// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;

const config = getDefaultConfig(__dirname);

// Modify the source extensions based on Detox's mocking requirement
config.resolver.sourceExts = process.env.RN_SRC_EXT 
    ? process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts)
    : defaultSourceExts;

module.exports = config;
