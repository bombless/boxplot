
;
const fs = require('fs');

(async () => {
    const d3 = await import('d3');

// 创建示例数据
    const data = [
        [10, 20, 30, 40, 50],
        [15, 25, 35, 45, 55],
        [25, 30, 35, 40, 45]
    ];

// 设置画布大小和边距
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

// 创建 x 和 y 比例尺
    const x = d3.scaleBand()
        .domain(["A", "B", "C"])
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, 60])
        .range([height - margin.bottom, margin.top]);

// 创建 SVG 容器
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);

// 绘制箱图
    svg.selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", (d, i) => `translate(${x(i)},0)`)
        .call(g => g.call(d3.boxplot()
            .domain([10, 60])
            .width(x.bandwidth())
            .height(height)
            .value(d => d)));

// 将 SVG 输出到文件
    fs.writeFileSync('boxplot.svg', svg.node().outerHTML);

})();
