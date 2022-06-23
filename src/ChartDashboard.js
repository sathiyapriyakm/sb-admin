import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'
// import { LineChart,Line, Legend, ResponsiveContainer} from "react-chartjs-2"
// import { LineChart,PieChart,Pie, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const data= [
//     {Month:"Jan",value:0},
//     {Month:"Feb",value:10000},
//     {Month:"Mar",value:5000},
//     {Month:"Apr",value:15000},
//     {Month:"May",value:10000},
//     {Month:"Jun",value:20000},
//     {Month:"Jul",value:15000},
//     {Month:"Aug",value:25000},
//     {Month:"Sep",value:20000},
//     {Month:"Oct",value:30000},
//     {Month:"Nov",value:25000},
//     {Month:"Dec",value:40000},
// ];

// const data1=[
//     {Source:"Direct",value:55},
//     {Source:"Referral",value:30},
//     {Source:"Social",value:15},
// ]


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
         {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} width={500} height={300}>
        <Line dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="Month" />
          <YAxis dataKey="value"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>           */}

      {/* <Line
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Earnings",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
        }],
      }}
      width={500}
     height={300}
     options= {{
        maintainAspectRatio: false,}}
      >

      </Line> */}

<canvas id="myAreaChart"></canvas>

        </div>
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
            {/* <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height="100%">
          <Pie data={data1} dataKey="value"  fill="#36b9cc" />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer> */}
      {/* <div>
      <Pie
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div> */}
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Direct
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Social
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


   