const config = {
    darkBlueColor: '#1C202C',
    deepGreyColor: '#262A36',
    middleGreyColor: '#54565C',
    lightGreyColor: '#ABACAE',
    easyGreyColor: '#E9E9E9',
    whiteColor: '#FFFFFF',
    pink100Color: '#F6816D',
    gradientPinkColor: 'linear-gradient(270deg, #F67668 0%, #F79576 100%)',
    pink120Color: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), ${config.pink100Color}`,
    pink80Color: '#FDAF98',
    blue120Color: '#115B60',
    blue100Color: '#29BAAD',
    blue80Color: '#60CCB3',
    fontFamilyBody: 'Lexend Deca',
    fontFamilyTitle: 'Lexend Deca',
    fontSizeDefault: '16px',
    fontSizeSmall: '13px',
    fontSizeLarge: '18px',
    fontSizeXL: '22px',
}

export const variables = {
    colors: {
        darkBlue: `${config.darkBlueColor}`,
        deepGrey: `${config.deepGreyColor}`,
        middleGrey: `${config.middleGreyColor}`,
        lightGrey: `${config.lightGreyColor}`,
        easyGrey: `${config.easyGreyColor}`,
        white: `${config.whiteColor}`,
        gradientPink: `${config.gradientPinkColor}`,
        pink80: `${config.pink80Color}`,
        pink100: `${config.pink100Color}`,
        pink120: `${config.pink120Color}`,
        blue80: `${config.blue80Color}`,
        blue100: `${config.blue100Color}`,
        blue120: `${config.blue120Color}`,
    },
    font: {
        fontSize: {
            default: `${config.fontSizeDefault}`,
            sm: `${config.fontSizeSmall}`,
            lg: `${config.fontSizeLarge}`,
            xl: `${config.fontSizeXL}`,
        },
        fontWeight: {
            light: '300',
            normal: '400',
            semibold: '600',
            bold: '700',
        },
        fontFamily: {
            body: `${config.fontFamilyBody}`,
            title: `${config.fontFamilyTitle}`,
        },
    },
}
