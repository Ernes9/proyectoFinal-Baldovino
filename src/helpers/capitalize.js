export const capitalize = (str) => {
    if (typeof str !== 'string') {
        return str;
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}