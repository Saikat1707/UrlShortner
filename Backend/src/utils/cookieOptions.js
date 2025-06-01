const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: true,            // only over HTTPS
    sameSite: "None",        // required for cross-site cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    path: "/",               // make cookie available throughout the site
  };
};

export default getCookieOptions