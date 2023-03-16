import {
    MapContainer,
    Marker,
    TileLayer,
    useMap,
    useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, Fragment } from "react";

const mapIcon = new L.Icon({
    iconUrl: "/marker-icon-2x.png",
    iconRetinaUrl: "/marker-icon-2x.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(25, 41),
    popupAnchor: [0, 0]
});

function MapEvents() {
    const map = useMapEvents({
        click(event) {
            console.log(event);
        }
    });
}

export default function Interactive({ data }) {
    const [showSide, setShowSide] = useState(null);

    const showInfo = location => {
        setShowSide(location);
    };

    return (
        <>
            <MapContainer
                className="absolute top-0 left-0"
                center={[42.17834381523388, -72.51764808687316]}
                style={{ width: "100%", height: "100%" }}
                zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map(location => (
                    <Marker
                        key={location.name}
                        position={location.coords}
                        icon={mapIcon}
                        eventHandlers={{
                            click: event => {
                                showInfo(location);
                            }
                        }}
                    />
                ))}
            </MapContainer>
            <div className="bg-white absolute right-2 top-2 w-[35vw] max-w-[35vw] z-[999] h-full max-h-full overflow-auto p-10 rounded-md shadow-xl">
                <div className="prose prose-slate">
                    {showSide !== null ? (
                        <>
                            <h1>{showSide.name}</h1>
                            {showSide.events
                                .sort((a, b) => {
                                    return new Date(a.date) > new Date(b.date);
                                })
                                .map((event, idx) => (
                                    <div
                                        className="timeline-item"
                                        key={`${showSide.name}-${event.date}`}>
                                        <h3>{event.date}</h3>
                                        <p>
                                            <i>{event.name}</i>
                                        </p>
                                        <Fragment>{event.description}</Fragment>
                                        <p>
                                            <a
                                                href={event.link}
                                                target="_blank">
                                                More info here
                                            </a>
                                        </p>
                                    </div>
                                ))}
                        </>
                    ) : (
                        <>
                            <h1>What's this?</h1>
                            <p>
                                Timeline in map format listing several sewage
                                spills along the Connecticut River, specifically
                                along the Chicopee-Holyoke-South Hadley area. To
                                view the spills, click on the icons to view
                                what's happened in each area.
                            </p>
                            <p>
                                <a
                                    href="https://github.com/jianmin-chen/school"
                                    target="_blank">
                                    View source
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
