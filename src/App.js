import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Home from "./components/Home/Home";
// import SocketIO from "./components/SocketIO/SocketIO";
// import SetTimeOut from "./components/SetTimeOut/SetTimeOut";
// import PageNotFound from "./components/PageNotFound/PageNotFound";

// import BarChart from "./components/Chart/BarChart";
// import BarChart2 from "./components/Chart/BarChart2";
// import ChartUsingRestAPI from "./components/Chart/ChartUsingRestAPI";
// import ColumnChart from "./components/Chart/ColumnChart";
// import PieChart from "./components/Chart/PieChart";
// import RoundColumn from "./components/Chart/RoundColumn";
// import SplineChart from "./components/Chart/SplineChart";

// problem start
// import BarChartAPI from "./components/Chart/BarChartAPI";
// import MultiColumnChart from "./components/Chart/MultiColumnChart";
// problem end

import ReactCrud from "./components/ReactCrud/ReactCurd";


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>  {/* For avoid page refresh.. change <Nav.Link as={Link} to="/"> instead of <Nav.Link href="/"> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="set-time-out">setTimeout</Nav.Link> {/* For avoid page refresh.. change <Nav.Link as={Link} to="/"> instead of <Nav.Link href="/"> */}
              <Nav.Link as={Link} to="socket-io">Socket.io</Nav.Link>

              <NavDropdown title="HighChart" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="high-chart/column-chart">Column Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/bar-chart">Bar Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/bar-chart-two">Bar Chart 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/bar-chart-api">Bar Chart API</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/rest-api-chart">Rest API Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/multi-column-chart">Multi-Column Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/pie-chart">Pie Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/round-column-chart">Round-Column Chart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="high-chart/spline-chart">Spline Chart</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link as={Link} to="react-crud">React CRUD</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="socket-io" element={<SocketIO />} />
        <Route path="set-time-out" element={<SetTimeOut />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="high-chart/bar-chart" element={<BarChart />} />
        <Route path="high-chart/bar-chart-two" element={<BarChart2 />} />
        <Route path="high-chart/rest-api-chart" element={<ChartUsingRestAPI />} />
        <Route path="high-chart/column-chart" element={<ColumnChart />} />
        <Route path="high-chart/pie-chart" element={<PieChart />} />
        <Route path="high-chart/round-column-chart" element={<RoundColumn />} />
        <Route path="high-chart/spline-chart" element={<SplineChart />} /> */}


        {/* <Route path="high-chart/bar-chart-api" element={<BarChartAPI />} /> */}
        {/* <Route path="high-chart/multi-column-chart" element={<MultiColumnChart />} /> */}
        
        <Route path="react-crud" element={<ReactCrud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
