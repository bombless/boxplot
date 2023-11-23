const s = require('./s');
function getMap(s) {
    const data = {};

    for (const line of s.split('\n')) {
        if (line.startsWith('#')) {
            const [_, info, time] = line.split('#');
            const [pos, name] = info.split(' ');
            if (!data[name]) {
                data[name] = {};
            }
            data[name][pos] = time;
        }
    }

    return data;
}

const data = getMap(s);

let idx = 0;

let min = Number.MAX_SAFE_INTEGER;

for (const entry in data) {
    for (const item in data[entry]) {
        if (data[entry][item] < min) min = data[entry][item];
    }
}

function formatEntry(entryData) {
    const before = entryData.before - min;
    const after = entryData.after - min;
    return `${before}, ${before}, ${(before + after) / 2}, ${after}, ${after}`;
}

let dataOutput = '';
let callOutput = '';
let namesOutput = [];

for (const entry in data) {
    idx += 1;
    namesOutput.push(JSON.stringify(entry));
    if (callOutput) callOutput += ', ';
    callOutput += `data_${idx}`;
    dataOutput += `data_${idx} <- c(${formatEntry(data[entry])})\n`;
}

console.log(`
${dataOutput}
boxplot(${callOutput}, names = c(${namesOutput.join(', ')}), main = "boxplot", ylab = "Values")
`);
