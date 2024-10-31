import { Download } from 'lucide-react'
import React, { useContext } from 'react'
import data from '../assets/data.json'
import { MusicContext } from '../App';

export default function Container() {
    const [songs, setSongs] = React.useState(data);
    const { music, onPlayMusic } = useContext(MusicContext);

    const handlePlayMusic = (song) => {
        onPlayMusic(song)
    }

    /**
     * 1. Nhấn nút next => qua bài hát tiếp theo.
     * 2. Nhấn nút prev => quay lại bài hát trước đó.
     * 3. Khi hết bài hát cuối cùng thì quay lại bài hát đầu tiên.
     * 4. Khi hết bài -> next bài tiếp theo.
     * 5. Chỉnh âm thanh nhạc => ref audio => audio.volume = 0.5
     * 6. Random bài hát => Cơ bản là random tùm lum. Math.random() 1 -> 10 => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * Bài đã phát không random lại nữa. 1/(10 - so bai đã phát);
     * => Có thể tham khảo CHAT_GPT => NHƯNG KHÔNG LẠM DỤNG
     */

    return (
        <div className='container'>
            <div className='container-left'>
                <h4>
                    Now playing
                </h4>
                <h2 className='title'>
                    Song Title
                </h2>

                <div className='preview'>
                    <img src={music?.artwork} style={{ width: 256, height: 256 }} />
                    <div className='author'>
                        <img src='https://i.scdn.co/image/ab67616d0000b2737c3bb9f74a98f60bdda6c9a7' style={{ width: 64, height: 64, borderRadius: '50%' }} />
                        <h5>
                            Justin Bieber
                        </h5>
                    </div>

                </div>
            </div>
            <div className='container-right'>
                <table>
                    <tr>
                        <th style={{ width: '10%' }}>
                            #
                        </th>
                        <th style={{ width: '60%' }}>
                            Title
                        </th>
                        <th style={{ width: '20%' }}>
                            Author
                        </th>
                        <th style={{ width: '10%' }}>
                            <Download />
                        </th>
                    </tr>

                    <tbody>
                        {
                            songs.map((song, index) => (
                                <tr key={song.id} onClick={() => handlePlayMusic(song)}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {song.title}
                                    </td>
                                    <td>
                                        {song.artist}
                                    </td>
                                    <td>
                                        <a href={song.url} download target='_blank'>
                                            <Download />
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>
        </div>
    )
}
