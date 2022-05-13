import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
<<<<<<< HEAD
            <Link href="/">All Meetups</Link>
=======
            <Link href="/meets">All Meetups</Link>
>>>>>>> 309f6b425d3ae08b6ce87cc94c2bc73136f8fc67
          </li>
          <li>
            <Link href="/meets/new">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
