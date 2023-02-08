import { OAuth2Client } from "google-auth-library";
import User from '../models/userModel.js'

const googleClient = new OAuth2Client({
    clientId: `${process.env.REACT_APP_ID_CLIENT}`,
  });
  export const authenticateUser= async (req,res)=>{
    const {token}=req.body
    const ticket = googleClient.verifyIdToken({
        idToken: token,
        audient: `${process.env.REACT_APP_ID_CLIENT}`,
      });

    const payload = ticket.getPayload();

    let user = await User.findOne({ email: payload?.email });
    if (!user) {
    user = new User({
        email: payload?.email,
        avatar: payload?.picture,
        name: payload?.name,
    });

    await user.save();
    }

    res.json({ user, token });
  }