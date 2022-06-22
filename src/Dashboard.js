import {CardDashboard} from "./CardDashboard"
import {ChartDashboard} from "./ChartDashboard"
import ProjectIllustration from "./ProjectIllustration"
export function Dashboard(){
    return(
<>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
<div className="row">
    <CardDashboard detail="Earnings (Monthly)" value="$40,000" iprop="fas fa-calendar fa-2x text-gray-300"/>
    <CardDashboard detail="Earnings (Annual)" value="$215,000" iprop="fas fa-dollar-sign fa-2x text-gray-300"/>    
    <CardDashboard detail="Tasks" value="50%" iprop="fas fa-clipboard-list fa-2x text-gray-300"/>
    <CardDashboard detail="Pending Requests" value="18" iprop="fas fa-comments fa-2x text-gray-300"/>
</div>
<ChartDashboard/>
<ProjectIllustration/>
</>
);
}