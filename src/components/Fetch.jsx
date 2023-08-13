import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
            setData(res.data.message);
            console.log(res.data.message);
        })

    }, []);
    return (
        <div>
            <img width={500} src={data} />
        </div>
    );
}

export default Fetch;