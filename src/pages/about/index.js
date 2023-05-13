
import PageDescription from "@/components/PageDescription";
import { Grid, Button , Stack , Chip } from "@mui/material";
import { useRouter } from "next/router";

export default function About({ skills }) {
  const router = useRouter();
  return (
    <section>
      <PageDescription
        title="About me"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me!</h2>
          <p>I am  a backend  Developer specialized in java with some QA experience
            currently studying javascript to immprove my knowledge as a  the Frontend  developer 
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

        <Grid item md={6}>
        <h2>My Skills</h2>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];

  try {
    const response = await fetch(
      "https://manifest-actor-350500-default-rtdb.firebaseio.com/Skills.json"
    );
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      skills,
    },
    revalidate: 30,
  };
}