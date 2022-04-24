import { Container, Box, Heading, Image, Link, useColorModeValue, Button, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from "../components/layouts/article"
import {ChevronRightIcon} from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import {
	IoLogoInstagram,
	IoLogoFacebook
} from 'react-icons/io5'

const Page = () => {
	return (
		<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} p={3} mb={6} align="center">
				Hello, i&apos;m a student in unversity muhammadiyah of Surakarta!
			</Box>

			<box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Muhammad Syahril
					</Heading>
					<p>Web Developer</p>
				</Box>
				<Box flexShrink={0}
				mt={{ base: 4, md:0}}
				ml={{ md:6}}
				align="center">
					<Image
					borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
					maxWidth="100px" display="inline-block" borderRadius="full" src="/images/saya.jpg"
					alt="profile image" />
				</Box>
			</box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>Syahril is a freelance and front-end developer based in Bombana with 
					a passion for building digital services/stuff he wants. 
					He knows several programming language such as HTML, CSS, javascript, java, 
					but in the implementation to the industrial world there is still 
					quite a lack of experience, with that he wants to find 
					experience as a freelancer. When not online, he loves 
					 playing game or reading a books.{' '}
				
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						My portofolio
					</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>2001</BioYear>
					Born in Bombana, Southeast sualwesi
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Playing Game, Watching Movie, Reading Book
				</Paragraph>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant={'section-title'}>
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link Href="https://www.instagram.com/sya_riil" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>@sya_riil</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link Href="https://www.facebook.com/laimi13" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>Syahril</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
			<Box align="center" my={4}>
					<NextLink href="/posts">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						Populer Posts
					</Button>
					</NextLink>
				</Box>
		</Container>
		</Layout>
	)
}

export default Page