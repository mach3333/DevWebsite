import { Homebar, Title} from "./components"
import { motion } from "motion/react"
function Home() {
  return (

     <motion.div
      initial={{ opacity: .5, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <div>
      <Title></Title>
      <Homebar></Homebar>
      
    </div>

            
    </motion.div>
  );
}

export default Home;