import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Inkdrop">
			<Container>
				<Title>Inkdrop<Badge>2016</Badge></Title>
				<P>
					A Markdown note-talking app with 100++ plugins, cross-platfo
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.inkdrop.app/">
							https://www.inkdrop.app/<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/linux/iOS/Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>NodeJS, Electron, React Native</span>
					</ListItem>
				</List>
			</Container>
		</Layout>
	)
}

export default Work