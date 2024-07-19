'use client';
import React, { useState } from 'react';
import styles from './MapComponent.module.scss';
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';

const MapComponent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
    const position = { lat: 40.3777, lng: 49.8543 };
    return (
        <APIProvider apiKey={apiKey}>
            <div style={{ height: '724px', width: '549px', borderRadius: '10px' }}>
                <Map zoom={9} center={position}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin background={'grey'} borderColor={'green'} glyphColor={'purple'} />
                    </AdvancedMarker>
                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>I am in Baku</p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
};

export default MapComponent;
