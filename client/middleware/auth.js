export default function({ store, redirect }) {
  if (!store.state.userinfo) {
    return redirect("/login");
  }
}
