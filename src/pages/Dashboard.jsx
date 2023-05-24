import Chart from "react-apexcharts"
import AreaChart from '../components/AreaChart';

function Dashboard(){

    const state = {
        options: {
            chart: {
                height: "100%",
                width: '100%',
                type: 'line',
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
            grid: {
                show: true
            },
            xaxis: {
              categories: ['20 Aug','21 Aug','22 Aug', '23 Aug', '24 Aug', '25 Aug'],
            }
        },
        series: [
            {
                name: "&#8358;",
                data: [2001, 1045, 4000, 1200, 1899, 1640]
            }
        ]
    };

    const countries = ['Nigeria', 'Ghana', 'Togo', 'Libya']

    return (
        <>
            <h1 className="text-xl font-bold mt-10">Sales Overview</h1>

            <div className="
            mt-4 
            gap-4 
            dashboard__stats
            grid 
            xxs:grid-cols-1 
            xs:grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            xl:grid-cols-4 
            xxl:grid-cols-4 
            
            ">
                <div className="border border-black rounded-md p-5">
                    <h1 className="">Today's sales</h1>
                    <h1 className="text-xl font-bold">&#8358;1,650.50</h1>
                </div>
                
                <div className="border bg-black border-black rounded-md p-5 grid grid-cols-1">
                    <h1 className="text-white mb-2">21 Aug - 1 Sep 2021</h1>

                    <div className="mixed-chart">
                        <AreaChart 
                        categories={['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 
                        series={[88, 43, 76, 23, 49, 62, 69]}
                        />
                    </div>

                    <h1 className="text-white text-xs mb-1">This week</h1>
                    <h1 className="text-white text-lg font-bold">&#8358;1,650.50</h1>
                </div>

                <div className="border border-black rounded-md p-5 grid grid-cols-1">
                    <h1 className="">21 Aug - 1 Sep 2021</h1>

                    <div className="mixed-chart">
                        <AreaChart 
                        categories={['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 
                        series={[10, 41, 35, 51, 49, 62, 69]}
                        />
                    </div>

                    <h1 className="text-xs mb-1">This month</h1>
                    <h1 className="text-lg font-bold">&#8358;1,650.50</h1>
                </div>

                <div className="border border-black rounded-md p-5 grid grid-cols-1">
                    <h1 className="">21 Aug - 1 Sep 2021</h1>

                    <div className="mixed-chart">
                        <AreaChart 
                        categories={['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 
                        series={[10, 41, 35, 51, 4, 62, 69]}
                        />
                    </div>

                    <h1 className="text-xs mb-1">Last month</h1>
                    <h1 className="text-lg font-bold">&#8358;1,650.50</h1>
                </div>
            </div>

            <div className="
            mt-10 
            mb-20 
            gap-4
            grid 
            grid-cols-6
            ">
                <div className="
                grid 
                grid-cols-6 
                gap-4 
                py-1
                
                col-span-6 
                xxs:col-span-6 
                xs:col-span-6 
                sm:col-span-6 
                md:col-span-6 
                lg:col-span-6 
                xl:col-span-4 
                xxl:col-span-4  
                ">
                    <div className="
                    flex 
                    items-center 
                    justify-between
                    col-span-6
                    xl:col-span-2  
                    xxl:col-span-2  
                    ">
                        <div className="flex items-center">
                            <p className="font-bold text-xs border-r border-gray-300 pr-3">Sales</p>
                            <p className="font-bold text-xs text-red-600 pl-3">7 days</p>
                        </div>
                        <p className="font-bold text-xs ">30 days</p>
                        <button className="flex items-center px-3 py-1.5 rounded border border-black border-rounded">
                            <span className="text-xs">USD</span>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                    </div>

                    <div className="
                    grid 
                    grid-cols-6 
                    gap-4 
                    items-center
                    col-span-6 
                    xl:col-span-4  
                    xxl:col-span-4
                    ">
                        <div className="
                        col-span-4
                        xxs:col-span-6 
                        xs:col-span-6 
                        sm:col-span-6 
                        md:col-span-6 
                        lg:col-span-6 
                        xl:col-span-4 
                        xxl:col-span-4  
                        ">
                            <select id='organization' className="custom__select text-xs border border-gray-200 p-2 rounded-lg w-full" style={{ textIndent:'10px', appearance: 'none' }}>
                                <option disabled>Select</option>                                            
                                {
                                    countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>                                            
                                    ))
                                }
                            </select>
                        </div>
                        <div className="
                        col-span-2
                        xxs:col-span-6 
                        xs:col-span-6 
                        sm:col-span-6 
                        md:col-span-6 
                        lg:col-span-6 
                        xl:col-span-2 
                        xxl:col-span-2  
                        ">
                            <button className="flex items-center px-3 py-2 rounded border border-black border-rounded">
                                <i className='bx bx-down-arrow-alt'></i>
                                <span className="text-xs">Download report</span>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="
                col-span-6
                xxs:col-span-6 
                xs:col-span-6 
                sm:col-span-6 
                md:col-span-6 
                lg:col-span-6 
                xl:col-span-2 
                xxl:col-span-2  
                "></div>


                <div className="
                border 
                border-black 
                rounded-md 
                p-5
                xxs:p-2 
                xs:p-2 
                sm:p-2
                md:p-5 
                lg:p-5 
                xl:p-5 
                xxl:p-5

                col-span-4
                xxs:col-span-6 
                xs:col-span-6 
                sm:col-span-6 
                md:col-span-6 
                lg:col-span-6 
                xl:col-span-4 
                xxl:col-span-4 
                " 
                style={{maxHeight: '300px', height: '300px'}}
                >
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="100%"
                            height="250"
                        />
                    </div>
                </div>
                <div className="
                flex 
                flex-col 
                justify-between 
                bg-custom-red
                rounded-md 
                p-5 
                dashboard__stats
                col-span-6
                xxs:col-span-6 
                xs:col-span-6 
                sm:col-span-6 
                md:col-span-6 
                lg:col-span-6 
                xl:col-span-2 
                xxl:col-span-2 
                ">
                    <h1 className="text-white">
                        <span>KlashaWire - send</span><br/> 
                        <span>money to businesses</span><br/> 
                        <span>globally from Africa</span> 
                    </h1>

                    <div>
                        <button className="rounded-md bg-black text-white px-4 py-2 text-xs">
                            Send a Wire
                        </button>
                    </div>
                </div>
                
            </div>

            <div className="p-5"></div>
        </>
    )
}

export default Dashboard





