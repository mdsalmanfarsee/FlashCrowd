import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




const Map = () => {
    return (
        <div>
            <h1>My Map App</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Marker 1 */}
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Marker 1 - Central location
                    </Popup>
                </Marker>

                {/* Marker 2 */}
                <Marker position={[51.515, -0.1]}>
                    <Popup>
                        Marker 2 - North West
                    </Popup>
                </Marker>

                {/* Marker 3 */}
                <Marker position={[51.495, -0.08]}>
                    <Popup>
                        Marker 3 - South East
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map