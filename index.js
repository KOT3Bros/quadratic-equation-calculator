function findDiscriminant(a, b, c) {
    return b ** 2 - 4 * a * c
}

function findRoots(a, b, c) {
    const d = findDiscriminant(a, b, c)
    if (d === 0) {
        return `Дискриминант равен 0. Уравнение имеет 1 корень. x = ${-b / (2 * a)}`
    } else if (d > 0) {
        return `Дискриминант больше 0. Уравнение имеет 2 корня. x1 = ${(-b + d ** 0.5) / (2 * a)}, x2 = ${(-b - d ** 0.5) / (2 * a)}`
    } else {
        return `Дискриминант меньше 0. Уравнение не имеет корней.`
    }
}

module.exports = { findDiscriminant, findRoots }