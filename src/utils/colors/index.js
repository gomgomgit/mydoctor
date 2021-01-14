const mainColors = {
    white: '#FFFFFF',
    black: '#000000',
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    gray1: '#7D8797',
    gray2: '#E9E9E9',
    gray3: '#EDEEF0',
    blue1: '#0066CB'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: mainColors.white,
    black: mainColors.black,
    disable: mainColors.gray3,
    tertiary: mainColors.blue1,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.gray1,
        menuActive: mainColors.green1,
        menuInactive: mainColors.dark2,
        subTitle: mainColors.dark3,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: mainColors.white
        },
        secondary: {
            background: mainColors.white,
            text: mainColors.dark1
        }
    },
    border: mainColors.gray2,
    cardLight: mainColors.green2

}