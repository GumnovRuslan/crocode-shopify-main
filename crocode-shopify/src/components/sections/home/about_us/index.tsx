import styles from './styles.module.scss'

const HomeAboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__inner}>
        <h2 className={styles.aboutUs__title}>about us</h2>
        <div className={styles.aboutUs__content}>
          <p className={styles.aboutUs__message}>
            <strong>crocode</strong> is a trusted partner in the world of <strong>Shopify</strong> and <strong>Shopify Plus</strong>. We help businesses reach the next level and fully unlock the potential of online sales.
          </p>
          <p className={styles.aboutUs__text}>
            Mgroup, a leading Shopify development agency, provides comprehensive end-to-end Shopify development services tailored to your unique needs and goals. Our team of Shopify experts, as a trusted Shopify agency, offers specialized support to Shopify store owners, ensuring optimization of every aspect of your online business. Our Shopify Plus agency services cover all areas of e-commerce: from setup and customization to ongoing maintenance and optimization.<br/>
            With extensive experience as a Shopify Plus partner, our Shopify development agency stays ahead of industry trends and best practices, helping you maintain a competitive edge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutUs