package main

import (
    "fmt"
    "math/rand"
    "plotly.com/plotly-go/v3/plotly"
)

func main() {
    // 生成随机数据
    data := make([]float64, 100)
    for i := range data {
        data[i] = rand.Float64() * 100
    }

    // 创建画布
    fig := plotly.NewFigure()

    // 添加箱线图
    fig.AddTrace(plotly.Box(
        YValues: data,
    ))

    // 显示图表
    fig.Show()
}
