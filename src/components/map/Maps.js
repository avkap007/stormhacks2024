import React, { useEffect } from "react";
import tt from "@tomtom-international/web-sdk-maps";

function Maps() {
    const KEY = "XX7HOEL6soES4SoXdCMsfCfhFZUTRhNb";     // DELETE LATER AND USE .env FILE

    useEffect(() => {        
        var map = tt.map({
            key: KEY,
            container: "map"
        });

        return () => {
            // Clean up map resources if needed
        };
    }, []);

    return <div id="map" className="map"></div>;
}

export default Maps;