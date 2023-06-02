import { useState } from "react";
import { fetchUserProfile } from "../api/api";
export const SearchUser = () => {
  const [input, setInput] = useState({
    inputValue: "",
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

  const searchUserProfile = (search) => {
    return fetchUserProfile(search).then((res) => {
      setUserProfile({
        avatar: res.avatar_url,
        login: res.login,
        name: res.name,
        followers: res.followers,
        following: res.following,
        publicRepos: res.public_repos,
      });
      setInput({
        isLoaded: true,
      });
    });
  };

  return {
    input,
    setInput,
    userProfile,
    searchUserProfile,
  };
};
