import { useState } from "react";

export const SearchUser = () => {
  const [user, setUser] = useState({
    inputValue: "",
    avatar: "",
    isLoaded: false,
  });

  const [userProfile, setUserProfile] = useState({
    avatar: "",
    login: "",
    name: "",
    followers: null,
    following: null,
    publicRepos: null,
    isClickBattle: false,
  });

  const searchUserAvatar = (search) => {
    setUser((prev) => ({
      ...prev,
      isLoaded: true,
      avatar: `https://github.com/${search}.png`,
    }));
  };

  const searchUserProfile = (search) => {
    return fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((res) => {
        setUserProfile({
          avatar: res.avatar_url,
          login: res.login,
          name: res.name,
          followers: res.followers,
          following: res.following,
          publicRepos: res.public_repos,
        });
      });
  };

  return {
    user,
    setUser,
    searchUserAvatar,
    userProfile,
    searchUserProfile,
  };
};
