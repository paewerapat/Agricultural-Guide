import React, { useEffect, useState } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';

let DefaultIcon = L.icon({
    iconUrl: '/images/pngwing.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

// Customize Icons
const myIcon = L.icon({
    iconUrl: '/logo/psu.png',
    iconSize: [50, 50]
});

function MapLeaflet({handleGetLatLong, locationName, lat, long,}) {

    const village = [7.0091783, 100.467869]
    const [marker, setMarker] = useState(null)

    window.dispatchEvent(new Event('resize'));

    const GetLatLong = () => {
        const map = useMapEvents({
            click(e){
                const latlong = e.latlng
                handleGetLatLong(latlong.lat.toString(), latlong.lng.toString())
                setMarker(latlong)
                map.flyTo(latlong)
            },
        })
        return marker == null
        ? null
        : <Marker position={marker}>
            <Popup>
                { 
                locationName
                ? locationName
                : 'กรุณาระบุชื่อสถานที่!'
                }
            </Popup>
        </Marker>
    }

    const CurrentLocation = () => {
        return (
            <Marker position={[lat, long]}>
                <Popup>
                    { locationName }
                </Popup>
            </Marker>
        )
    }

    return (
        <MapContainer 
            center={(lat && long) ? [lat, long] : village} 
            zoom={12}
            scrollWheelZoom={true}
            style={{
                display: 'block',
                maxWidth: '480px',
                height: '480px'
            }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={village} icon={myIcon}>
                    <Popup>
                        มหาวิทยาลัยสงขลานครินทร์
                    </Popup>
                </Marker>
            {
                (lat && long && locationName)
                ? 
                <CurrentLocation />
                :
                <GetLatLong />
            }
        </MapContainer>
    )
}

export default MapLeaflet