import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";
import "./Dashboard.css";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const pieData = [
  { name: "Completed", value: 75 },
  { name: "In Progress", value: 25 },
];
const COLORS = ["#0ea5e9", "#e5e7eb"];

const lineData = [
  { day: "01", performance: 45 },
  { day: "05", performance: 47 },
  { day: "10", performance: 46 },
  { day: "15", performance: 48 },
  { day: "20", performance: 47 },
  { day: "25", performance: 49 },
  { day: "30", performance: 50 },
];

const interviewData = [
  { round: 'Mock 1', score: 65 },
  { round: 'Mock 2', score: 70 },
  { round: 'Mock 3', score: 78 },
  { round: 'Mock 4', score: 80 },
];

const quizData = [
  { date: '01 Apr', accuracy: 70 },
  { date: '08 Apr', accuracy: 75 },
  { date: '15 Apr', accuracy: 72 },
  { date: '22 Apr', accuracy: 80 },
];

const essayData = [
  { essay: 'Essay 1', score: 68 },
  { essay: 'Essay 2', score: 75 },
  { essay: 'Essay 3', score: 80 },
  { essay: 'Essay 4', score: 85 },
];

const Dashboard = () => {
  const [auth] = useAuth();
  const [activeTab, setActiveTab] = useState("personal");
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: auth?.user?.name || "",
    email: auth?.user?.email || "",
    address: auth?.user?.address || ""
  });

  const handleSave = () => {
    auth.user.name = editedUser.name;
    auth.user.email = editedUser.email;
    auth.user.address = editedUser.address;
    setShowModal(false);
  };

  return (
    <Layout title={"AI-Mocker Dashboard"}>
      <div className="dsh-dashboard-container">
        <aside className="dsh-sidebar">
          <div className="dsh-profile-section">
            <img
              src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
              alt="user"
              className="dsh-avatar"
            />
            <div>
              <p className="dsh-username">Welcome Back</p>
              <p className="dsh-userrole">{auth?.user?.name}</p>
            </div>
          </div>
          <div className="dsh-nav-buttons">
            {['personal', 'stats', 'interview', 'quiz', 'essay'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? "dsh-btn-primary" : "dsh-btn-light"}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("Stats", " Statistics")}
              </button>
            ))}
          </div>
        </aside>

        <main className="dsh-main-content">
          {activeTab === "personal" && (
            <div className="dsh-card dsh-full-width">
              <div className="dsh-card-title-container">
                <h2 className="dsh-card-title">Personal Information</h2>
                <button className="dsh-edit-btn" onClick={() => setShowModal(true)}>Edit</button>
              </div>
              <div className="dsh-personal-info">
                <p><strong>Name:</strong> {auth?.user?.name}</p>
                <p><strong>Email:</strong> {auth?.user?.email}</p>
                <p><strong>Address:</strong> {auth?.user?.address}</p>
              </div>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="dsh-card-grid">
              <div className="dsh-card">
                <h3 className="dsh-card-title">Goal Overview</h3>
                <div className="dsh-chart-center">
                  <PieChart width={120} height={120}>
                    <Pie data={pieData} innerRadius={40} outerRadius={60} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label value="75%" position="center" style={{ fill: "#0ea5e9", fontSize: "16px", fontWeight: "bold" }} />
                    </Pie>
                  </PieChart>
                </div>
                <div className="dsh-overview-values">
                  <div>
                    <p className="dsh-value">786,617</p>
                    <p>Completed</p>
                  </div>
                  <div>
                    <p className="dsh-value">13,561</p>
                    <p>In Progress</p>
                  </div>
                </div>
              </div>

              <div className="dsh-card">
                <h3 className="dsh-card-title">Audience Views</h3>
                <div className="dsh-audience-views">
                  {["Video 1", "Video 2", "Video 3", "Video 4"].map((video, i) => {
                    const progress = [80, 20, 30, 45][i];
                    const change = ["73% ↑", "8% ↓", "19% ↑", "23% ↓"][i];
                    const colorClass = change.includes("↑") ? "dsh-success" : "dsh-danger";
                    return (
                      <React.Fragment key={i}>
                        <div className="dsh-view-row">
                          <span>{video}</span>
                          <span className={colorClass}>{change}</span>
                        </div>
                        <div className="dsh-progress-bar">
                          <div style={{ width: `${progress}%` }} className="dsh-progress-fill"></div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="dsh-card dsh-full-width">
                <h3 className="dsh-card-title">Progress</h3>
                <LineChart width={850} height={220} data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#0ea5e9" strokeWidth={3} />
                </LineChart>
              </div>
            </div>
          )}

          {['interview', 'quiz', 'essay'].includes(activeTab) && (
            <div className="dsh-card dsh-full-width">
              <h2 className="dsh-card-title">Last 10 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Records</h2>
              <ul>
                {(activeTab === 'interview' ? interviewData : activeTab === 'quiz' ? quizData : essayData).map((item, i) => (
                  <li key={i}>
                    {activeTab === 'interview' && `${item.round} - Score: ${item.score}`}
                    {activeTab === 'quiz' && `${item.date} - Accuracy: ${item.accuracy}%`}
                    {activeTab === 'essay' && `${item.essay} - Score: ${item.score}`}
                  </li>
                ))}
              </ul>
              <h3 className="dsh-card-title" style={{ marginTop: '1rem' }}>Statistics</h3>
              <LineChart width={850} height={220} data={activeTab === 'interview' ? interviewData : activeTab === 'quiz' ? quizData : essayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={activeTab === 'interview' ? 'round' : activeTab === 'quiz' ? 'date' : 'essay'} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={activeTab === 'quiz' ? 'accuracy' : 'score'} stroke="#0ea5e9" strokeWidth={3} />
              </LineChart>
            </div>
          )}

          {showModal && (
            <div className="dsh-modal-overlay">
              <div className="dsh-modal">
                <h4 style={{textAlign:'center', marginBottom:'0.9rem'}}><b>Edit Personal Information</b></h4>
                <label>Name:<input type="text" value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} /></label>
                <label>Email:<input type="email" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} /></label>
                <label>Address:<input type="text" value={editedUser.address} onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })} /></label>
                <div className="dsh-modal-actions">
                  <button className="dsh-save-btn" onClick={handleSave}>Save</button>
                  <button className="dsh-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
