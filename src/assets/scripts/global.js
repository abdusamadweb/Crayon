
// format phone number
export const formatPhone = (str) => {
    const mask = "+# ### ### ####"
    if (!mask) return str
    const numeric = str.replaceAll(/[^\d]/g, "")
    let idx = 0
    const formatted = mask.split("").map((el) => {
        if (el === "#") {
            el = numeric[idx]
            idx++
        }
        return el
    })
    return formatted.join("")
}