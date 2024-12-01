import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import IPDetails from "../components/IPDetails";
import is_ip_private from "private-ip";
import { isIP } from "is-ip";
import { useUser } from "../hooks/useUser";
import axiosHelper from "../axios/axiosHelper";
import SearchHistory from "../components/SearchHistory";
import SignOut from "../components/SignOut";

const Home = () => {
  const [ip, setIp] = useState("");
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const { user, loading } = useUser();

  useEffect(() => {
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
    fetchUserIp();
  }, []);

  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const response = await axiosHelper.get(`/history/${user.user_id}`);
        setSearchHistory(response.data.history);
      } catch (error) {
        console.error("Error fetching search history:", error);
      }
    };
    if (user && !loading) {
      fetchSearchHistory();
    }
  }, [user, loading]);

  const fetchGeoData = async (ipAddress) => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ipAddress}/geo`);
      setGeoData(response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  };

  const isValidIp = (ipAddress) => isIP(ipAddress) && !is_ip_private(ipAddress);

  const handleSearch = async (ipAddress, addToHistory = true) => {
    if (isValidIp(ipAddress)) {
      setError("");
      setIp(ipAddress);
      fetchGeoData(ipAddress);
      if (addToHistory) {
        try {
          const response = await axiosHelper.post("/history", {
            user_id: !loading && user.user_id,
            ip: ipAddress,
          });
          setSearchHistory((prevHistory) => [
            ...prevHistory,
            response.data.data,
          ]);
        } catch (error) {
          console.error("Error adding IP to history:", error);
        }
      }
    } else {
      setError("Please enter a valid IP address.");
    }
  };

  return (
    <PageLayout>
      <SearchForm onSearch={handleSearch} />
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="text-center shadow my-2 p-2 font-bold text-xl rounded">
        <p>IP Address is</p>
        <p>{ip}</p>
      </div>
      {geoData && <IPDetails geoData={geoData} />}
      <div className="mt-2">
        <h2 className="font-bold text-2xl">Search History</h2>
        <SearchHistory
          searchHistory={searchHistory}
          handleSearch={handleSearch}
        />
      </div>
      <SignOut/>
    </PageLayout>
  );
};

export default Home;
