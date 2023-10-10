import $api from "./index";

export const getContent = (str) => {
    return $api
        .get('/content')
        .then(res => {
            const filteredData = res.data.filter(i => {
                return str.includes(i.value)
            })
            return filteredData.reduce((result, item) => {
                result[item.value] = item
                return result
            }, {})
        })
}