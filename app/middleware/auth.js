module.exports = options => {
  return async function auth(ctx, next) {
    if (!ctx.session.user) {
      ctx.status = 401;
    } else {
      await next();
    }
  };
};
