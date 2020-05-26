import Head from 'next/head'
import { Box, Image, Heading, Text, Stack, Button, ButtonGroup, Input, Icon } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Baby Shower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        backgroundImage="url(/banner.png), url(/bg.jpg)"
        backgroundRepeat="no-repeat, repeat"
        backgroundPosition={[
          'center bottom -20px, center center',
          'center bottom -20px, center center',
          'center bottom -50px, center center',
          'center bottom -50px, center center'
        ]}
        backgroundSize="contain, contain"
        p={[5, 10, 20, 32]}
        as="main"
        display="flex"
        width="100%"
        alignItems="center"
        boxSizing="border-box"
        flexDir="column"
      >
        <Image w={['130px', '130px', '300px', '300px']} src="/swag.png" alt="baby-swag" />
        <Heading as="h1" size="2xl" mt={3} mb={10}>
          ¡Hola!
        </Heading>
        <Text fontSize={['xl', 'xl', '2xl', '3xl']}>¡Bienvenidos a mi Baby Shower!</Text>
        <Stack isInline mb={10}>
          <Image
            src="/mono1.gif"
            alt="person-1"
            w={['50px', '70px', '100px', '200px']}
            h={['100px', '140px', '200px', '400px']}
          />
          <Image
            src="/mono2.gif"
            alt="person-2"
            w={['50px', '70px', '100px', '200px']}
            h={['100px', '140px', '200px', '400px']}
          />
          <Image
            src="/mono3.gif"
            alt="person-3"
            w={['50px', '70px', '100px', '200px']}
            h={['100px', '140px', '200px', '400px']}
          />
          <Image
            src="/mono4.gif"
            alt="person-4"
            w={['50px', '70px', '100px', '200px']}
            h={['100px', '140px', '200px', '400px']}
          />
        </Stack>
        <Text textAlign="justify" fontSize={['xl', 'xl', '2xl', '3xl']} mb={10}>
          Soy bebé, mis papis me han contado que hay un virus allá afuera que no nos permite reunirnos varias personas
          para celebrar mi llegada 😕 así que por favor quédate en casa para conocernos muy pronto.
        </Text>
        <Image src="/casa.png" alt="stay-home" mb={10} width={['200px', '200px', '300px', '300px']} />
        <Text transform="capitalize" textAlign="center" fontSize={['xl', 'xl', '2xl', '3xl']} mb={10}>
          Así que a mis papis se les ocurrió una gran idea 💡
        </Text>
        <Text textAlign="justify" fontSize={['xl', 'xl', '2xl', '3xl']} mb={10}>
          Como mi papi es programador, hizo esta página para mi. Así podremos celebrar mi Baby Shower con la gente que
          es especial para nuestra familia ❤️
        </Text>
        <Icon size={['100px', '100px', '200px', '200px']} name="encuesta" mb={5} mt={10} />
        <Heading as="h2" mb={5}>
          ENCUESTA
        </Heading>
        <Text textAlign="justify" fontSize={['xl', 'xl', '2xl', '3xl']} mb={5}>
          Aún no sabemos cual será mi nombre, ¿nos ayudarías a decidir?
        </Text>
        <ButtonGroup spacing={5} mb={10}>
          <Button variantColor="blueElias" size="lg">
            Diego
          </Button>
          <Button variantColor="blueElias" size="lg">
            Elías
          </Button>
        </ButtonGroup>
        <Input w={['100%', '100%', '100%', '50%']} placeholder="¿Tienes otra sugerencia?" mb={10} />
        <Icon size={['100px', '100px', '200px', '200px']} name="mesaDeRegalos" mb={5} mt={5} />
        <Heading as="h2" mb={5}>
          MESA DE REGALOS
        </Heading>
        <Text fontSize={['xl', 'xl', '2xl', '3xl']} textAlign="center" mb={10}>
          Ahhh se me olvidaba, mi mesa de regalos está aquí abajo 👇
        </Text>
        <a href="https://www.amazon.com.mx/baby-reg/157HYP13R4OK5">
          <Button variantColor="amazon" rightIcon="amazon" size="lg" mb={5}>
            Mesa de regalos
          </Button>
        </a>
        <Text fontSize={['xl', 'xl', '2xl', '3xl']} textAlign="justify" mb={10}>
          ¡Sus regalos me harán muy feliz!
        </Text>
        <Heading textAlign="center" as="h3" mt={10} mb={5}>
          ¡Estoy ansioso de conocerlos a todos!
        </Heading>
        <Heading textAlign="center" as="h3" mb={[24, 24, 64, '400px']}>
          Nos vemos pronto, muchas gracias.
        </Heading>
      </Box>
    </>
  )
}
