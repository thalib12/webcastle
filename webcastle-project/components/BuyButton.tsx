"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BuyButton() {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);
  const router = useRouter();

  const handleClick=()=>{
    alert("Coming soon!")
  }

  return (
    <div className="flex">
      {user.token ? (
        <>
          <button className="buy-btn btn" onClick={handleClick}>Buy Now</button>
          <button className="cart-btn btn" onClick={handleClick}>Add to Cart</button>
        </>
      ) : (
        <button
          className="buy-btn btn"
          onClick={() => router.push("/login")}
          style={{ width: "100%" }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default BuyButton;
