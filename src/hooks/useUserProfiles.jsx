import { useState } from "react";
import { fetchUserProfile } from "../api/api";

export const useUserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState({});

  const searchUserProfile = (userId, search) => {
    return fetchUserProfile(search).then((res) => {
      setUserProfiles((prev) => ({
        ...prev,
        [userId]: {
          profile: {
            avatar: res.avatar_url,
            login: res.login,
            name: res.name,
            followers: res.followers,
            following: res.following,
            publicRepos: res.public_repos,
          },
          isLoaded: true,
        },
      }));
    });
  };

  const resetUserProfile = (userId) => {
    setUserProfiles((prev) => ({
      ...prev,
      [userId]: null,
    }));
  };

  return {
    userProfiles,
    searchUserProfile,
    resetUserProfile,
  };
};
