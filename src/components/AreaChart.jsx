import Chart from "react-apexcharts"

const AreaChart = ({ categories, series }) => {
    const state = {
        options: {
            chart: {
                // height: "100%",
                width: '100%',
                type: 'area',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
              enabled: false
            },
            colors: ['#EF2C5A'],
            stroke: {
              curve: 'straight'
            },
            title: {
                text: '',
                align: 'left'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },
            },
            toolbar: {
                show: false,
            },
            grid: {
                show: false
            },
            yaxis: { show: false },
            xaxis: {
                show: false,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                categories: categories,
            }
        },
        series: [
            {
                name: "Desktops",
                data: series
            }
        ]
    };

    return (
        <>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="100%"
            />
        </>
    )
}

export default AreaChart