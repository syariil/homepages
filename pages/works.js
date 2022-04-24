import { Container, Heading,SimpleGrid, Text } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"

const Works = () => {
	return (
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>
			<SimpleGrid columns={[1,1,2]} gap={6}>
				<Section delay={0.4}>
					<Text fontSize={20} align="center">Empty</Text>
				</Section>
			</SimpleGrid>

		</Container>
		</Layout>
	)
}

export default Works