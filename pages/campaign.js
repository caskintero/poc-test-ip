import styles from "../styles/Home.module.css";

export async function getServerSideProps(context) {
  // Consultar la base de datos u otro origen de datos

  const ip =
    context.req.headers["x-forwarded-for"] ||
    context.req.connection.remoteAddress;
  console.log("=====IP CAMPAIGN=====", ip);
  // Pasar los datos como props a la página
  return {
    props: {
      url: "hola",
    },
  };
}

export default function Campaign() {
  return <div className={styles.container}>Camapign</div>;
}
