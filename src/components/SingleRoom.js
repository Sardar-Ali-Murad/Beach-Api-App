import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Banner from "./Banner";
import "./SingleRoom.css";

const SingleRoom = () => {
  let { Rooms } = useAppContext();
  let { id } = useParams();
  let room = Rooms.find((all) => all?.sys.id === id);
  console.log(room);

  return (
    <div className="single-room-big-main">
      {/*  */}
      <div className="single-room-main">
        <div className="single-room-image">
          <img src={room?.fields?.images[0]?.fields?.file?.url} />
        </div>

        <div className="single-room-banner">
          <Banner
            mainHeading={room?.fields?.name}
            btnText="Back To Rooms"
            path="/rooms"
          />
        </div>
      </div>

      {/*  */}

      <div className="single-room-images div-center-80 grid-16">
        {room?.fields?.images.map((image) => {
          return <img src={image?.fields?.file?.url} />;
        })}
      </div>

      {/*  */}

      {/*  */}

      <div className="flex-even div-center-80 single-room-content">
        <div>
          <h3 style={{ fontWeight: "bolder" }}>Details</h3>
          <p>{room?.fields?.description}</p>
        </div>

        <div className="room-info">
          <h3 style={{ fontWeight: "bolder" }}>Info</h3>
          <p>Price : ${room?.fields?.price}</p>
          <p>Size : {room?.fields?.size} SQFT</p>
          <p>Max Capacity : {room?.fields?.capacity}</p>
          <div>
            {room?.fields?.pets ? <p>Pets Allowed</p> : <p>Pets Not Allowed</p>}
          </div>
          <div>
            {room?.fields?.breakfast ? (
              <p>Free BreakFast</p>
            ) : (
              <p>Not Free BreakFast</p>
            )}
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}

      <div className="single-room-extras  div-center-80">
          <h3 style={{ fontWeight: "bolder" }}>Extras</h3>
        <div >
          <div className="grid-20 extra-info">
            {room?.fields?.extras.map((all) => (
              <p>{all}</p>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default SingleRoom;
