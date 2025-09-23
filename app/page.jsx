import Featured from "@/components/featured/featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/menu";
import styles  from "./homepage.module.css"
import HomeCard from "@/components/cardRoute/HomeCard";




export default function Home() {
  
  return (
    <div>
      <div className={styles.container}>
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
          <div className={styles.cardlist}>
          <h1 className={styles.titleCardlist}>Recent Posts</h1>
          <HomeCard></HomeCard>
          
          </div>

          <Menu/>          
        </div>
      </div>
    </div>


  );
}
