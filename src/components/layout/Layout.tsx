import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <div className={[styles.img, styles["h-300"]].join(" ")}></div>
      <Box
        backgroundColor={"gray.900"}
        paddingY={16}
        borderRadius={10}
        className={styles.center}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
