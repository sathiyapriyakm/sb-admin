import React from 'react'
import { LineChart,PieChart,Pie, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data= [
    {Month:"Jan",value:0},
    {Month:"Feb",value:10000},
    {Month:"Mar",value:5000},
    {Month:"Apr",value:15000},
    {Month:"May",value:10000},
    {Month:"Jun",value:20000},
    {Month:"Jul",value:15000},
    {Month:"Aug",value:25000},
    {Month:"Sep",value:20000},
    {Month:"Oct",value:30000},
    {Month:"Nov",value:25000},
    {Month:"Dec",value:40000},
];

const data1=[
    {Source:"Direct",value:55},
    {Source:"Referral",value:30},
    {Source:"Social",value:15},
]


export function ChartDashboard() {
  return (
    <>
<div className="row">
<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
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
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} width={500} height={300}>
            <Line dataKey="value" stroke="#8884d8" />
            <XAxis dataKey="Month" />
            <YAxis dataKey="value"/>
            <Tooltip />
            </LineChart>
       </ResponsiveContainer>
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
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%">
            <Pie data={data1} dataKey="value"  fill="#36b9cc" />
            <Tooltip/>
            </PieChart>
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
</>
  );
}


   