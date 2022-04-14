import { ReactNode } from "react";
import { Container } from "./Container/Container";
import { Grid } from "../Grid/Grid";
import { FC } from "react";

interface LayoutProps {
  children?: ReactNode;
  HeadNode?: ReactNode | null;
  title?: string | "Title";
}

const defaultProps: LayoutProps = {
  title: "MedArt",
};

export const Layout: FC<LayoutProps> = ({ children, title, HeadNode }) => {
  return (
    <>
      <div>head</div>
      <Container>
        <Grid container={true}>{children}</Grid>
      </Container>
      <div>F</div>
    </>
  );
};

Layout.defaultProps = defaultProps;
