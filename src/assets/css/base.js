import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ul": {
        "listStyle": "none"
    },
    "li": {
        "listStyle": "none"
    },
    "html": {
        "height": "100%",
        "fontFamily": "'Avenir', Helvetica, Arial, sans-serif",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "color": "#2c3e50"
    },
    "body": {
        "height": "100%",
        "fontFamily": "'Avenir', Helvetica, Arial, sans-serif",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "color": "#2c3e50"
    },
    "clearfix": {
        "clear": "both",
        "display": "table"
    }
});