import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  headers: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: '100%',
  },
  paragraph: {
    margin: "20px 0",
  }
}));


const About = ( ) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Despre c19.md" />

      <Container maxWidth="md" style={{marginTop: `30px`}}>
        <Typography align="center" className={classes.headers}><h1>Despre Noi</h1></Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Bună! Probabil ești aici pentru că știi deja despre situația dificilă creată de virusul COVID-19. Și probabil din același motiv, vrei să afli informații și să găsești soluții pentru a te proteja de acest virus, atât pe tine, cât și pe oamenii dragi ție.
        </Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          În secolul 21 avem acces la multe tehnologii și instrumente digitale, care ne permit să utilizăm metodele de răspândire rapidă a informației prin internet și social media, puterea și viteza de calcul în continuă creștere a computerelor și capacitatea inteligentă a calculatoarelor de a găsi pattern-uri și legități acolo unde oamenii nu le pot detecta dintr-un volum mare de date.
        </Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Tehnologiile moderne + o comunitate IT puternica din Moldova, dornică de a găsi soluții într-o manieră modernă, entuziasmată să cerceteze informații și să le transforme în sute de linii de cod au creat împreună o comunitate ce luptă împreună împotriva virusului COVID-19, iar această platformă te va ajuta să fii și tu la curent cu situația la moment și noile soluții găsite și dezvoltate de către comunitate IT, împreună cu suportul și ajutorul tău!
        </Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Fii informat, respectă regulile de prevenire și hai să punem la lucru tehnologiile și calculatoarele pentru a soluționa problemele cauzate de coronavirus!
        </Typography>
      </Container>

      <Container maxWidth="md" style={{marginTop: `30px`}}>
        <Typography align="center" className={classes.headers}><h2>Inițiativa C19.MD Open Source</h2></Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Proiectul a fost inițiat cu scop de a facilita dezvoltarea implementărilor destinate soluționării problemelor legate de Coronavirus în Moldova. În cadrul proiectului vom urmări progresul situației și vom depista problemele care pot fi soluționate în contextul IT Open Source și inițiative organizate de voluntari.
        </Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Etapele Principale Proiectului:
          Nota: Proiectul a fost organizat ca un proces organic capabil să se adapteze progresului și rezultatele pozitive ale inițiative, și metodele vor fi adaptate în proces.
        </Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Etapele Principale:
        </Typography>
        <ol>
          <li>Inițierea proiectului - formare echipei voluntare de suportul inițiativei.</li>
          <li>Cercetarea situației - procesul de cercetare va fi continuu pe tot parcursul proiectului.</li>
          <li>Formarea focusului - alegerea problemelor și soluțiilor.</li>
          <li>Organizarea hackathon - urmează să fie mai multe ediții.</li>
          <li>Formarea soluțiilor și echipelor.</li>
          <li>Mentoratul, susținerea și promovarea proiectelor.</li>
          <li>Testarea și lansarea proiectelor.</li>
          <li>Feedback și statistica impactului.</li>
        </ol>

        <Typography component="p" variant="body1" className={classes.paragraph}>
          Hackathon va fi organizat online și activități în cadrul proiectului sunt organizate online.
        </Typography>
      </Container>

      <Container maxWidth="md" style={{marginTop: `30px`}}>
        <Typography align="center" className={classes.headers}><h2>Open Source COVID-19 Globally</h2></Typography>
        <Typography component="p" variant="body1" className={classes.paragraph}>
          Proiecte și implementări din diferite țări, menite să solutioneze problemele legate de pandemicul 2019 - 2020 - COVID-19.
        </Typography>

        <Typography component="p" variant="body2" className={classes.paragraph}>
          Open-Source-COVID-19
          A collection of Open Source projects during COVID-19
          <Typography variant="body2">
            <Link href="https://weileizeng.github.io/Open-Source-COVID-19/world" target="_blank">https://weileizeng.github.io/Open-Source-COVID-19/world</Link>
          </Typography>
        </Typography>

        <Typography component="p" variant="body2" className={classes.paragraph}>
          Romanian startup XVision offers doctors its AI analysis system to help diagnose COVID-19 faster
          <Typography variant="body2">
            <Link href="https://startupsnthecity.com/romanian-startup-xvision-offers-doctors-its-ai-analysis-system-to-help-diagnose-covid-19-faster/" target="_blank">https://startupsnthecity.com/romanian-startup-xvision-offers-doctors-its-ai-analysis-system-to-help-diagnose-covid-19-faster/</Link>
          </Typography>
        </Typography>

        <Typography component="p" variant="body2" className={classes.paragraph}>
          Information and support for your business
          Find new ways to operate in times like these.
          <Typography variant="body2">
            <Link href="https://www.smbhelp.com/" target="_blank">https://www.smbhelp.com/</Link>
          </Typography>
        </Typography>


        <Typography component="p" variant="body2" className={classes.paragraph}>
          Code for Romania a dezvoltat 6 aplicații care ajută în lupta cu COVID-19
          <Typography variant="body2">
            <Link href="https://start-up.ro/code-for-romania-dezvolta-6-aplicatii-care-ajuta-in-lupta-cu-covid-19/" target="_blank">https://start-up.ro/code-for-romania-dezvolta-6-aplicatii-care-ajuta-in-lupta-cu-covid-19/</Link>
          </Typography>
        </Typography>

        <Typography component="p" variant="body2" className={classes.paragraph}>
          COVID-19 Solidarity Response Fundraiser for WHO with $10 Million Match
          <Typography variant="body2">
            <Link href="https://www.facebook.com/donate/1564752357011737/2763727133697077" target="_blank">https://www.facebook.com/donate/1564752357011737/2763727133697077</Link>
          </Typography>
        </Typography>

      </Container>

    </Layout>
  )
}

export default About
