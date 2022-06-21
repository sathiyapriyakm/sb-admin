import React from 'react'
import {XAxis,YAxis,Tooltip,Area,ResponsiveContainer,AreaChart,CartesianGrid} from "recharts"

export function ChartDashboard() {
  return (
    <>


<div className="row">
<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
       <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
         <div className="card-body">
            <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                {/* <canvas id="myAreaChart" style={{display:"block", width: "142px" ,height: "160px"}} width="142" height="160" className="chartjs-render-monitor"></canvas> */}
           
                <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>            </div>
        </div>
    </div>
</div>

<div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                <canvas id="myPieChart" width="142" height="208" style={{display: "block", width: "142px", height: "208px"}} className="chartjs-render-monitor"></canvas>
                <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Referral
                </span>
            </div>
        </div>
    </div>
</div>
</div>
    {/* <div className="row">
<div className="col-xl-8 col-lg-7">
<div className="card shadow mb-4">
    <img  src="img/line_chart.png" alt="chart image"/>
    </div></div>
    <div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
    <img  src="img/pie_chart.png" alt="chart image"/>
    </div></div>
    </div> */}
    </>
  );
}


    {/* <div className="card shadow mb-4"> 
         <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdow.ponMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div> 
 </div> 

 <div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Referral
                </span>
            </div>
        </div>
    </div>
</div> */}

