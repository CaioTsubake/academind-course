import classes from "./Layout.module.css";
import MenuNavegacao from "./MenuNavegacao";

function Layout(props) {
  return (
    <div>
      <MenuNavegacao />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
