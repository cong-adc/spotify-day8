import React, { useContext } from 'react'
import { MusicContext } from '../App'

export default function MusicPlaying() {
    const { music } = useContext(MusicContext)

    console.log('music', music);

    return (
        <div>
            {
                music?.url ?
                    <div>
                        <audio src={music?.url} controls autoPlay />
                        <h4>
                            {music?.title}
                        </h4>
                    </div>
                    : "Chưa chọn nhạc"
            }

        </div>
    )
}
