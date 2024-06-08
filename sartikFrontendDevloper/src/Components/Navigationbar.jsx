import Styles from './Navlink.module.css'
const Navigationbar = () => {
  return (
    <div className={Styles.navbar}>
    <div className={Styles.navbar1}>
    <div className={Styles.nav1}>
        <div className={Styles.Aigen}>AI.GEN</div>
        <div className={Styles.nav12}>Features</div>
        <div className={Styles.nav12}>Roadmap</div>
        <div className={Styles.nav12}>Tokenomics</div>
      </div>
      <div className={Styles.nav2}>
        <div className={Styles.nav21}>Whitepaper</div>
        <div className={Styles.nav22}> Get Started</div>
      </div>
    </div>
    </div>
  )
}

export default Navigationbar
