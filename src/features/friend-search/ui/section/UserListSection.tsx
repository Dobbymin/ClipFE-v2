"use client";

import { useState } from "react";

import { UserCard } from "../../components";

export const UserListSection = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "김클립", isFriend: false },
    { id: 2, name: "김도비", isFriend: true },
  ]);

  const handleToggleFriend = (clickedId: number) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === clickedId ? { ...friend, isFriend: !friend.isFriend } : friend,
    );
    setFriends(updatedFriends);
  };

  return (
    <div className='flex w-full flex-col gap-4'>
      <h3 className='w-full text-lg font-medium'>검색결과</h3>
      {friends.map((friend) => (
        <UserCard
          key={friend.id}
          isFriend={friend.isFriend}
          text={friend.name}
          onToggleFriend={() => handleToggleFriend(friend.id)}
        />
      ))}
    </div>
  );
};
