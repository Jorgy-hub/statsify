export function CountArrayItems( arr ) {
    const counts = {};
    arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts;
};