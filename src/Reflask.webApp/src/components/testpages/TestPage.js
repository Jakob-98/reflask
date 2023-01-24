import React, { useEffect, useState } from "react";
import axios from 'axios';
import { API_BASE_URL } from "../common/config";


const TestPage = () => {
    const [time, setTime] = useState(null);

    const getTime = async () => {
        const data = await axios.get(API_BASE_URL + '/api/time')
        if (data) {
            setTime(data.data.time);
        }
    }

    useEffect(() => {
        getTime();
    }, []);

    if (!time) {
        return (
            <>
            Loading...
            </>
        )
    }
    // const navigate = useNavigate();
    return (
      <>
      {/* read /API/time */}
        <h1>{time}</h1>
      </>
    )
};

export default TestPage;