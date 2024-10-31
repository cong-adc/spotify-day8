import React from 'react'
import { Music } from 'lucide-react';
export default function Header() {
    return (
        <div className='header'>
            <div className='header-item'>
                <Music />
                <h1>Spotify</h1>
            </div>
        </div>
    )
}
