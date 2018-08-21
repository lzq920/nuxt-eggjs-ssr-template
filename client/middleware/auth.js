export default function({ store, redirect }) {
  if (!store.state.userinfo && !store.state.userinfo.Token) {
    return redirect("/login");
  }
}
