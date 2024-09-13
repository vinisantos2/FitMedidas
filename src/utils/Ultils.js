export function ordenarDatas(array) {
    array.sort(function (a, b) {
        const data1 = new Date(a.data)
        const data2 = new Date(b.data)

        return data1 - data2
    })

    array.reverse()
    return array
}

