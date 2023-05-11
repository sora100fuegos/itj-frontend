
import PageDescription from "@/components/PageDescription";
import { Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <section>
      <PageDescription
        title="About"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contacs
          </Button>
        </Grid>

        <Grid item md={6}></Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skills: ["C", "Javascript", "C#", "React", "Git", "SQL", "Node"],
    },
  };
}