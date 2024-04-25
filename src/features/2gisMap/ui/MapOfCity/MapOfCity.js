import React, { useEffect, useRef } from 'react';
import { load } from '@2gis/mapgl';

const MapOfCity = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        let localMap, localMarker;

        const initMap = async () => {
            const mapglAPI = await load();
            localMap = new mapglAPI.Map(mapContainer.current, {
                center: [74.5698, 42.8746], // Начальные координаты для Бишкека
                zoom: 13,
                key: process.env.REACT_APP_NEDVISHKAKEY,
            });

            localMarker = new mapglAPI.Marker(localMap, {
                coordinates: [74.5698, 42.8746], // Начальные координаты маркера
            });

            localMap.on('click', (e) => {
                const { lng, lat } = e.lngLat;
                localMarker.setCoordinates([lng, lat]); // Обновление координат маркера
            });
        };

        initMap();

        return () => {
            if (localMap) {
                localMap.destroy();
            }
            if (localMarker) {
                localMarker.destroy();
            }
        };
    }, []);

    return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default MapOfCity;