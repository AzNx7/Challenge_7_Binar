const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: "password",
    },
    async (payload, done) => {

      const user = await User.findByPk(payload.uid);

      done(null, user);
    }
  )
);

module.exports = passport;
