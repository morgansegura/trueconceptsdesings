import React from "react";
import { Map } from "../components";
import GoogleMapReact from "google-map-react";

export function MapContainer() {
    const config = {
        center: {
            lat: 32.734638,
            lng: -117.056892,
            $hover: false,
        },
        zoom: 12,
    };
    return (
        <Map>
            <Map.Title>
                Come visit us at our showroom in San Diego, CA.
            </Map.Title>
            <Map.SubTitle>
                6580 Federal Blvd STE A, Lemon Grove, CA 91945 | +16192875777
            </Map.SubTitle>

            <div style={{ height: "350px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyAC0lxwr1aTu_FDo6PM4ENMqw2d4Rn-8IM",
                        libraries: ["visualization"],
                    }}
                    defaultCenter={config.center}
                    defaultZoom={config.zoom}
                >
                    <Map.Marker
                        lat={32.734638}
                        lng={-117.056892}
                        text="My Marker"
                    />
                </GoogleMapReact>
                <Map.Text>Text</Map.Text>
            </div>
        </Map>
    );
}
