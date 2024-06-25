export const defaultT = {
    white:"#ffff",
    red:"red",
    gradient:["#9673FF", "#522FDC"],
    solid:"#522FDC",
    secondary:"#F2F2F2",
    activeTab: 'red', // Tomato color for active tab
    defaultTab: '#DDD',   // Light gray for default tab
    activeText: '#FFFFFF', // White text for active tab
    defaultText: '#000000' // Black text for default tab
}


const commonColor = {
    gradient:["#9673FF", "#522FDC"],
    activeTab: '#522FDC',
    defaultTab: '#DDD',
}

export const light = {
    themeColor: '#FFFFFF',
    white: '#000000',
    gray: 'gray',
    ...commonColor,
}

export const dark = {
    themeColor: '#000000',
    white: '#FFFFFF',
    gray: 'white',
    ...commonColor,
}

// export default { light, dark, defaultT };