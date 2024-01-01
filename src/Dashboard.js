
import React from "react";
import "./Dashboard.css";
import BarChart from "./Chart";

function Dashboard() {
  let label1 = [
    "Everett",
    "Seattle",
    "Lynnwood",
    "Bothell",
    "Mukilteo",
    "Edmonds",
  ];
  let data1 = [
    90000, 80000, 50000,45000, 40000, 35000,   
  ];
  let data2 = [
     160000, 130000,80000,77000, 42000, 41000, 10000,
  ];
  let label2 = [
    "Service Plumbing",
    "Bid Work HVAC",
    "Service HVAC",
    "Bid Work Plumbing",
    "HWT Replacement",
    "Maintenance",
    "Material Scale",
  ];
  let maxi1=90000;
  let maxi2=180000;
  const companyM = [
    {
      money: "$406,411.29",
      title: "Total Revenue",      
    },
    {
      money: "$620",
      title: "Total Jobs Avg",      
    },
    {
      money: "655",
      title: "Tickets Created",      
    },
    {
      money: "735",
      title: "Tickets Scheduled",      
    },
    {
      money: "$110,448.8",
      title: "Outstanding Amount",      
    },
    {
      money: "105",
      title: "Membership Sold",      
    },
    {
      money: "436",
      title: "Jobs Completed",      
    },
    
    {
      money: "65",
      title: "Total Canceled",      
    },
  ];
  return (
    <div className="mainDashboard">
      <div style={{textAlign:"left",width:"90%",height:"90% "}}>
        <h2>Company Metrics</h2>
        <div className="allMetrics">
          {companyM.map((item, index) => {
            return (
              <CompanyMetrics
                key={index}
                title={item.title}
                money={item.money}
              />
            );
          })}
        </div>
      </div>
      <div className="allCharts">
        <div className="bar">
          <BarChart
            labels={label1}
            data={data1}
            heading={"Revenue By Job Location"}
            max={maxi1}
          />
        </div>
        <div className="bar">
          <BarChart
            labels={label2}
            data={data2}
            heading={"Revenue By Job Type"}
            ax={maxi2}
          />
        </div>
      </div>
    </div>
  );
}

function CompanyMetrics({ title, money }) {
  return (
    <div className="metrics">
      <h3>{money}</h3>
      <p>{title}</p>
    </div>
  );
}

export default Dashboard;