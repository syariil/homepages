import { Container, Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"


const Posts =() => {
	return (
	<Layout title="Posts">
		<Container>
			<Heading as="h4" fontSize={20} mb={4}>
				Populer Posts
			</Heading>
			<Section delay={0.5}>
			<Text align="center" fontSize={20} mb={4}>Empty</Text>
			</Section>
		</Container>
	</Layout>
		
	)
}

export default Posts