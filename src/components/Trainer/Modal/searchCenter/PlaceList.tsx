import React from "react";
import { PlaceInfo } from "@/model/trainer/signUp";
import styled from "styled-components";

interface PlaceListProps {
  places: PlaceInfo[];
  handlePlaceSelect: (place: PlaceInfo) => void;
}

const PlaceList: React.FC<PlaceListProps> = ({ places, handlePlaceSelect }) => {
  return (
    <ul>
      {places.map((place, index) => (
        <ListItem key={index} onClick={() => handlePlaceSelect(place)}>
          <strong>{place.place_name}</strong>
          <br />
          {place.address_name}
          <br />
          {place.phone}
          <span>
            {place.distance
              ? Number(place.distance) >= 1000
                ? `${(Number(place.distance) / 1000).toFixed(2)}km 떨어져 있음`
                : `${place.distance}m 떨어져 있음`
              : "거리 정보 없음"}
          </span>
        </ListItem>
      ))}
    </ul>
  );
};

export default PlaceList;

const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-gray);
`;
