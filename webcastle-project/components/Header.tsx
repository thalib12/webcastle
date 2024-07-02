"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [userDetails, setUserDetails] = useState<any>({});

  const handleStorageChange = () => {
    
    const storedUsername = localStorage.getItem("user");
    if (storedUsername) setUserDetails(JSON.parse(storedUsername));
  };

  const handleLogout = () => {
    setUserDetails({});
    localStorage.clear();
    window.location.reload()
  };
  

  useEffect(() => {
    handleStorageChange();

    

   
  }, []);
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            {userDetails.token ? (
              <p style={{ margin: "0px" }} onClick={handleLogout}>Logout</p>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </li>
          {userDetails.token && (
            <div className="profile">
              <div className="profile-img">
                <img src={userDetails.image} alt="" />
              </div>
              <p>{userDetails.username}</p>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
