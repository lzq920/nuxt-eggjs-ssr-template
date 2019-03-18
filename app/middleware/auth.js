module.exports = options => {
  return async function auth(ctx, next) {
    console.log("server", ctx.session.user);
    if (!ctx.session.user) {
      ctx.status = 401;
    } else {
      await next();
    }
  };
};
