// var GoogleStrategy = require("passport-google-oidc");
// const model = require("../../models/index");
// const User = model.User;
// const user_socials = model.user_socials;
// module.exports = new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK_URL,
//     scope: ["profile", "email"],
//   },
//   async (issuer, profile, done) => {
//     const { displayName, emails } = profile;
//     const [{ value: email }] = emails;
//     // console.log(profile)
//     // console.log(displayName, email);
//     //1 Kiểm tra xem bên trong user_social có provider chưa
//     const provider = "google";
//     let providerDetail = await user_socials.findOne({
//       where: {
//         provider: provider,
//       },
//     });
//     //2 Nếu có thì sẽ lấy ra id user còn không sẽ thêm vào data
//     if (!providerDetail) {
//       providerDetail = await user_socials.create({
//         provider: provider,
//       });
//     }
//     let userId;
//     let user = await User.findOne({
//       where: {
//         email,
//       },
//     });
//     userId = user.id;
//     if (!user) {
//       user = await User.create({
//         name: displayName,
//         email,
//       });
//     }
//     console.log(`id user la: ${userId}`);
//     //3. Kiểm tra bảng user_socials xem đã có users hay chưa?
//     let userSocial = await user_socials.findOne({
//       where: {
//         userId: userId,
//       },
//     });
//     //4. Insert vào bảng users nếu chưa có hoặc lấy ra user nếu đã có
//     if (!userSocial) {
//       user = await User.create({
//         userId: userId,
//       });
//     }
//     //5. Return về hàm done với thông tin user lấy được để passport tự động xử lý đăng nhập
//     return done(null, user);
//   }
// );
