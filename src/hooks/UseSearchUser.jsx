import { useState } from "react";
import { fetchUserProfile } from "../api/api";

const INITIAL_USER_PROFILE = {
  avatar: "",
  login: "",
  name: "",
  followers: null,
  following: null,
  publicRepos: null,
  isLoaded: false,
};

export const useSearchUser = () => {
  const [inputValue, setInputValue] = useState("");
  const [userProfile, setUserProfile] = useState(INITIAL_USER_PROFILE);

  const searchUserProfile = (search) => {
    return fetchUserProfile(search).then((res) => {
      setUserProfile({
        avatar: res.avatar_url,
        login: res.login,
        name: res.name,
        followers: res.followers,
        following: res.following,
        publicRepos: res.public_repos,
        isLoaded: true,
      });
    });
  };

  const handleResetButton = () => {
    setUserProfile(INITIAL_USER_PROFILE);
    setInputValue("");
  };

  return {
    inputValue,
    setInputValue,
    userProfile,
    searchUserProfile,
    handleResetButton,
  };
};
