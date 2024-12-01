import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import IPDetails from "../components/IPDetails";
import is_ip_private from "private-ip";
import { isIP } from "is-ip";

const Home = () => {
  const [ip, setIp] = useState("");
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState("");

  const fetchGeoData = async (ipAddress) => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
      setGeoData(response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  };

  const fetchUserIp = async () => {
    try {
      const response = await axios.get("https://ipinfo.io/geo");
      const userGeoData = response.data;
      setIp(userGeoData.ip);
      setGeoData(userGeoData);
    } catch (error) {
      console.error("Error fetching user geolocation data:", error);
    }
  };

  const isValidIp = (ipAddress) => {
    return isIP(ipAddress) && !is_ip_private(ipAddress);
  };

  const handleSearch = (ipAddress) => {
    if (isValidIp(ipAddress)) {
      setError("");
      setIp(ipAddress);
      fetchGeoData(ipAddress);
    } else {
      setError("Please enter a valid IP address.");
    }
  };

  useEffect(() => {
    fetchUserIp();
  }, []);

  return (
    <PageLayout>
      <SearchForm onSearch={handleSearch} />
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="text-center shadow my-2 p-2 font-bold text-xl rounded">
        <p>IP Address is</p>
        <p>{ip}</p>
      </div>
      {geoData && <IPDetails geoData={geoData} />}
    </PageLayout>
  );
};

export default Home;
