import React from "react"
import MainHeader from "../layout/MainHeader"
import HotelService from "../global/HotelService"
import Parallax from "../global/Parallax"
import RoomCarousel from "../global/RoomCarousel"
import RoomSearch from "../global/RoomSearch"
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation()
    const message = location.state && location.state.message
    const currentUser = localStorage.getItem("userId")

    return (
        <section>
            {message && <p className="text-warning px-5">{message}</p>}
            {currentUser && (
                <h6 className="text-success text-center"> You are logged in as {currentUser}</h6>
            )}
            <MainHeader />
            <div className="container">
                <RoomSearch />
                <RoomCarousel />
                <Parallax />
                <RoomCarousel />
                <HotelService />
                <Parallax />
                <RoomCarousel />
            </div>
        </section>
    )
}

export default Home
