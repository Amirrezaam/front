import axios from 'axios'
import { useEffect } from 'react'
import DownloadSection from './download/DownloadSection'
import Main from './main/Main'

export default function Home() {

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/search/PHP")
    //         .then(res => console.log(res))
    // }, [])

    return (
        <>
            <Main />
            <DownloadSection />
        </>
    )
}
