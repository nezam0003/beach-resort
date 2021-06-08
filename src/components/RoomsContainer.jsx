import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { useGlobalContext } from "../AppProvider";

import Loading from "./Loading";

const RoomsContainer = () => {
  const { rooms, sortedRooms, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
